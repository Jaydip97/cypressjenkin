
describe('creat trllo board', () => {
    let key = "226c919e68c9540aff5c401bdcd5884e"
    let token = "ATTAaf1464db0c6390269a56104f1a9d195991e228a4c68498aed20969df96323c7639FE39D0"
    let id;
    it('create board', () => {
        cy.request({
            method: "POST",
            url: `https://api.trello.com/1/boards/?name=jaydip22&key=${key}&token=${token}`,
            headers: {
                accept: "application/json"
            },

        }).then((response) => {
            expect(response.status).to.eql(200)

            id = response.body.id
            cy.log(JSON.stringify(response.body))
        })
    });
    it.skip('delete board', () => {
        cy.request({
            method: "DELETE",
            url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`,
            headers: {
                accept: "application/json"
            },

        }).then((response) => {
            expect(response.status).to.eql(200)


        })
    });

    it('update board', () => {
        cy.request({
            method: "PUT",
            url: `https://api.trello.com/1/boards/${id}?key=${key}&token=${token}`,
            headers: {
                accept: "application/json"
            },
            body: {
                "name": "jd",
                "desc": "ffdfdfdf"
            }
        }).then((response) => {
            expect(response.status).to.eql(200)
            cy.log(JSON.stringify(response.body))

        })
    });
});