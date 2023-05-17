
describe('accesstokenbppk', () => {
    let token
    let orderId
    it('acesstokenbook', () => {
        cy.request({
            method: "POST",
            url: `https://simple-books-api.glitch.me/api-clients/`,
            headers: {
                accept: "application/json"
            },
            body: {
                "clientName": "Postman" + Math.random(),
                "clientEmail": "valentin" + Math.random() + "@example.com"
            }
        }).then((response) => {
            expect(response.status).to.eql(201)
            cy.log(JSON.stringify(response.body))
            token = response.body.accessToken
        })
    });
    it('acesstokenbook', () => {
        cy.request({
            method: "POST",
            url: `https://simple-books-api.glitch.me/orders/`,
            headers: {
                Authorization: `Bearer ${token}`,

                accept: "application/json"
            },
            body: {
                "bookId": 1,
                "customerName": "John"
            }
        }).then((response) => {
            expect(response.status).to.eql(201)
            cy.log(JSON.stringify(response.body))
            orderId = response.body.orderId
        })
    });
    it('updatebook', () => {
        cy.request({
            method: "PATCH",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            headers: {
                Authorization: `Bearer ${token}`,

                accept: "application/json"
            },
            body: {

                "customerName": "Jd"
            }
        }).then((response) => {
            expect(response.status).to.eql(204)
            cy.log(JSON.stringify(response.body))

        })
    });

    it('getbook', () => {
        cy.request({
            method: "GET",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            headers: {
                Authorization: `Bearer ${token}`,

                accept: "application/json"
            },

        }).then((response) => {
            expect(response.status).to.eql(200)
            cy.log(JSON.stringify(response.body))

        })
    });

    it('deletegetbook', () => {
        cy.request({
            method: "DELETE",
            url: `https://simple-books-api.glitch.me/orders/${orderId}`,
            headers: {
                Authorization: `Bearer ${token}`,

                accept: "application/json"
            },

        }).then((response) => {
            expect(response.status).to.eql(204)
            cy.log(JSON.stringify(response.body))

        })
    });
});