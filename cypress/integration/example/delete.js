

describe('delete', () => {
    it('delete method', () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",

        }).then((response) => {
            expect(response.status).to.eql(204)

        })
    });
});