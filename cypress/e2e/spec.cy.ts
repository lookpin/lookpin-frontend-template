describe('example spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.dataCy('mode').contains('DEVELOPMENT');
    cy.contains('Read me');
  });
});
