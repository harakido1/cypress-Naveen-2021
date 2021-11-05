describe("Check weather api information.", () => {
    it("should return search/?query= city", () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/api/location/search/?query=san",
        })
            .then((res) => {
                const city = res.body[0].title;
                return city;
            })
            .then((city) => {
                cy.request({
                    method: "GET",
                    url:
                        "https://www.metaweather.com/api/api/location/search/?query=" +
                        city,
                });
            });
    });

    it.only("should return search/?query= cities", () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/api/location/search/?query=Am",
        })
            .then((res) => {
                const location = res.body;
                return location;
            })
            .then((location) => {
                for (let i = 0; i < location.length; i++) {
                    cy.request({
                        method: "GET",
                        url:
                            "https://www.metaweather.com/api/api/location/search/?query=" +
                            location[i].title,
                    }).then((res) => {
                        expect(res.status).to.eq(200);
                        expect(res.body[0]).to.have.property(
                            "title",
                            location[i].title
                        );
                    });
                }
            });
    });
});
