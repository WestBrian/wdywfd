import { render } from '../../../test-utils'
import { Bookmarks, BookmarksProps } from '../Bookmarks'
import React from 'react'
import * as reactfire from 'reactfire'

jest.mock('reactfire', () => ({
  ...jest.requireActual('reactfire'),
  useSigninCheck: jest.fn(),
}))

function mockUseSigninCheck(impl: () => void) {
  const useSigninCheck = reactfire.useSigninCheck as jest.Mock
  useSigninCheck.mockImplementation(impl)
}

const defaultValues: BookmarksProps = {}

const setup = (props?: Partial<BookmarksProps>) => {
  render(<Bookmarks {...{ ...defaultValues, ...props }} />)
}

describe('<Bookmarks />', () => {
  it('renders', () => {
    mockUseSigninCheck(() => ({
      data: {
        user: {},
      },
    }))
    setup()
  })
})
