describe('Testes logins', () => {
  it('login valido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('login invalido - username invalido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_userqw')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('login invalido - senha invalida', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_erro')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('login invalido - username e senha invalidos', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_uew')
    cy.get('[data-test="password"]').type('secret_erro')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  it('Login usuario vazio', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
  })

  it('login senha vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
  })

  it('login com dados vazios', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
  })

  it('login invalido - username+" " ', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user ')
    cy.get('[data-test="password"]').type('secret_sauce')
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

  it('login performance_glitch_user', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('login problem_user', () =>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.preencheCarrinhoProblem();
    cy.get('.fa-layers-counter').contains('3')

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

