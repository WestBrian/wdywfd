describe('Bookmarks', () => {
  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  it('goes to the bookmarks', () => {
    cy.visit('/bookmarks')
    cy.findByText('My Recipes', {
      selector: 'h2',
    }).should('exist')
  })
})
