import { render, screen } from '../../../test-utils'
import { RecipeCard, RecipeCardProps } from '../RecipeCard'
import { mockRandomRecipe } from '../../../mock-data'

const defaultValues: RecipeCardProps = {
  recipe: mockRandomRecipe,
}

const setup = (props?: Partial<RecipeCardProps>) => {
  render(<RecipeCard {...{ ...defaultValues, ...props }} />)
}

describe('<RecipeCard />', () => {
  it('renders image when available', () => {
    setup()
    expect(screen.queryByRole('img')).toBeInTheDocument()
  })

  it('falls back when there is no image', () => {
    setup({
      recipe: { ...mockRandomRecipe, image: undefined },
    })
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
