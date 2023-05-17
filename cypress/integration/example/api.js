describe('book', () => {
    let token
    it('simple book', () => {
        cy.request({
            method: "POST",
            url: `https://simple-books-api.glitch.me//api-clients/`,
            headers: {
                accept: "application/json"
            },
            body: {
                "clientName": "Postman",
                " clientEmail": "valentin@example.com"
            }

        }).then((response){
            // expect(response).to.eql(200)
            token = response.body.accesstoken;
            cy.log(response.body)
        })
    });
});