// form_submit.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Filling and sending the form', () =>
{
  it('successfully loads', () =>
  {
    cy.intercept('https://form2mail.yawik.org/details*', { fixture: 'job_info.json' }).as('getJobDetails');
    cy.intercept(Cypress.env('YAWIK_APPLICATION_FORM_ACTION'), { body: { success: true } }).as('submitForm');
    // open our app
    cy.visit('/en?job=sw-devel');
    // load job details
    cy.wait(['@getJobDetails']);
    // fill step 1
    cy.get('[name="salutation"]').first().parents('[role="radio"]').click();
    cy.get('[name="fname"]').type('Ivaylo');
    cy.get('[name="lname"]').type('Gelov');
    cy.get('[name="street"]').type('Lulin');
    cy.get('[name="house"]').type('3');
    cy.get('[name="zip"]').type('1000');
    cy.get('[name="city"]').type('Sofia');
    cy.get('[name="country"]').type('Bulgaria');
    cy.get('[name="email"]').type('tmcdos@abv.bg');
    cy.get('[name="next"]').click();
    // fill step 2
    cy.get('[name="letter"]').type('My cover letter');
    cy.get('[name="next"]').click();
    // fill step 3
    cy.get('[name="begin"]').type('15-05-2021');

    cy.get('[name="salary_period"]').parents('label').click();
    cy.get('.q-menu .q-item').last().click();

    cy.get('[name="salary_currency"]').parents('label').click();
    cy.get('.q-menu .q-item').contains('USD').click();

    cy.get('[name="salary_amount"]').type('38.60');
    cy.get('[name="next"]').click();
    // skip step 4
    cy.get('[name="next"]').click();
    // fill step 5
    cy.get('[name="copy"]').parents('.q-checkbox').click();
    cy.get('[name="terms"]').parent().click();
    // submit form
    cy.get('[name="next"]').click();
    cy.wait(['@submitForm']);
    cy.get('.form_submit_success');
  });
});
