import { render, screen } from '../../../test-utils'
import { Layout, LayoutProps } from '../Layout'
import React from 'react'
import userEvent from '@testing-library/user-event'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('@chakra-ui/react', () => {
  const original = jest.requireActual('@chakra-ui/react')
  return {
    ...original,
    Show: (props: any) => <div>{props.children}</div>,
  }
})

const defaultValues: LayoutProps = {
  children: <div />,
}

const setup = (props?: Partial<LayoutProps>) => {
  render(<Layout {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<Layout />', () => {
  it('switches color mode icon', async () => {
    const { user } = setup()
    await user.click(screen.getByLabelText('Dark mode'))
    expect(screen.queryByLabelText('Light mode')).toBeInTheDocument()
  })
})
