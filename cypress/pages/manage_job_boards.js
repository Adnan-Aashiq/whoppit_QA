/// <reference types="cypress"/>

export class ManageJobBoards {
    uiTest() {
        cy.get('.manage-jobB-boards-section-wrap > :nth-child(1)').should('have.text', 'Manage Job Boards')
        cy.get('.sub-heading').should('have.text', 'In order for you to take advantage of ALL sites we may need a few more details from you. We recommend turning as many Job Boards ON as possible to maximise your adverts.')
        cy.contains('Set All to Active').click
        cy.get('li > .switch-btn').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('li > .switch-btn input').eq(k).dblclick({force: true});
        })
    }
}