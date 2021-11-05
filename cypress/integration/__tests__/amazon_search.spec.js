describe('Amazon Search App', () => {
    it('search test', () => {
        cy.visit('https://www.amazon.com');
        cy.get('.nav-search-field'). within(() => {
            cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop');
        })
    })
})