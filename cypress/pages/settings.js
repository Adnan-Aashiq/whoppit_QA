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
    job_applications(){
        cy.get("#job-application-tab").click()

        //Create New lane
        cy.get("#create_new_lane").click()
        cy.get("#save_new_lane").click()
        cy.get('#label-error').should('have.text', 'This field is required.')

        cy.get(".required.error").type('Pending')
        cy.get('#create-job-lane-form > :nth-child(2) > .form-control').type('It means that your application has not been approved yet, awaiting decision')
        cy.get("#save_new_lane").click()

        cy.get('#company-left-side-bar li:nth-child(6) a').click({force: true})
        let result;
        cy.get("#job-application-tab").click()
        cy.get("div[id*='job-lane-'] .header-elements input").each(($element)=>{
            var val =$element.attr('value')
            if(val==='Pending'){
                result ='Find';
                cy.log(result)
            }
            else{
            }
        }).then(()=>{
            expect(result).to.eq('Find');
        })
    }

}