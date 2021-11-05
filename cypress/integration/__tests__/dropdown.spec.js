describe('drop down feature', () => {
    it('with select tag test', () => {
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/');
        cy.get('#Form_submitForm_Country').select('Andorra').should('have.value', 'Andorra');
    });

    it('Google Search test', () => {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type('cypress.io');
        cy.wait(5000);
        cy.get('.G43f7e > :nth-child(6) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
    });

    it.only('Automation E-comm input search test', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('.ac_results').find('li').contains('Casual Dresses > Printed ').click();
    });
});