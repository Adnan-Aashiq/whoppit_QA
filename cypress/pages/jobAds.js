///<reference types="cypress"/>
///<reference types="cypress-iframe" />

import { CreateJob_Company } from "../pages/job"

const createjobcompanyobj = new CreateJob_Company()

export class JobAds {
    jobads_homepage() {
        cy.wait(10000)
        cy.contains('Job Ads').click()
        cy.get('.job-applications-wrap > .section-heading').should('contain.text', 'Manage Jobs')
        cy.get(':nth-child(3) > .col-form-label').should('contain.text', 'Closed')
        cy.get(':nth-child(4) > .col-form-label').should('contain.text', 'Archived')
        cy.get('.jobs-listing-lastweek > .sub-section-title > .first-letter-upper').should('contain.text', 'last week')
        cy.get('.jobs-listing-grid > .sub-section-title > .first-letter-upper').should('contain.text', 'last month')
    }
    view_application() {
        cy.get('#job-422 > .card-body-top > .status-icons > .count-badge').click()
        cy.wait(5000)
        cy.get('#applications').should('be.visible')
        cy.get('.job-applications-wrap > .section-heading').should('contain.text', 'Job Applications')
        cy.get(':nth-child(1) > .task-header').should('contain.text', 'Shortlist')
        cy.get(':nth-child(2) > .task-header').should('contain.text', 'Applications')
        cy.get(':nth-child(3) > .task-header').should('contain.text', 'Interview')
        cy.go('back')
    }
    bulk_message() {
        let randomize = Date.now() % 2
        if (randomize === 1) {
            cy.get(' .checkbox-wrap > .custom-checkbox > .form-group > label').click({ multiple: true })
        }
        else {
            cy.get('.checkbox-wrap > .custom-checkbox > .form-group > label').should('have.length.greaterThan', 0).its('length').then((n) => {
                return Cypress._.random(0, n - 1)
            }).then((k) => {
                cy.get('.checkbox-wrap > .custom-checkbox > .form-group > label').eq(k).click();
            })
        }
        cy.get('#contact-jobseeker-btn').click()
        cy.get('#bulk_sms_textarea').type("Hi [Candidate name]. Our interview this afternoon will take place at this location: [map URL]. Don’t hesitate to contact me if you need any help. We are looking forward to meeting you!")
        if (randomize === 1) {
            cy.get('#email_false').click()
        }
        else {
        }
        cy.get('#send_bulk_messages_modal_btn').click()
        cy.get('[aria-modal="true"] > .modal-dialog > .modal-content > .modal-body > .js-message-warning > .js-message-important > .cursor-pointer > #tandc-ack').click()
        cy.get('[aria-modal="true"] > .modal-dialog > .modal-content > .modal-body > .text-center > #sendmessgetoJobseeker').click()
        cy.wait(5000)
    }
    boost(credit) {
        cy.go('back')
        cy.get('.status-icons > .boost svg').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.status-icons > .boost svg').eq(k).click();
        })
        cy.wait(5000)
        if (credit == 'TOTALJOBS') {
            cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > .card-text > #stripe_board_plans > #stripe_board_plan_table > tbody > :nth-child(1) > .jobs-board-pro-plan > .jobs-board-pro-plan-price > .board_stripe_pro_plan').click()
        }
        else if (credit == 'CV_LIB') {
            cy.get('[style="display: block; padding-right: 5px;"] > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > .card-text > #stripe_board_plans > #stripe_board_plan_table > tbody > :nth-child(2) > .jobs-board-pro-plan > .jobs-board-pro-plan-price > .board_stripe_pro_plan').click()

        }
        else if (credit == 'REED') {
            cy.get('[style="display: block; padding-right: 5px;"] > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > .card-text > #stripe_board_plans > #stripe_board_plan_table > tbody > :nth-child(3) > .jobs-board-pro-plan > .jobs-board-pro-plan-price > .board_stripe_pro_plan').click()
        }
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > .card-text > #stripe_board_plans > #stripe_board_plan_table > tbody > :nth-child(4) > .text-center > #boost_job_submit').click()
        cy.wait(2000)
        cy.get("iframe[name*='__privateStripeFrame']").eq(0).iframe(() => {
            cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
        })
        cy.get('[aria-modal="true"] > .modal-dialog > #modal_content > .modal-body > .stripe-wrap > .buy-more-credit > #premium-payment-form > .text-center > #premium_plan_pay_btn').click()
        cy.wait(5000)
    }
    randomjob() {
        cy.get('.btn-group > .dropdown-toggle').should('have.length.greaterThan', 0).its('length').then((n) => {
            return Cypress._.random(0, n - 1)
        }).then((k) => {
            cy.get('.btn-group > .dropdown-toggle').eq(k).scrollIntoView().click();
        })
    }
    analytics() {
        this.randomjob()
        cy.get('.dropdown-menu.show a:nth-child(2)').invoke('removeAttr', 'target').click()
        cy.get('.job-applications-wrap h3').should('have.text', 'Social Analytics')
        cy.get('#analytics-stats-tab').should('have.text', 'All Stats')

        //Select Advert
        cy.get('#select2-jobs_select-container').click()
        createjobcompanyobj.random_dd()

        //All Social Sites
        cy.get('#select2-social_select-container').click()
        createjobcompanyobj.random_dd()

        cy.go('back')
    }
    editjob() {
        this.randomjob()
        cy.get('.dropdown-menu.show a:nth-child(4)').invoke('removeAttr', 'target').click()
        createjobcompanyobj.basic()
        createjobcompanyobj.terms()
        createjobcompanyobj.requirement()
        createjobcompanyobj.about()
    }
    repost_job() {
        this.randomjob()
        cy.get('.dropdown-menu.show a:nth-child(5)').invoke('removeAttr', 'target').click()
        createjobcompanyobj.basic()
        createjobcompanyobj.terms()
        createjobcompanyobj.requirement()
        createjobcompanyobj.about()
        createjobcompanyobj.jobBoards('TOTALJOBS')
        createjobcompanyobj.socialMedia()
        createjobcompanyobj.jobPostBilling()
    }
    archive_job() {
        this.randomjob()
        cy.get('.dropdown-menu.show a:nth-child(6)').click()
        cy.on('window:confirm', (str) => {
            let randomize = Date.now() % 2
            if (randomize === 1) {
                return true
            }
            else {
                return false
            }
        })
    }
    close_job() {
        this.randomjob()
        cy.get('.dropdown-menu.show a:nth-child(7)').click()
        cy.on('window:confirm', (str) => {
            let randomize = Date.now() % 2
            if (randomize === 1) {
                return true
            }
            else {
                return false
            }
        })
    }

}