/// <reference types="cypress"/>

export class Settings {
    basic_settings() {
        //cy.get('.card > :nth-child(1) > .m-0').should('have.text', 'Automatic Job Application reply')
        cy.get('.settings-swicter-wrap > :nth-child(1) > .mb-4').should('have.text', 'Please enter any specific details to add to the automatic email that is sent to a Jobseeker when they apply to one of your job broadcasts or adverts with a valid reference code. You may want to say whether you will be in touch if successful or any specific instructions in order to help them with their application. This can also save you having to respond to Jobseekers asking similar questions.')
        cy.get('#setEmailContent').should('have.text', 'Save Email Content')
        //cy.get('.settings-swicter-wrap > :nth-child(2) > :nth-child(1) > span').should('have.text', "Allow an 'Unknown' Jobseeker to text/SMS the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(1) #send_sms_email_to_unknown_jobseeker').click({force: true})
        //cy.get('.settings-swicter-wrap > :nth-child(2) > :nth-child(2) > span').should('have.text', "Allow an 'Unknown' Jobseeker to call the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(2) #send_call_to_unknown_jobseeker').click({force: true})
        //cy.get(':nth-child(2) > :nth-child(3) > span').should('have.text', "Allow 'registered' Jobseeker to call the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(3) #send_call_to_registered_jobseeker').click({force: true})
    }
}