import { render, screen } from '../../../test-utils'
import { MyAccount, MyAccountProps } from '../MyAccount'
import userEvent from '@testing-library/user-event'

jest.mock('reactfire', () => ({
  ...jest.requireActual('reactfire'),
  useSigninCheck: () => ({
    data: {
      user: {
        email: 'test@example.com',
      },
    },
  }),
}))

const defaultValues: MyAccountProps = {}

const setup = (props?: Partial<MyAccountProps>) => {
  render(<MyAccount {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<MyAccount />', () => {
  it('displays the user', () => {
    setup()
    expect(screen.queryByText('test@example.com')).toBeInTheDocument()
  })

  it('toggles dark mode', async () => {
    const { user } = setup()
    expect(screen.queryByLabelText('Dark mode')).not.toBeChecked()
    await user.click(screen.getByLabelText('Dark mode'))
    expect(screen.queryByLabelText('Dark mode')).toBeChecked()
  })
})
