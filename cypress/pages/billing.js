/// <reference types="cypress"/>

export class Billing {
    upgradte_Plan() {
        cy.contains('Upgrade Plan to').click()
        cy.wait(3000)
        cy.get("iframe[name*='__privateStripeFrame']").eq(2).iframe(() => {
            cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
        })
        cy.contains('Pay & Subscribe').click()
    }
    add_user() {
        cy.get('.text-right > .btn').click()
        cy.get("iframe[name*='__privateStripeFrame']").eq(2).iframe(() => {
            cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
        })
        cy.get('#payment_modal > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > #payment-form > #number_of_licenses > .col-sm-8 > #user_license_quantity').select('4')
        cy.get('#payment_modal > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > #payment-form > .field-wrap.text-center > #pay_card_button').click()
    }
    buy_whoppit_credits() {
        cy.get('.col-sm-8 > label.float-right > .btn-transparent-blue').click()

        //from nth-child() you can change the credit package from 1-3
        cy.get('#topup_plans > :nth-child(3) > .btn-transparent-blue').click()

        cy.get("iframe[name*='__privateStripeFrame']").eq(0).iframe(() => {
            cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
        })
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > .modal-body > .stripe-wrap > .buy-more-credit > #topup-payment-form > .text-center > #topup_payment_btn').click()
    }
    more_information() {
        cy.get('#buy_premium_btn').click()

        //from first nth-child() you can change the job credit from 2-4
        for (let i = 0; i < 3; i++) {
            cy.get(':nth-child(4) > :nth-child(1) > .premium-brand-logo > .buy_premium_credit > .uil').click()
        }

        cy.get("iframe[name*='__privateStripeFrame']").eq(1).iframe(() => {
            cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
        })
        cy.get('#premium_plan_bundle_pay_btn').click()
    }
    view_invoices(email) {
        cy.get('.company-billing-wrap > :nth-child(1) > .btn-transparent-blue').click()
        cy.get(':nth-child(1) > :nth-child(1) > .Padding-bottom--8 > .Box-divider--light-bottom-1 > :nth-child(1) > .Text-color--dark > span').should('have.text', 'Current plans')
        cy.get(':nth-child(2) > :nth-child(1) > .Padding-bottom--8 > .Box-divider--light-bottom-1 > :nth-child(1) > .Text-color--dark > span').should('have.text', 'Payment methods')
        cy.get(':nth-child(3) > :nth-child(1) > .Padding-bottom--8 > .Box-divider--light-bottom-1 > :nth-child(1) > .Text-color--dark > span').should('have.text', 'Billing information')
        cy.get('.Flex-direction--column > :nth-child(1) > .Flex-flex > :nth-child(2) > .Text-color--dark').should('have.text', email)
        cy.get(':nth-child(4) > :nth-child(1) > .Padding-bottom--8 > .Box-divider--light-bottom-1 > :nth-child(1) > .Text-color--dark > span').should('have.text', 'Invoice history')
        cy.get(':nth-child(1) > :nth-child(3) > .Margin-vertical--4 > .Badge > .Badge-text > span').should('have.text', 'Paid')
    }
    delete_card() {
        //from .card_ you can delete the card
        cy.get('.card_0 > :nth-child(3) > .btn > .uil').click()
        //handling alerts manually
        cy.on('window:confirm', (str) => {
            return true
        })

    }

}