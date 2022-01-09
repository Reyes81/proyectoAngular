describe('My First Test', () => {
  it('Visits the initial project page', () => {
  cy.visit('/')
  cy.get('#login').click()
  cy.get('input[name=nombre]').type('jugador1')
  cy.get('input[name=password]').type('12345')
  cy.get('button[type=submit]').click()
  })
  })
  
