import user from '../fixtures/user.json';
import {headlessAuthorization2,headlessAuthorization} from "../support/helper";
import accountPage from "../support/pages/AccountPage";



it.only('Dummy test to verify authorization helper', () => {
    headlessAuthorization2(user.loginname, user.password);
     accountPage.visit();
    accountPage.getFirstNameText().should('have.text', user.firstname);
})



it('Dummy test to verify authorization helper', () => {
    headlessAuthorization(user.loginname, user.password);
    accountPage.visit();
    accountPage.getFirstNameText().should('have.text', user.firstname);
})
