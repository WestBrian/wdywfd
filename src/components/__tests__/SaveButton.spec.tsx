import { render, screen, castMocked } from '../../../test-utils'
import { SaveButton, SaveButtonProps } from '../SaveButton'
import { mockRandomRecipe } from '../../../mock-data'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import { useSigninCheck } from 'reactfire'
import { setDoc } from 'firebase/firestore'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('reactfire', () => ({
  ...jest.requireActual('reactfire'),
  useSigninCheck: jest.fn(),
}))

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  setDoc: jest.fn(),
  deleteDoc: jest.fn(),
}))

const defaultValues: SaveButtonProps = {
  recipe: mockRandomRecipe,
}

const setup = (props?: Partial<SaveButtonProps>) => {
  render(<SaveButton {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<SaveButton />', () => {
  it('redirects when signed out', async () => {
    const mockedPush = jest.fn()
    castMocked(useRouter).mockImplementation(() => ({
      push: mockedPush,
    }))
    castMocked(useSigninCheck).mockImplementation(() => ({
      data: {},
    }))
    const { user } = setup()
    await user.click(screen.getByRole('button', { name: /Save recipe/ }))
    expect(mockedPush).toHaveBeenCalled()
    expect(mockedPush).toHaveBeenCalledWith('/sign-in')
  })

  it('saves a recipe when signed in', async () => {
    const mockedSetDoc = jest.fn()
    castMocked(useSigninCheck).mockImplementation(() => ({
      data: {
        user: {
          email: 'fake@email.com',
        },
      },
    }))
    castMocked(setDoc as any).mockImplementation(mockedSetDoc)
    const { user } = setup()
    await user.click(screen.getByRole('button', { name: /Save recipe/ }))
    expect(mockedSetDoc).toHaveBeenCalled()
  })
})
