/// <reference types = "cypress" />


context('Funcionalidade Login', () => {

it('Caso 1 - Deve fazer login com sucesso' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('a > .hidden-xs').should('contain', 'Welcome')
})

it('Caso 2 - Deve exibir uma mensagem de erro ao inserir um usuario invalido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    cy.get('#username').type('aluno_ebc@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()


    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
})

it('Caso 3 - Deve exibir uma mensagem de erro ao inserir a senha invalida', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@te.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'A senha fornecida')

})

})