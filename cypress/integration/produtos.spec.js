/// <reference types='cypress' />

describe('Funcionalidade da pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Caso 1 - Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]') //quando o html é tipo class voce tem que colocar os colchetes.
        //.first() //pega o primeiro item da class inserida
        //.last() //pega o ultimo item da class inserida
        //.eq(3) //pega o item conforme sequencia mencionada da class inserida
        .contains('Ariel Roll Sleeve Sweatshirt') //pega o item conforme escrito 
        .click()
    });

    it.only('Caso 2 - Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3 //associando uma variavel a uma quantidade fixa
        
        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt') //pega o item conforme escrito 
        .click()

        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade) //passando a variavel criada no metodo
        cy.get('.single_add_to_cart_button').click()


        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade) //incluindo no resultado esperado a variavel que foi criada.
        //cy.get('.woocommerce-message').should('contain' , quantidade + ' x “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        
    });
});