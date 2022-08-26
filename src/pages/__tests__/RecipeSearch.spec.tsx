import { render, screen, waitFor } from '../../../test-utils'
import { RecipeSearch, RecipeSearchProps } from '../RecipeSearch'
import userEvent from '@testing-library/user-event'
import { defaultServer } from '../../lib/mocks/test-server'
import {
  failOverLimitRandomRecipe,
  failRandomRecipe,
  failSearchRecipe,
} from '../../lib/mocks/handlers'
import React from 'react'

const defaultValues: RecipeSearchProps = {}

const setup = (props?: Partial<RecipeSearchProps>) => {
  render(<RecipeSearch {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<RecipeSearch />', () => {
  beforeAll(() => {
    defaultServer.listen()
  })

  afterEach(() => {
    defaultServer.resetHandlers()
  })

  afterAll(() => {
    defaultServer.close()
  })

  it('changes recipes when a new tag is selected', async () => {
    const { user } = setup()

    const recipeTitlesAll = await screen.findAllByTestId('card-title')
    const firstText = recipeTitlesAll[0].textContent

    await user.click(screen.getByLabelText('MAIN COURSE'))
    await waitFor(() =>
      expect(screen.queryByText(firstText!)).not.toBeInTheDocument()
    )

    const recipeTitlesMain = await screen.findAllByTestId('card-title')
    const secondText = recipeTitlesMain[0].textContent

    expect(firstText).not.toEqual(secondText)
  })

  it('loads more random recipes by tag', async () => {
    const { user } = setup()
    expect(await screen.findAllByRole('img')).toHaveLength(6)
    expect(screen.getByLabelText('ALL')).toBeChecked()
    await user.click(screen.getByText('Load more'))
    await waitFor(() => expect(screen.queryAllByRole('img')).toHaveLength(12))

    await user.click(screen.getByLabelText('MAIN COURSE'))
    await waitFor(() => expect(screen.queryAllByRole('img')).toHaveLength(6))
  })

  it('renders an error if the random fetch fails', async () => {
    defaultServer.use(failRandomRecipe)
    setup()
    expect(
      await screen.findByText(
        'There was an issue fetching the recipes',
        {},
        { timeout: 4000 }
      )
    ).toBeInTheDocument()
  })

  it('loads more searched recipes by tag', async () => {
    const { user } = setup()

    // Searches recipes
    const randomRecipeTitles = await screen.findAllByTestId('card-title')
    const randomRecipeTitle = randomRecipeTitles[0].textContent
    await user.type(screen.getByLabelText('Recipe Query'), 'tacos')
    await waitFor(
      () =>
        expect(screen.queryByText(randomRecipeTitle!)).not.toBeInTheDocument(),
      {
        timeout: 4000,
      }
    )
    const searchRecipeTitles = await screen.findAllByTestId('card-title')
    const searchRecipeTitle = searchRecipeTitles[0].textContent
    expect(randomRecipeTitle).not.toBe(searchRecipeTitle)

    // Loads more recipes
    expect(await screen.findAllByRole('img')).toHaveLength(6)
    await user.click(screen.getByText('Load more'))
    await waitFor(() => expect(screen.queryAllByRole('img')).toHaveLength(12))
  })

  it('renders an error if the search fetch fails', async () => {
    defaultServer.use(failSearchRecipe)
    const { user } = setup()
    await user.type(screen.getByLabelText('Recipe Query'), 'tacos')
    expect(
      await screen.findByText(
        'There was an issue fetching the recipes',
        {},
        { timeout: 4000 }
      )
    ).toBeInTheDocument()
  })

  it('renders a custom error on over limit', async () => {
    defaultServer.use(failOverLimitRandomRecipe)
    setup()
    expect(
      await screen.findByText(
        'The daily search limit for recipes has been reached, please try again tomorrow',
        {},
        { timeout: 4000 }
      )
    ).toBeInTheDocument()
  })
})
