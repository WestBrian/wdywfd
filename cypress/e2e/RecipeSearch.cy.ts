describe('Recipe Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('changes tags', () => {
    cy.findAllByTestId('card-title')
      .first()
      .invoke('text')
      .then((text) => {
        cy.findByText('MAIN COURSE').click()
        cy.findByText(text).should('not.exist')
        cy.findAllByTestId('card-title').first().should('not.have.text', text)
      })
  })

  it('loads more recipes', () => {
    cy.findByText('Load more').click()
    cy.findAllByTestId('card-title').should('have.length.greaterThan', 6)
  })

  it('searches recipes', () => {
    cy.findAllByTestId('card-title')
      .first()
      .invoke('text')
      .then((text) => {
        cy.findByLabelText('Recipe Query').type('Tacos')
        cy.findByText(text).should('not.exist')
        cy.findAllByTestId('card-title').first().should('not.have.text', text)
      })
  })

  it('loads more searched recipes', () => {
    cy.findAllByTestId('card-title')
      .first()
      .invoke('text')
      .then((text) => {
        cy.findByLabelText('Recipe Query').type('Tacos')
        cy.findByText(text).should('not.exist')
        cy.findByText('Load more').click()
        cy.findAllByTestId('card-title').should('have.length.greaterThan', 6)
      })
  })

  it('filters recipes', () => {
    cy.findAllByTestId('card-title')
      .first()
      .invoke('text')
      .then((text) => {
        cy.findByLabelText('Filters').click()
        cy.findByLabelText('Cuisine').select('African')
        cy.findByText('Update filters').click()
        cy.findByText(text).should('not.exist')
        cy.findByText('African', { selector: 'span' }).should('exist')
        cy.findAllByTestId('card-title').first().should('not.have.text', text)
      })
  })
})
