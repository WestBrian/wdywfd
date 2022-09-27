import { render, screen } from '../../../test-utils'
import { RequireAuth, RequireAuthProps } from '../RequireAuth'
import React from 'react'
import * as reactfire from 'reactfire'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('reactfire', () => ({
  ...jest.requireActual('reactfire'),
  useSigninCheck: jest.fn(),
}))

function mockUseSigninCheck(impl: () => void) {
  const useSigninCheck = reactfire.useSigninCheck as jest.Mock
  useSigninCheck.mockImplementation(impl)
}

const defaultValues: RequireAuthProps = {
  children: <div />,
}

const setup = (props?: Partial<RequireAuthProps>) => {
  render(<RequireAuth {...{ ...defaultValues, ...props }} />)
}

describe('<RequireAuth />', () => {
  it('the child is rendered when logged in', async () => {
    mockUseSigninCheck(() => ({
      status: 'success',
      data: {
        signedIn: true,
      },
    }))
    setup({ children: <div>hello world</div> })
    expect(await screen.findByText('hello world')).toBeInTheDocument()
  })

  it('the child is not rendered when loading', () => {
    mockUseSigninCheck(() => ({
      status: 'loading',
      data: {
        signedIn: true,
      },
    }))
    setup({ children: <div>hello world</div> })
    expect(screen.queryByText('hello world')).not.toBeInTheDocument()
  })

  // it('redirects if not signed in', () => {
  //   mockUseSigninCheck(() => ({
  //     status: 'success',
  //     data: {
  //       signedIn: false,
  //     },
  //   }))
  //   setup()
  //   expect(screen.queryByText('hello world')).not.toBeInTheDocument()
  // })
})
