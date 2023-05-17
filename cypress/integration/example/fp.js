

describe('filpcart test suit', () => {
    it('flipcart testcase', () => {
        cy.visit("https://www.flipkart.com/")
        cy.xpath("//a[@href='/account/login?ret=/']").click()
        cy.get('._2IX_2-').type("8160589545")
        cy.xpath("//*[text()='Request OTP']").click()
        cy.get('._3704LK').type("iphone")
    });
});