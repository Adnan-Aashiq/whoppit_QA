/// <reference types="cypress"/>

export class UserProfile{
    editProfile(){
        cy.get(".text-dark.dropdown-toggle.nav-user").click()
        cy.get("a[href*='user/edit']").click()

        cy.get("#select2-company_roles-container").type("Events planner" + "{enter}")
        cy.get("#company_username").clear()
        cy.get("#company_username").type("UserTesting1")
        //cy.get("#company_phone").type("+447506999725")
        cy.get("#edit_company_user_form div:nth-child(5) input[type='file']").attachFile("logo.png")
        cy.get(".col-xl-6 > .card > .card-body > #edit_company_user_form > #edit_company_user").click()


    }
}