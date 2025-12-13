export default class BasePage {

    constructor() {
        this.loginOrRegisterButton = '#customer_menu_top';
    }

    getLoginOrRegisterButton() {
        return cy.get(this.loginOrRegisterButton);
    }

    clickLoginOrRegisterButton() {
        cy.log("Open account/login page");
        this.getLoginOrRegisterButton().click();
    }
}
