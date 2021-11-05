describe('back and fwd browser button simulation', () => {
    it('back-fwd test', () => {
        cy.visit('https://www.freshworks.com/');
        cy.contains('Platform').click();
        cy.contains('Analytics').click();
        cy.url().should('include', '/analytics');

        cy.go('back', {timeout: 5000});
        cy.wait(200);
        cy.go('forward');
        // or for multiple pages:
        cy.go(-2);
        cy.wait(200);
        cy.go(2);
    });
});