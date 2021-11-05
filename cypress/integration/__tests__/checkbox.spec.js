describe('Category page tests', () => {
    it('Category page on automation practice - checkbox test', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.wait(7000);
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
        // cy.get('#layered_category_4').check();
        // cy.wait(7000);

        // Check checkboxes and verify they are checked.
        cy.get('[type="checkbox"]').check().parent().should('have.class', 'checked');
        // Uncheck checkboxes and verify they are unchecked.
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked');
    });

    it.only('SnapDeal Page - filter checkbox test', () => {
        cy.visit('https://www.snapdeal.com/');
        cy.get("#inputValEnter").type('Laptop');
        cy.get('.searchTextSpan').click();

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force:true});
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked', 'checked');
        
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force:true});
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('not.have.checked', 'checked');
    });
});