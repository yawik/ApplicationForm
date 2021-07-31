// form_submit.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Filling and sending the form', () =>
{
  before(() =>
  {
    cy.intercept(Cypress.env('YAWIK_JOB_DETAIL_URL') + '*', { fixture: 'job_info.json' }).as('getJobDetails');
    //cy.viewport(1024, 768);
    cy.visit('/en?job=sw-devel');
    // load job details
    cy.wait(['@getJobDetails']);
  });

  it('Step 1. Fill personal Data', () =>
  {
    // fill step 1 (personal data)
    cy.get('[name="salutation"]').first().parents('[role="radio"]').click();
    cy.get('[name="fname"]').type('Ivaylo');
    cy.get('[name="lname"]').type('Gelov');
    cy.get('[name="street"]').type('Lulin');
    cy.get('[name="house"]').type('3');
    cy.get('[name="zip"]').type('1000');
    cy.get('[name="city"]').type('Sofia');
    cy.get('[name="country"]').type('Bulgaria');
    cy.get('[name="email"]').type('tmcdos@abv.bg');
    cy.get('[name="email"]').should('have.value', 'tmcdos@abv.bg');
    cy.get('[name="next"]').click();
  });

  it('Step 2. Fill cover letter', () =>
  {
    // fill step 2 (cover letter)
    cy.get('[name="letter"]').type('My cover letter');
    cy.get('[name="next"]').click();
  });

  it('Step 3. Answer questions', () =>
  {
    // fill step 3 (questions)
    cy.get('[name="begin"]').type('15-05-2021');

    cy.get('[name="salary_period"]').parents('label').click();
    cy.get('.q-menu .q-item').last().click();

    cy.get('[name="salary_currency"]').parents('label').click();
    cy.get('.q-menu .q-item').contains('USD').click();

    cy.get('[name="salary_amount"]').type('38.60');
    cy.get('[name="next"]').click();
  });

  it('Step 4. Add attachments', () =>
  {
    // skip step 4 (attachments)
    cy.get('[name="next"]').click();
  });

  it('Step 5. Accept Privacy', () =>
  {
    cy.intercept(Cypress.env('YAWIK_APPLICATION_FORM_ACTION'), { body: { success: true } }).as('submitForm');
    // fill step 5 (privacy)
    cy.get('[name="copy"]').parents('.q-checkbox').click();
    cy.get('[name="terms"]').parent().click();
    // submit form
    cy.get('[name="next"]').click();
    cy.wait('@submitForm');
    cy.get('.form_submit_success');
  });
});
