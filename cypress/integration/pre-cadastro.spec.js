/// <reference types ='cypress' />
var faker = require('faker'); //biblioteca que serve para gerar dados dinamicos


describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
it('Deve completar o pré cadastro com sucesso', () => {
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(nomeFaker)

    
    
    cy.get('#reg_email').type(emailFaker) //chamando o metodo faker que dentro de internet tem o campo internet.
    cy.get('#reg_password').type('!teste@teste$')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(nomeFaker) //metodo faker que gera primeiro nome dinamicos.
    cy.get('#account_last_name').type(sobrenomeFaker) //metodo faker que gera segundo nome dinamicos.

    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

});

it.only('Deve completar pre cadastro usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Izabele', 'Almeida') 
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')


});


});