


describe('goodread test suit', () => {
    it('goodread test case', () => {
        cy.visit("https://www.goodreads.com/");
        cy.xpath("//*[text()='Sign In']").click()
        cy.get(".authPortalSignInButton").click()
        cy.xpath("//*[@name='email']").type("admin")

    });
});