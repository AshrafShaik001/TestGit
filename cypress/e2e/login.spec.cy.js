/// <reference types="cypress" />
describe('template spec', () => {
  it('Login with invalid credentails ', () => {
    cy.visit('https://staging.clearstory.dev');
    cy.get('[name="username"]').type('ext.gc.company@gmail.com');
    cy.get('[name="action"]').click();
    // cy.get('[name="password"]').type('Shaik@1996');
    cy.get('[name="action"]').click();
    // cy.get('[id="error-element-password"]').should('be.visible');
  })
})