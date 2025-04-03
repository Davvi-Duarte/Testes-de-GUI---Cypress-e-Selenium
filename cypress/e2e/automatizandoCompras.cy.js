describe('Testes de compras', () => {
    it('Compra com sucesso - standard_user', () => {
        cy.login_sauce('standard_user', 'secret_sauce');
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        // Localizando o ícone pelo atributo 'data-icon' e clicando
        cy.get('[data-icon="shopping-cart"]').click();
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Lucas')
        cy.get('[data-test="lastName"]').type('Almeida')
        cy.get('[data-test="postalCode"]').type('12345678')
        cy.get('.btn_primary.cart_button').click()
        cy.get('.btn_action').click()
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
    })

    it('remoção de produto por meio da tela de produtos - standard_user', () => {
        cy.login_sauce('standard_user', 'secret_sauce');
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').contains('6')
        cy.get(':nth-child(1) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('5')
        cy.get(':nth-child(2) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('4')
        cy.get(':nth-child(3) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('3')
        cy.get(':nth-child(4) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('2')
        cy.get(':nth-child(5) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('1')
        cy.get(':nth-child(6) > .pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').should('not.exist')

    })

    it('remoção de produto por meio da tela de carrinho - standard_user', () => {
        cy.login_sauce('standard_user', 'secret_sauce');
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').contains('6')
        cy.get('[data-icon="shopping-cart"]').click()
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('5')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('4')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('3')
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('2')
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').contains('1')
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .btn_secondary').click()
        cy.get('.fa-layers-counter').should('not.exist')
    })
})


describe('Teste de permanencia de carrinho pós logout', () => {
    
    it('Verifica se o carrinho permanece após logout - standard_user', () => {
        cy.login_sauce('standard_user', 'secret_sauce');
        cy.preencheCarrinho();
        cy.get('.bm-burger-button > button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('.login_logo').should('be.visible')
        cy.login_sauce('standard_user', 'secret_sauce');
        cy.get('.fa-layers-counter').contains('6')
    })
})