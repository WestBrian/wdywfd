describe('Recipe Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('changes tags', () => {
    cy.findAllByTestId('card-title')
      .first()
      .invoke('text')
      .then((text) => {
        cy.findByText('CHICKEN').click()
        cy.findByText(text).should('not.exist')
        cy.findAllByTestId('card-title').first().should('not.have.text', text)
      })
  })

  it('loads more recipes', () => {
    cy.findByText('Load more').click()
    cy.findAllByTestId('card-title').should('have.length', 12)
  })
})
