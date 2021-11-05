
describe('explore get concept', () => {
    it('element get testing', () => {
        cy.visit('https://www.freshworks.com/');
        cy.contains('Platform').click();
        cy.contains('Analytics').click();
        cy.url().should('include', '/analytics');
        cy.get('.first-fold > .container > h2.align-center')
            .should("be.visible").and('contain.text', 'Analytics');
        cy.get('ul.footer-nav li').should('have.length', 41);
        cy.get('ul.footer-nav li')
            .find('a[href*="footer"]')
            .should('have.length', 24);
    });
});