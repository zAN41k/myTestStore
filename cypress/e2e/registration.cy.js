describe('Registration test suite', () => {

  const user = {
    firstname: 'John Fake Name',
    lastname: 'John Fake Surname',
    email: 'JohnFakeMail22@mail.com', //unique
    telephone: '+1234567890',
    fax: '1234567890',
    company: 'John Company',
    address1: 'John Address 1',
    address2: 'John Address 2',
    city: 'Kyiv', //value="3490"
    zone: 'Kyiv',
    postcode: '02022',
    country: 'Ukraine', //value="220"
    loginname: 'myJohnLogin22', //unique
    password: 'JohnPassword'
  }

  it.skip('Registration with valid data', () => {

    cy.log("Open home page");
    cy.visit('/');

    cy.log("Open account/login page");
    cy.get('#customer_menu_top').click();

    cy.log("Open account/create page");
    cy.get('[title="Continue"]').click();

    cy.log("Fill in the form");
    cy.get('#AccountFrm_firstname').type(user.firstname);
    cy.get('#AccountFrm_lastname').type(user.lastname);
    cy.get('#AccountFrm_email').type(user.email);
    cy.get('#AccountFrm_telephone').type(user.telephone);
    cy.get('#AccountFrm_fax').type(user.fax);
    cy.get('#AccountFrm_company').type(user.company);
    cy.get('#AccountFrm_address_1').type(user.address1);
    cy.get('#AccountFrm_address_2').type(user.address2);
    cy.get('#AccountFrm_city').type(user.city);
    cy.get('#AccountFrm_country_id').select(user.country); // dropdown
    cy.get('#AccountFrm_postcode').type(user.postcode);
    cy.get('#AccountFrm_zone_id').select(user.zone); // dropdown
    cy.get('#AccountFrm_loginname').type(user.loginname);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);

    cy.log("Submit the form");
    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('[title="Continue"]').click();

    cy.log("Verify registration");
    cy.get('.maintext').should('contain', 'Your Account Has Been Created!'); //span.maintext
    cy.get('[title="Continue"]').click();
    cy.get('.subtext').should('contain', user.firstname);
  })


  it('Auth with valid data', () => {

    cy.log("Open home page");
    cy.visit('/');

    cy.log("Open account/login page");
    cy.get('#customer_menu_top').click();

    // cy.log("Open account/create page");
    // cy.get('[title="Continue"]').click();

    cy.get('#loginFrm_loginname').type('myJohnLogin21');
    cy.get('#loginFrm_password').type('JohnPassword');
    cy.get('[title="Login"]').click();
    cy.get('.subtext').should('contain', user.firstname);



  })
})
