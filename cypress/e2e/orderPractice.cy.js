import user from '../fixtures/realUser.json';
import { login } from '../support/helper';
import {findNewProd, findNewProduct, findProductWithRecursion, myRecursionFunc} from "../support/helper";


beforeEach(() => {
    login(user.loginname, user.password);
})

it.skip('Place order from the main page', () => {
    cy.log("Fill login form");
    cy.visit('/');

    cy.get('.prdocutname').first().click();
    cy.get('.productpagecart').click();
     cy.get('#cart_checkout1').click();
     cy.get('#checkout_btn').click();
     cy.get('span.maintext').should('have.text', ' Your Order Has Been Processed!')
    })

// it('Homework helper function test', () => {
//     cy.visit('/');
//     cy.get('#filter_keyword-FAIL').type('i').closest('form').submit(); //-FAIL intentionally added to the id to make the test fail
//     findNewProduct('Benefit Bella Bamba');
// })

it.skip('Place order from the main page', () => {
    cy.visit('/');
    findNewProd('Tropiques Minerale Loose Bronzer');
})


it('Place order from the main page', () => {
    cy.visit('/');
    findProductWithRecursion('Tropiques Minerale Loose Bronzer');
    //findProductWithRecursion('Bronzer');

})
