describe('compare viewports', () => {
    before(() => {
        console.log("Running my tests.");
    });
    beforeEach(() => {
        cy.visit('http://www.google.com');
    });

    it('should open in standard desktop size viewport', () => {
        cy.viewport(1280, 720);
        cy.screenshot();
        cy.wait(200);
    });
    it('should open in standard tablet size viewport', () => {
        cy.viewport(800, 500);
        cy.screenshot();
        cy.wait(200);
    });
    it('should open in standard cellphone size viewport', () => {
        cy.viewport(414, 736);
        cy.screenshot();
        cy.wait(200);
    });
    it('should open in standard macbook-13 size viewport', () => {
        cy.viewport('macbook-13');
        cy.screenshot();
        cy.wait(200);
    });
    it('should open in iphone-6 cellphone size viewport', () => {
        cy.viewport('iphone-6');
        cy.screenshot();
        cy.wait(200);
    });
});