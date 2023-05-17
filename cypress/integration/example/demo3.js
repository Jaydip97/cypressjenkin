describe('doing website ', () => {
    it('doing website', () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//a[text()='Contact Us']").click();
        cy.xpath("//input[@name='first_name']").type("jaydip");
        cy.get("#ContactUsFrm_email").type("jaydip@mail.com");
        cy.get("#ContactUsFrm_enquiry").type("nothing to add");
        cy.xpath("//*[@title='Submit']").click();
        cy.xpath("//*[text()='Your enquiry has been successfully sent to the store owner!']").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
});