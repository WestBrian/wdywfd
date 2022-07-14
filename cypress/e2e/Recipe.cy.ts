describe('Recipe', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('goes back a page', () => {
    cy.findAllByTestId('card-title').first().click()
    cy.location('pathname').should('contain', '/recipe')
    cy.findByLabelText('back').click()
    cy.location('pathname').should('equal', '/')
  })
})
