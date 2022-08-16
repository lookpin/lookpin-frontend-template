describe('example spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.dataCy('mode').contains('DEVELOPMENT');
    cy.contains('Read me');

    cy.dataCy('load-btn').click().get('[alt="loaded main image"');
  });
});
