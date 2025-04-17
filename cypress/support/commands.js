// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// 
//
// cypress/support/commands.js

// Comando customizado para login no Sauce Demo
Cypress.Commands.add('login_sauce', (username, password) => {
    // Visitar a página de login
    cy.visit('https://www.saucedemo.com/v1/index.html');
    
    // Preencher os campos de nome de usuário e senha
    cy.get('input[name="user-name"]').type(username);
    cy.get('input[name="password"]').type(password);
    
    // Clicar no botão de login
    cy.get('#login-button').click();
    
    // Verificar se a URL da página foi alterada corretamente para a página de inventário após o login
    cy.url().should('include', '/inventory.html');  // Ajuste a URL conforme necessário
  });

Cypress.Commands.add('preencheCarrinho', () => {
  cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
  cy.get('.fa-layers-counter').contains('6')
});

Cypress.Commands.add('preencheCarrinhoProblem', () => {
  cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
  cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
});
  