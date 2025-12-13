import user from '../fixtures/realUser.json'
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import loginPageAlternative from "../support/pages/LoginPageAlternative"



  // beforeEach(() => {
  //   cy.log("Open home page");
  //   cy.visit('/');
  //   cy.log("Open account/login page");
  //   cy.get('#customer_menu_top').click();
  // })

    beforeEach(() => {
    homePage.visit();
    homePage.clickLoginOrRegisterButton();
  })


//describe('Registration successful test suite', () => {

  //   it('Auth with valid data', () => {
  //   cy.get('#loginFrm_loginname').type(user.loginname);
  //   cy.get('#loginFrm_password').type(user.password);
  //   cy.get('[title="Login"]').click();
  // })
//})

   it('Auth with valid data', () => {
    loginPage.fillLoginForm(user.loginname, user.password);
    loginPage.clickLoginButton();
    accountPage.getFirstNameText().should('have.text', user.firstname);
  })

describe('Registration not valid  test suite', () => {

  // afterEach(()=> {

  //  cy.get('[title="Login"]').click();
  //  cy.get('[class="alert alert-error alert-danger"]').should('contain', 'Error: Incorrect login or password provided.');
  // })

    afterEach(()=> {
      loginPage.clickLoginButton();
      loginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
  })



  //   it('Auth with incorrect login ', () => {
  //   user.loginname = faker.internet.username();
  //   cy.get('#loginFrm_loginname').type(user.loginname);
  //   cy.get('#loginFrm_password').type(user.password);
  // })

    it('Auth with incorrect login ', () => {
    user.loginname = faker.internet.username();
    loginPage.fillLoginForm(user.loginname, user.password);
  })

  //   it('Auth with empty login ', () => {
  //   user.loginname = ' ';
  //   cy.get('#loginFrm_loginname').type(user.loginname);
  //   cy.get('#loginFrm_password').type(user.password);
  // })

      it('Auth with empty login ', () => {
      loginPage.fillLoginForm('', user.password);

  })

    it('Auth with incorrect pass ', () => {
    user.password = faker.internet.username();
    loginPage.fillLoginForm(user.loginname, user.password);
  })

    it('Auth with empty pass ', () => {
    loginPage.fillLoginForm(user.loginname, '');
  })

  it('User cannot login with empty password', () => {
    loginPageAlternative.getLoginNameInputField().type(user.loginname);
    // loginPageAlternative.getPasswordInputField().type(' ');
    loginPageAlternative.getLoginButton().click();
    loginPageAlternative.getErrorMessageText().should('have.text', `\n×\nError: Incorrect login or password provided.`)
})
})
