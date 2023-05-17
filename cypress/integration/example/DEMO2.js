///<reference types="Cypress"/>

describe('openhrm login and more', () => {
    it.only('openhrm', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.contains(" Login ").click();
        cy.get(".oxd-userdropdown-tab").click();
        cy.xpath("//*[text()='Logout']").click();
    });

    it('test2', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
    });
});