/// <reference types="cypress"/>

export class ManageTeamUsers{
    uiTest(){
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
    inviteUsers(){
        let num = Math.floor(Math.random() * 1000);
        cy.get('#seperated_email').type("testuser" + num + "@mailinator.com");
        cy.get('#sendInvites').click()
    }
    toggleButton(){
        //Toggle 'Account status'
        cy.get('.card_9 > :nth-child(3) > .custom-control').click()
        cy.wait(1500)
        cy.get('.card_9 > :nth-child(3) > .custom-control').click()
        //Enable as pro
        cy.get('.card_12 > :nth-child(4) > .custom-control').click()
    }

}