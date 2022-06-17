import { render } from '../../../test-utils'
import { RecipeSearch, RecipeSearchProps } from '../RecipeSearch'

const defaultValues: RecipeSearchProps = {}

const setup = (props?: Partial<RecipeSearchProps>) => {
  render(<RecipeSearch {...{ ...defaultValues, ...props }} />)
}

describe('<RecipeSearch />', () => {
  it('renders', () => {
    setup()
    return undefined
  })
})
