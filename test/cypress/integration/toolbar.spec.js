// form_submit.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Use Parameter tb=1 and check for menu icon', () =>
{
  before(() =>
  {
    cy.intercept(Cypress.env('YAWIK_JOB_DETAIL_URL') + '*', { fixture: 'job_info.json' }).as('getJobDetails');
    cy.intercept(Cypress.env('YAWIK_APPLICATION_FORM_ACTION'), { body: { success: true } }).as('submitForm');
    cy.viewport(1024, 768);
    cy.visit('/en?job=sw-devel&tb=1');
    // load job details
    cy.wait(['@getJobDetails']);
  });

  it('open and close drawer', () =>
  {
    cy.get('.q-drawer__content').should('not.be.visible');
    // check for menu-open icon
    cy.get('.mdi-menu-open').click();
    cy.get('.q-drawer__content').should('be.visible');
    // check for menu icon
    cy.get('.mdi-menu').click();
    cy.get('.q-drawer__content').should('not.be.visible');
    cy.contains('CROSS Solution');
  });

  it('check for Speculative Application', () =>
  {
    cy.visit('/en?tb=1');
    // check for menu-open icon
    cy.contains('Speculative Application');
  });
});
