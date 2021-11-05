describe('automation practice website features testing', () => {
    // Run once for all test cases which is faster than beforeEach().
    before(() => {
        cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false});
        // call ./support/commands.js/login
        cy.login('harakido1@yahoo.com', 'Testing1234');
    });
    
    // Run before every test case.
    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php', {failOnStatusCode: false});
    //     // call ./support/commands.js/login
    //     cy.login('harakido1@yahoo.com', 'Testing1234');
    // });

    it('should login', () => {
        cy.url().should('include', 'controller=my-account');
        cy.get('.myaccount-link-list li a').should('have.length', 5);
    });

    it('Should navigate back to the main page', () => {
        cy.get('li > .btn > span').last().click().url().should('include', 'index.php');
    });

    it('Test search button', () => {
        cy.search('Dress');
        cy.get('.lighter').should('contain.text', 'Dress');
    });
});