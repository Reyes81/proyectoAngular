describe('My First Test', () => {
    it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('#menu').click({force: true})
    cy.get('#admin').click({force: true})
    cy.get('#listaJugadores').click({force: true})
    cy.contains('Jugador')

    })
    })