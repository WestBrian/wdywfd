import { render, screen } from '../../../test-utils'
import { RecipeCardSection, RecipeCardSectionProps } from '../RecipeCardSection'
import { defaultServer } from '../../lib/mocks/test-server'

const defaultValues: RecipeCardSectionProps = {
  tag: 'all',
  page: 1,
}

const setup = (props?: Partial<RecipeCardSectionProps>) => {
  render(<RecipeCardSection {...{ ...defaultValues, ...props }} />)
}

describe('<RecipeCardSection />', () => {
  beforeAll(() => {
    defaultServer.listen()
  })

  afterEach(() => {
    defaultServer.resetHandlers()
  })

  afterAll(() => {
    defaultServer.close()
  })

  it('renders the recipe cards', async () => {
    setup()
    expect(await screen.findAllByRole('img')).toHaveLength(6)
  })
})
