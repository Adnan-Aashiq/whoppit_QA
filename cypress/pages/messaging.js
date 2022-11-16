export class Messaging {
    messaging_home() {
        cy.wait(5000)
        cy.get(".navigation a[href*='messaging']").click()
        cy.url().should('include', 'messaging')
    }
    filter() {
        cy.get('.cm-filter a').click()
        cy.get("#right-bar-show a svg").click()
    }
    jobseeker() {
        this.sendsms()
    }
    sendsms() {
        cy.get('.cm-search-form').type('j')
        cy.get('.cm-search-form').clear()
        cy.wait(10000)
        cy.get('#chat-profile-list .user-card .user-short-info .short-info').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('#chat-profile-list .user-card .user-short-info .short-info').eq(k).scrollIntoView().click();
        })
        cy.get(".cm-mgs-area input[type='file']").attachFile('Consignment.pdf')
        cy.get(".cm-mgs-area input[type='text']").type('Hi [Candidate name]. Our interview this afternoon will take place at this location: [map URL].')
        cy.get('.chat-desktop-send > img').click()
        cy.wait(5000)
        cy.get('#advance-user-info li:last-child p').should('contain.text', 'Hi [Candidate name]. Our interview this afternoon will take place at this location: [map URL].')
        cy.get("#chat-profile-list li:last-child a").click()
    }
    contacts() {
        cy.get('.contacts').click()
        this.sendsms()
    }
    bulkmessages() {
        cy.get("a[href*='contacts_filter'] img").click()
        cy.go('back')
    }
}