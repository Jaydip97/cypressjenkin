describe('update', () => {
    it('update body', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            headers: {
                accept: "application/json"
            },
            body: {
                "data":
                {
                    "id": 2,
                    "email": "jd.weaver@reqres.in",
                    "first_name": "Jaydip",
                    "last_name": "patel",
                    "avatar": "https://reqres.in/img/faces/2-image.jpg"
                }
            }
        }).then((response) => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(JSON.stringify(body))
        })
    });
});