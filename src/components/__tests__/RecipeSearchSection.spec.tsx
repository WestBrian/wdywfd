import { render, screen } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import {
  RecipeSearchSection,
  RecipeSearchSectionProps,
} from '../RecipeSearchSection'

function queryBadge(str: string) {
  return screen.queryByText(str, { selector: 'span' })
}

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
    await user.click(screen.getByLabelText('MAIN COURSE'))
    expect(screen.getByLabelText('MAIN COURSE')).toBeChecked()
  })

  it('shows and clears badges for each filter', async () => {
    const { user } = setup()
    await user.click(screen.getByLabelText('Filters'))

    await user.selectOptions(screen.getByLabelText('Cuisine'), 'African')
    await user.selectOptions(screen.getByLabelText('Diets'), 'Gluten Free')
    await user.selectOptions(screen.getByLabelText('Intolerances'), 'Dairy')
    await user.type(screen.getByLabelText('Max Ready Time'), '30')

    await user.click(screen.getByText('Update filters'))
    expect(queryBadge('African')).toBeInTheDocument()
    expect(queryBadge('Gluten Free')).toBeInTheDocument()
    expect(queryBadge('No Dairy')).toBeInTheDocument()
    expect(queryBadge('30 minutes or less')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Filters'))
    await user.click(screen.getByText('Reset filters'))
    expect(queryBadge('African')).not.toBeInTheDocument()
    expect(queryBadge('Gluten Free')).not.toBeInTheDocument()
    expect(queryBadge('No Dairy')).not.toBeInTheDocument()
    expect(queryBadge('30 minutes or less')).not.toBeInTheDocument()
  })
})
