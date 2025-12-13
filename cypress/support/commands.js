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

// Cypress.Commands.add('login', (loginname, password) => {
//     cy.log("Open home page");
//     cy.visit('/');
//     cy.log("Open account/login page");
//     cy.get('#customer_menu_top').click();
//      cy.get('#loginFrm_loginname').type(loginname);
//     cy.get('#loginFrm_password').type(password);
//     cy.get('[title="Login"]').click();
//  })


//  Cypress.Commands.overwrite('type', (originalFn, element, text) => {
//   originalFn(element, text)
//   return originalFn(element, text)
// })
