import { render, screen, waitFor } from '../../../test-utils'
import { RecipeSearch, RecipeSearchProps } from '../RecipeSearch'
import userEvent from '@testing-library/user-event'
import { defaultServer } from '../../lib/mocks/test-server'
import { failRandomRecipe } from '../../lib/mocks/handlers'

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

    await user.click(screen.getByLabelText('CHICKEN'))
    await waitFor(() =>
      expect(screen.queryByText(firstText!)).not.toBeInTheDocument()
    )

    const recipeTitlesChicken = await screen.findAllByTestId('card-title')
    const secondText = recipeTitlesChicken[0].textContent

    expect(firstText).not.toEqual(secondText)
  })

  it('loads more recipes by tag', async () => {
    const { user } = setup()
    expect(await screen.findAllByRole('img')).toHaveLength(6)
    expect(screen.getByLabelText('ALL')).toBeChecked()
    await user.click(screen.getByText('Load more'))
    await waitFor(() => expect(screen.queryAllByRole('img')).toHaveLength(12))

    await user.click(screen.getByLabelText('CHICKEN'))
    await waitFor(() => expect(screen.queryAllByRole('img')).toHaveLength(6))
  })

  it('renders an error if the fetch fails', async () => {
    defaultServer.use(failRandomRecipe)
    setup()
    expect(
      await screen.findByText(
        'There was an issue fetching the recipes',
        {},
        { timeout: 2000 }
      )
    ).toBeInTheDocument()
  })
})
