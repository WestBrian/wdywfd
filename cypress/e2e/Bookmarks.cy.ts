describe('Bookmarks', () => {
  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  it('goes to the bookmarks', () => {
    cy.visit('/bookmarks')
    cy.findByText('My Saved Recipes', {
      selector: 'h1',
    }).should('exist')
  })
})
