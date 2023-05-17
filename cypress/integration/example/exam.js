describe('makemy trip', () => {
    it.skip('select make my trip', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").contains("Login").click()
    });
    it.skip('exam', () => {
        cy.visit("https://demoqa.com/buttons")
        cy.get("#doubleClickBtn").dblclick();
    });
    it.skip('exam', () => {
        cy.visit("https://demoqa.com/checkbox")
        cy.get(".rct-icon-check").check()
    });
    it.skip('makemytrip', () => {
        cy.visit("https://www.makemytrip.com/")
    });
    it('simple book', () => {
        cy.request({
            method: "POST",
            url: `https://simple-books-api.glitch.me/api-clients/`,
            headers: {
                accept: "application/json"
            },
            body: {
                "clientName": "jd1243456888889",
                " clientEmail": "weekndjd434349@example.com"
            }

        }).then((response) => {
            expect(response).to.eql(200)
            token = response.body.accesstoken;
            cy.log(response.body)
        })
    });
});