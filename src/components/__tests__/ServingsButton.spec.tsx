import { render, screen } from '../../../test-utils'
import { ServingsButton, ServingsButtonProps } from '../ServingsButton'

const defaultValues: ServingsButtonProps = {
  servings: 2,
  setServings: jest.fn(),
}

const setup = (props?: Partial<ServingsButtonProps>) => {
  render(<ServingsButton {...{ ...defaultValues, ...props }} />)
}

describe('<ServingsButton />', () => {
  it('shows servings singular if servings is 1', () => {
    setup({ servings: 1 })
    expect(screen.queryByText('1 serving')).toBeInTheDocument()
  })

  it('shows servings plural if servings greater than 1', () => {
    setup({ servings: 2 })
    expect(screen.queryByText('2 servings')).toBeInTheDocument()
  })
})
