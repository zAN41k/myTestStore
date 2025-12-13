class HomePage {
    constructor () {
        this.loginOrRegisterButton = '#customer_menu_top';

    }
    visit() {
        cy.log('Open home page');
        cy.visit('/');
    }

    //cy.get('#customer_menu_top')
     getLoginOrRegisterButton() {
        return cy.get(this.loginOrRegisterButton);
    }

     clickLoginOrRegisterButton() {
        cy.log("Open account/login page");
        this.getLoginOrRegisterButton().click();
    }


}

export default new HomePage();
