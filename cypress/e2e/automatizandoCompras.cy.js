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
    

})