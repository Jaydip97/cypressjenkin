/// <reference types="cypress"/>


describe('testing for rest api', () => {
    var result
    it.skip('simple get mathod', () => {
        result = cy.request('https://reqres.in/api/users/2')
        result.its('status').should('equal', 200)
    });

    it('validate response of the request', () => {
        cy.request({
            mathod: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            //cy.log(body.data.id)
            // expect(body.data).has.property("email", "janet.weaver@reqres.in")
            cy.log(JSON.stringify(body.data))
        })
    });
});