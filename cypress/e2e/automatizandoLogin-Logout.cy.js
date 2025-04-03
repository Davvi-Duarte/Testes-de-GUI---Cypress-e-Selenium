describe('Testes logins', () => {
  it.only('login valido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('login invalido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('login locked_out_user', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })

  it('login problema_user', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('login performance_glitch_user', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('login usuario vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
  })

  it('login senha vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
  })

  it('Login usuario vazio', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
  })

 

})

describe('Testes de logout', () => {

  it('logout - standard_user', () => {
    cy.login_sauce('standard_user', 'secret_sauce');
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('be.visible')
  })
  
  it('logout - performance_glitch_user', () => {
    cy.login_sauce('performance_glitch_user', 'secret_sauce');
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('be.visible')
  })

  it( 'logout - problem_user', () => {
    cy.login_sauce('problem_user', 'secret_sauce');
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('be.visible')
  })

})

