describe('Recipe', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
    cy.findAllByTestId('card-title').first().click()
    cy.findByLabelText('back').should('exist')
    cy.wait(500)
  })

  afterEach(() => {
    cy.logout()
  })

  it('goes back a page', () => {
    cy.findByLabelText('back').click()
    cy.location('pathname').should('equal', '/')
  })

  it('saves and deletes recipes', () => {
    cy.get('h2')
      .invoke('text')
      .then((title) => {
        cy.findByRole('button', { name: /Save recipe/ }).click()
        cy.findByRole('link', { name: /My Recipes/ }).click()
        cy.findByText(title, { selector: 'p' }).should('exist')

        cy.findByText(title, { selector: 'p' }).click()
        cy.findByRole('button', { name: /Save recipe/ }).click()
        cy.findByRole('link', { name: /My Recipes/ }).click()
        cy.findByText('My Saved Recipes', { selector: 'h1' }).should('exist')
        cy.findByText(title, { selector: 'p' }).should('not.exist')
      })
  })
})
