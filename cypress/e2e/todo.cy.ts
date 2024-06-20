describe('Todo List', () => {
  it('Can toggle task complete status', () => {
    cy.visit(Cypress.env('URL'));
    cy.get('[data-cy="not-completed"]').should('exist');
    cy.get('[data-cy="not-completed"]').each((el) => {
      cy.wrap(el).click();
    });
    cy.get('[data-cy="not-completed"]').should('not.exist');
    cy.get('[data-cy="completed"]').should('exist');

    cy.get('[data-cy="completed"]').each((el) => {
      cy.wrap(el).click();
    });
    cy.get('[data-cy="completed"]').should('not.exist');
    cy.get('[data-cy="not-completed"]').should('exist');
  });
});
