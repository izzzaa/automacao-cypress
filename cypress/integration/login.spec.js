/// <reference types = "cypress" />


context('Funcionalidade Login', () => { //nome da sua funcionalidade, onde vao estão os casos de testes para aquela funcionalidade.

beforeEach(() => { //comando beforeEach serve para incluir comandos que vai ser utilizados em todos os testes.
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
});

afterEach(() => {
    cy.screenshot() //after each significa que vai executar o comando em cada teste.
});

after(() => {
    //after significa que vai executar o comando depois de todos os testes executados.
});



it('Caso 1 - Deve fazer login com sucesso' , () => {
    cy.get('#username').type('aluno_ebac@teste.com') // pegando o campo de username do site e incluindo dados nele.
    cy.get('#password').type('teste@teste.com') // pegando o campo de senha do site e incluindo dados nele.
    cy.get('.woocommerce-form > .button').click() //mapeado o botão de login, comando para clicar no botão.

    cy.get('a > .hidden-xs').should('contain', 'Welcome') //resultado esperado do teste, ou seja, identificando um campo que deve exibir em caso de login efetuado com sucesso.
})

it('Caso 2 - Deve exibir uma mensagem de erro ao inserir um usuario invalido', () => {
    cy.get('#username').type('aluno_ebc@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()


    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
})

it('Caso 3 - Deve exibir uma mensagem de erro ao inserir a senha invalida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@te.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'A senha fornecida')

})



})