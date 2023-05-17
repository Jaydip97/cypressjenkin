

describe('amazon test suit', () => {
    it('amazon test case', () => {
        cy.visit("https://www.amazon.in");
        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
        cy.get('#ap_email').type("pjaydip460@gmail.com")
        cy.get('.a-button-input').click()
        cy.get('#ap_password').type("jay1231997")
        cy.get('#signInSubmit').click()

    });
});