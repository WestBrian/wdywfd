import { render, screen } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import { SignInForm, SignInFormProps } from '../SignInForm'
import React from 'react'

jest.mock('@chakra-ui/react', () => {
  const original = jest.requireActual('@chakra-ui/react')
  return {
    ...original,
    Hide: (props: any) => <div>{props.children}</div>,
  }
})

const defaultValues: SignInFormProps = {}

const setup = (props?: Partial<SignInFormProps>) => {
  render(<SignInForm {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<SignInForm />', () => {
  it('signs in with Google', async () => {
    const { user } = setup()
    await user.click(screen.getByText('Sign in with Google'))
  })
})
