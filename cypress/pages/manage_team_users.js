/// <reference types="cypress"/>

export class ManageTeamUsers {
    uiTest() {
        cy.get('.heaing-button-nav > .section-heading').should('have.text', 'Manage Team User')
        cy.get('.team-users-section-wrap > .section-heading').should('have.text', 'Add Team Users')
        cy.get('.sub-heading').should('have.text', 'Invite Company Users')
        cy.get('#seperated_email').should("have.attr", "placeholder", "Please specify an email address or a comma-separated list of addresses")
        cy.get('.thead-dark > tr > :nth-child(1)').should('have.text', 'Email')
        cy.get('.thead-dark > tr > :nth-child(2)').should('have.text', 'Type')
        cy.get('.thead-dark > tr > :nth-child(3)').should('have.text', 'Account Status')
        cy.get('.thead-dark > tr > :nth-child(4)').should('have.text', 'Enable as Pro')
        cy.get('.thead-dark > tr > :nth-child(5)').should('have.text', 'Sent On')
    }
    inviteUsers() {
        let num = Math.floor(Math.random() * 1000);
        cy.get('#seperated_email').type("testuser" + num + "@mailinator.com");
        cy.get('#sendInvites').click()
    }
    toggleButton() {
        //Toggle 'Account status'
        cy.get('.card_9 > :nth-child(3) > .custom-control').find('input').scrollIntoView().click({ force: true })
        cy.wait(1500)
        cy.get('.card_9 > :nth-child(3) > .custom-control').find('input').scrollIntoView().click({ force: true })
        //Enable as pro
        cy.get('.card_12 > :nth-child(4) > .custom-control').find('input').scrollIntoView().click({ force: true })
    }
    edit() {
        cy.get('.swiper-slide-next > .team-user-card > .viem-more > :nth-child(1) > :nth-child(1) > ul > :nth-child(1) > a').click({ force: true })

        //Select Role field
        cy.get('#select2-company_roles-container').click()
        cy.get('.select2-results__options li').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.select2-results__options li').eq(k).click();
        })

        //edit Full Name
        cy.get('#company_username').then(($input) => {
            const val = $input.val()
            cy.log(val)
            cy.get('#company_username').clear()
            cy.wait(1000)
            cy.get('#company_username').type(val)
        })

        //edit email  field
        cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(3) > #company_email').then(($input) => {
            const val = $input.val()
            cy.log(val)
            cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(3) > #company_email').clear()
            cy.wait(1000)
            cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(3) > #company_email').type(val)
        })

        //edit email  field
        cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(4) > #company_phone').then(($input) => {
            const val = $input.val()
            cy.log(val)
            cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(4) > #company_phone').clear()
            cy.wait(1000)
            cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > :nth-child(4) > #company_phone').type(val)
        })

        //pic upload
        cy.get(".col-xl-6 > .card > .card-body > #edit_company_user_form > div:nth-child(5) > input[type='file']").attachFile('pic1.jpg')

        //button click
        cy.get('.col-xl-6 > .card > .card-body > #edit_company_user_form > #edit_company_user').click()
    }
    delete(){
        cy.get('.swiper-slide-next > .team-user-card > .viem-more > :nth-child(1) > :nth-child(1) > ul > :nth-child(2) > a').click({ force: true })
        cy.on('window:confirm',(str)=>{
            return false
        })
    }
    mark_as_admin(){
        cy.get('.swiper-slide-next > .team-user-card > .viem-more > :nth-child(1) > :nth-child(1) > ul > :nth-child(3) > a').click({ force: true })
    }

}