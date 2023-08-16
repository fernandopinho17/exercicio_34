    /// <reference types="cypress" />

    describe('Testes para a home', () => {
    it('Deve incluir 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.adicionar').click()
    })
    it('Deve editar 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').click()
    })
    it('Deve remover 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.delete').click()
    })
})
