import { render, screen } from '../../../test-utils'
import { Recipe, RecipeProps } from '../Recipe'
import { mockRandomRecipe } from '../../../mock-data'
import userEvent from '@testing-library/user-event'
import React from 'react'

jest.mock('next/router', () => require('next-router-mock'))

const defaultValues: RecipeProps = {
  recipe: mockRandomRecipe,
}

const setup = (props?: Partial<RecipeProps>) => {
  render(<Recipe {...{ ...defaultValues, ...props }} />)

  return {
    user: userEvent.setup(),
  }
}

describe('<Recipe />', () => {
  it('decreases servings', async () => {
    const { user } = setup()
    expect(screen.queryByText('2 large')).toBeInTheDocument()
    await user.click(screen.getByLabelText('less servings'))
    expect(screen.queryByText('1 large')).toBeInTheDocument()
  })

  it('increases servings', async () => {
    const { user } = setup()
    expect(screen.queryByText('2 large')).toBeInTheDocument()
    await user.click(screen.getByLabelText('more servings'))
    expect(screen.queryByText('3 large')).toBeInTheDocument()
  })

  it('goes back on back click', async () => {
    const { user } = setup()
    await user.click(screen.getByLabelText('back'))
    return undefined
  })

  it('fallsback on no image', () => {
    setup({ recipe: { ...mockRandomRecipe, image: undefined } })
    expect(screen.queryByTestId('img-fallback')).toBeInTheDocument()
  })

  it('shows special badges', () => {
    setup({
      recipe: {
        ...mockRandomRecipe,
        vegan: true,
        vegetarian: true,
        veryPopular: true,
      },
    })
    expect(screen.getByText('vegan')).toBeInTheDocument()
    expect(screen.getByText('vegetarian')).toBeInTheDocument()
    expect(screen.getByText('very popular')).toBeInTheDocument()
  })
})
