/// <reference types="cypress"/>


export class Settings {
    basic_settings() {
        //cy.get('.card > :nth-child(1) > .m-0').should('have.text', 'Automatic Job Application reply')
        cy.get('.settings-swicter-wrap > :nth-child(1) > .mb-4').should('have.text', 'Please enter any specific details to add to the automatic email that is sent to a Jobseeker when they apply to one of your job broadcasts or adverts with a valid reference code. You may want to say whether you will be in touch if successful or any specific instructions in order to help them with their application. This can also save you having to respond to Jobseekers asking similar questions.')
        cy.get('#setEmailContent').should('have.text', 'Save Email Content')
        //cy.get('.settings-swicter-wrap > :nth-child(2) > :nth-child(1) > span').should('have.text', "Allow an 'Unknown' Jobseeker to text/SMS the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(1) #send_sms_email_to_unknown_jobseeker').click({ force: true })
        //cy.get('.settings-swicter-wrap > :nth-child(2) > :nth-child(2) > span').should('have.text', "Allow an 'Unknown' Jobseeker to call the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(2) #send_call_to_unknown_jobseeker').click({ force: true })
        //cy.get(':nth-child(2) > :nth-child(3) > span').should('have.text', "Allow 'registered' Jobseeker to call the company to apply for a job")
        cy.get('#myTabContent .card div:nth-child(2) div:nth-child(2) div:nth-child(3) #send_call_to_registered_jobseeker').click({ force: true })
    }
    job_applications() {
        cy.get("#job-application-tab").click()

        //Create New lane
        cy.get("#create_new_lane").click()
        cy.get("#save_new_lane").click()
        cy.get('#label-error').should('have.text', 'This field is required.')

        cy.get(".required.error").type('Pending')
        cy.get('#create-job-lane-form > :nth-child(2) > .form-control').type('It means that your application has not been approved yet, awaiting decision')
        cy.get("#save_new_lane").click()

        cy.get('#company-left-side-bar li:nth-child(6) a').click({ force: true })
        let result;
        cy.get("#job-application-tab").click()
        cy.get("div[id*='job-lane-'] .header-elements input").each(($element) => {
            var val = $element.attr('value')
            if (val === 'Pending') {
                result = 'Find';
            }
            else {
            }
        }).then(() => {
            expect(result).to.eq('Find');
        })
        cy.get('.delete-icon svg').click()
        cy.on('window:confirm', (str) => {
            return true
        })
    }
    jobAd_settings() {
        cy.get('#post-job-ad-tab').click()
        //Number of Hires
        cy.get('#number_of_hires').select('5', { force: true });

        //Industry
        cy.get("#select2-advert_industry-container").click()
        cy.wait(3000)
        cy.get('.select2-results li').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.select2-results li').eq(k).dblclick({ force: true });
        })

        cy.get("#advert_settings_form input[type='file']").attachFile("pic1.jpg")

        //Job Type
        cy.get("#select2-job_type-container").click()
        cy.wait(3000)
        cy.get('.select2-results li').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.select2-results li').eq(k).dblclick({ force: true });
        })

        cy.get("#min_year_exp").select("5", { force: true })
        cy.get("#remotetype").select("Flexible", { force: true })

        let randomize = Date.now() % 2
        if (randomize === 1) {
            cy.get("#company").clear()
            cy.get("#company").type("TestingCompany1")
            cy.get("#company_email").clear()
            cy.get("#company_email").type("testuser@mailinator.com")
            cy.get("#company_phone").clear()
            cy.get("#company_phone").type("+442589366852")
        }
        else {
        }

        cy.get('#setting_advert_form_submit').click()
    }

}