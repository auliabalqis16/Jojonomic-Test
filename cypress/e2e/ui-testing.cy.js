describe('Test Skill jojonomic', () => {
  it('passes for search', () => {

    cy.viewport(1440, 800)
    cy.visit('https://www.service.nsw.gov.au/')
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('[name="q"]')
    cy.get('[name="q"]').eq(1).type('Apply for a number plate{enter}', {force: true, delay: 0})
    cy.contains('for').should('be.visible')
    cy.contains('Apply').should('be.visible')

  })

  it('passes for find location', () => {

    cy.viewport(1440, 800)
    cy.visit('https://www.service.nsw.gov.au/')
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.contains('Find locations').click()

    cy.get('#locatorTextSearch').focus().clear().type('Sydney 2000{enter}', {force: true, delay: 0})
    cy.contains('Rozelle Bay Maritime Service Centre').should('be.visible')

  })
})