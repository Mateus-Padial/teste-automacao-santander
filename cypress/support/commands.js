import login from "../e2e/gui/elements/login_elements";
const email = Cypress.env('login_email');
const senha = Cypress.env('login_password');


Cypress.Commands.add('login', () => {
  cy.session('usuario_logado', () => {
    cy.visit('/login');
    cy.get(login.inputEmail).type(email)
    cy.get(login.inputSenha).type(senha)
    cy.get(login.botaoEntrar).click()
    cy.get(login.userIcon).should("contain.text", login.userNameText)
  });
});
