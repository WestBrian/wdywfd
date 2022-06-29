import { render, screen, fireEvent } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import {
  RecipeSearchSection,
  RecipeSearchSectionProps,
} from '../RecipeSearchSection'

const defaultValues: RecipeSearchSectionProps = {}

const setup = (props?: Partial<RecipeSearchSectionProps>) => {
  render(<RecipeSearchSection {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<RecipeSearchSection />', () => {
  it('toggles radio buttons on click', async () => {
    const { user } = setup()
    expect(screen.getByLabelText('ALL')).toBeChecked()
    await user.click(screen.getByLabelText('CHICKEN'))
    expect(screen.getByLabelText('CHICKEN')).toBeChecked()
  })

  it('updates input value', async () => {
    const { user } = setup()
    expect(screen.getByLabelText('Recipe Query')).toHaveValue('')
    await user.type(screen.getByLabelText('Recipe Query'), 'cheesesteak')
    expect(screen.getByLabelText('Recipe Query')).toHaveValue('cheesesteak')
  })
})
