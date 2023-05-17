
describe('creat', () => {
    it('add body', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            headers: {
                accept: "application/json"
            },
            body: {

                "name": "jd",
                "job": "techy"

            }
        }).then((response) => {
            expect(response.status).to.eql(201)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(JSON.stringify(body))
        })
    });
});