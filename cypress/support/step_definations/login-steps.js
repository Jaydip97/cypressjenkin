import { before, Given, when, And, Then, When } from "cypress-cucumber-preprocessor/steps"

Given("open the brpwser amd navigate to login page", () => {
    cy.visit("/");
    cy.wait(2000)

})

when("enter the name {word}", (name) => {
    cy.get('input[name="usrname][placeholder="Username]').type(name)
})

when('enter the password {word}', (password) => {
    cy.get('input[class="oxd-input oxd-input--active"][placeholder="password"]').type(password)
})

