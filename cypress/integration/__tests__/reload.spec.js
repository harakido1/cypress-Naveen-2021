describe('reload page', () => {
    it('page reload test', () => {
        cy.visit('https://www.freshworks.com/');
        cy.contains('Platform').click();
        cy.contains('Freshworks Neo').click();
        cy.reload();
        cy.get('.product-logo-icon').should('be.visible');
    });
});