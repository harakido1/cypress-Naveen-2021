describe('GET API for Rest', () => {
    it('GET API Test for Flask - MotorBike', () => {
        cy.request("https://flask-rest-api-demo.herokuapp.com/product/motorbike").then((res) => {
            expect(res.status).equal(200)
            expect(res.body.product[0]).has.property('product', 'motorbike')
            expect(res.body.product[0]).has.property('price', 599.99)
        });
    });

    it('GET API Test for Flask - users', () => {
        cy.request("https://flask-rest-api-demo.herokuapp.com/users").then((res) => {
            expect(res.status).equal(200)
            expect(res.body.users[0]).has.property('username', 'test_1')
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users).has.length(5)
            expect(res.body.users[0]).not.have.property('price')
        });
    });

    it('GET Test for req res API - data', () => {
        cy.request("https://reqres.in/api/users?page=2").then((res) => {
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('first_name', 'Michael')
            expect(res.body.data[0]).has.property('id', 7)
            expect(res.body.data).has.length(6)
            expect(res.body.data[0]).not.have.property('price')
        });
    });
})