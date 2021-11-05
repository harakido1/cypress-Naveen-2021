describe('API testing with Alias', () => {
    beforeEach(() => {
        cy.request('/users?page=2').as('aliasName');
    });

    it('should validate headers info', () => {
        cy.get('@aliasName')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });

    it('should validate status code', () => {
        cy.get('@aliasName')
            .its('status')
            .should('equal', 200)
    });

    it('should validate total pages in body', () => {
        cy.get('@aliasName')
            .its('body')
            .should('contains', {'total_pages': 2})
    });

    it('should validate user info in data array', () => {
        cy.get('@aliasName')
            .its('body')
            .then((res) => {
                expect(res.data[0]).has.property("first_name", "Michael")
            })
    });
});