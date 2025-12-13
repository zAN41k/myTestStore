import user from '../fixtures/realUser.json'
import { faker } from '@faker-js/faker';

  beforeEach(() => {
    cy.log("Open home page");
    cy.visit('/');
    cy.log("Open account/login page");
    cy.get('#customer_menu_top').click();
  })

//describe('Registration successful test suite', () => {

    it('Auth with valid data', () => {
    cy.get('#loginFrm_loginname').type(user.loginname);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
  })
//})

describe('Registration not valid  test suite', () => {

  afterEach(()=> {

   cy.get('[title="Login"]').click();
   cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  })



    it('Auth with incorrect login ', () => {
    user.loginname = faker.internet.username();

    cy.get('#loginFrm_loginname').type(user.loginname);
    cy.get('#loginFrm_password').type(user.password);
    //cy.get('[title="Login"]').click();
    //cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  })

    it('Auth with empty login ', () => {
    user.loginname = ' ';

    cy.get('#loginFrm_loginname').type(user.loginname);
    cy.get('#loginFrm_password').type(user.password);
    //cy.get('[title="Login"]').click();
    //cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  })

     it('Auth with incorrect pass ', () => {
    user.password = faker.internet.username();

    cy.get('#loginFrm_loginname').type(user.loginname);
    cy.get('#loginFrm_password').type(user.password);
    //cy.get('[title="Login"]').click();
    //cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  })

    it('Auth with empty pass ', () => {

    cy.get('#loginFrm_loginname').type(user.loginname);
    //cy.get('#loginFrm_password').type(user.password);
    //cy.get('[title="Login"]').click();
    //cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  })
})
