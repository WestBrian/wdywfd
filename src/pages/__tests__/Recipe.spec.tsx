import { render, screen } from '../../../test-utils'
import { Recipe, RecipeProps } from '../Recipe'
import { mockRandomRecipe } from '../../../mock-data'
import userEvent from '@testing-library/user-event'
import React from 'react'
import startCase from 'lodash/startCase'

jest.mock('next/router', () => require('next-router-mock'))

const defaultValues: RecipeProps = {
  recipe: mockRandomRecipe,
}

const setup = (props?: Partial<RecipeProps>) => {
  render(<Recipe {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<Recipe />', () => {
  it('decreases servings', async () => {
    const { user } = setup()
    expect(screen.queryByText('2 large')).toBeInTheDocument()
    await user.click(screen.getByLabelText('less servings'))
    expect(screen.queryByText('1 large')).toBeInTheDocument()
  })

  it('increases servings', async () => {
    const { user } = setup()
    expect(screen.queryByText('2 large')).toBeInTheDocument()
    await user.click(screen.getByLabelText('more servings'))
    expect(screen.queryByText('3 large')).toBeInTheDocument()
  })

  it('goes back on back click', async () => {
    const { user } = setup()
    await user.click(screen.getByLabelText('back'))
    return undefined
  })

  it('fallsback on no image', () => {
    setup({ recipe: { ...mockRandomRecipe, image: undefined } })
    expect(screen.queryByTestId('img-fallback')).toBeInTheDocument()
  })

  it('shows special badges', () => {
    setup({
      recipe: {
        ...mockRandomRecipe,
        vegan: true,
        vegetarian: true,
        veryPopular: true,
      },
    })
    expect(screen.getByText('vegan')).toBeInTheDocument()
    expect(screen.getByText('vegetarian')).toBeInTheDocument()
    expect(screen.getByText('very popular')).toBeInTheDocument()
  })

  it('toggles between ingredients and steps', async () => {
    const { user } = setup()
    const ingredients = mockRandomRecipe.extendedIngredients
    const steps = mockRandomRecipe.analyzedInstructions[0].steps
    const numOfIngredients = ingredients.length
    const numOfSteps = steps.length

    expect(
      screen.queryByText(startCase(ingredients[0].name))
    ).toBeInTheDocument()
    await user.click(screen.getByText(`Steps (${numOfSteps})`))
    expect(screen.queryByText(steps[1].step)).toBeInTheDocument()
    await user.click(screen.getByText(`Ingredients (${numOfIngredients})`))
    expect(
      screen.queryByText(startCase(ingredients[0].name))
    ).toBeInTheDocument()
  })

  it('shows more of the description', async () => {
    const { user } = setup()
    const beforeLength =
      screen.getByTestId('show-more-button').parentNode?.textContent?.length!
    await user.click(screen.getByTestId('show-more-button'))
    const afterLength =
      screen.getByTestId('show-more-button').parentNode?.textContent?.length!
    expect(beforeLength).toBeLessThan(afterLength)
  })
})
