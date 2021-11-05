describe('Mouse over features', () => {
    it('click on member login and Sign Up', () => {
        cy.visit('https://beta.spicejet.com/');
        cy.get('[data-testid=signup-submit-btn]');
        // Errors:
        // has CSS pointer-events: none
        // Fix this problem, or use {force: true} to disable
        cy.contains('Sign up for SpiceClub').trigger('mouseover', {force: true});
        cy.contains('Sign up').trigger('mouseover', {force: true}).click({force: true})
    });

    it.only('Add to cart test', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
        cy.wait(7000);
        cy.contains('Continue shopping').click();
        cy.wait(7000);
        cy.get('[title="View my shopping cart"]').trigger('mouseover'); // or: cy.get('.cart_block').should('be.hidden').invoke('show');
        cy.wait(5000);
        cy.get('.ajax_cart_block_remove_link').click();
    });
});