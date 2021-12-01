/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page' //serve para importar o arquivo do page object criado
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario , dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Izabele', 'Oliveira', 'EBAC', 'Brasil', 'AV ENDERECO', '45', 'São Paulo', 'São Paulo', '01014-100', '4121-4685', 'izabele@hotmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    })

    it.only('Deve fazer cadastro de faturamento com sucesso usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento
        (dadosEndereco[2].nome,
        dadosEndereco[2].sobrenome,
        dadosEndereco[2].empresa,
        dadosEndereco[2].pais,
        dadosEndereco[2].endereco,
        dadosEndereco[2].numero,
        dadosEndereco[2].cidade,
        dadosEndereco[2].estado,
        dadosEndereco[2].cep,
        dadosEndereco[2].telefone,
        dadosEndereco[2].email)

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    })
});