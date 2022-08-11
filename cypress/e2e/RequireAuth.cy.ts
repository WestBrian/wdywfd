describe('Auth pages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('redirects bookmarks page', () => {
    cy.findByText('My Recipes').click()
    cy.findByText('Sign in / Register').should('exist')
  })
})
