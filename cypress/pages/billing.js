/// <reference types="cypress"/>

export class Billing {
    billing_screen() {
        //Billing Details Section
        cy.get(':nth-child(1) > .section-heading').should('have.text', 'Billing Details')

        cy.get(':nth-child(2) > :nth-child(1) > .card-body > .media > .media-body > .mt-0').should('have.text', 'Card Details')
        cy.get('#card-listing-tbl > tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Card Number')
        cy.get('#card-listing-tbl > tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Expiry Date')
        cy.get('#card-listing-tbl > tbody > :nth-child(1) > :nth-child(3)').should('have.text', 'Action')

        cy.get(':nth-child(2) > .card-body > .media > .media-body > .row > :nth-child(1) > .mt-0').should('have.text', 'Licences')
        cy.get('.media-body > .row > label').should('have.text', 'whoppit Pro')

        cy.get('.col-sm-4 > .mt-0').should('have.text', 'Credits')
        cy.get('#credit_table > tr > :nth-child(1)').should('have.text', 'Name')
        cy.get('#credit_table > tr > :nth-child(2)').should('have.text', 'Quantity')

        //Subscription Section
        cy.get(':nth-child(3) > .section-heading').should('have.text', 'Subscription')

        cy.get('#planlisting > :nth-child(1) > .card-body > .media > .media-body > .font-size-16').should('have.text', 'Free Plan')
        cy.get(':nth-child(1) > .card-body > .media > .media-body > h2.mt-0').should('have.text', '£ 0 /month')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(1) > strong').should('have.text', " ATS - View & hire Jobseekers")
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(2) > strong').should('have.text', ' Auto CV Parsing')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(3) > strong').should('have.text', ' Bulk Contact Messaging')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(4) > strong').should('have.text', ' CRM Integrations')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(5) > strong').should('have.text', ' Dedicated Account Manager')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(6) > strong').should('have.text', ' Job Ad Multi-Posting')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(7) > strong').should('have.text', ' Largest Discounts on Premium Ads')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(8) > strong').should('have.text', ' Phone Support')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(9) > strong').should('have.text', ' Post jobs to our network')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(10) > strong').should('have.text', ' Reports & Analytics')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(11) > strong').should('have.text', '0 SMS & Email Credits/Month')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(12) > strong').should('have.text', ' Unlimited Contact Storage')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(13) > strong').should('have.text', '0 User Licence')

        cy.get('.price-plan-highlight > .card-body > .media > .media-body > .font-size-16').should('have.text', 'Pro Plan')
        cy.get('.price-plan-highlight > .card-body > .media > .media-body > h2.mt-0').should('have.text', '£ 29 /month')
        // cy.get('.price-plan-highlight > .card-body > .card-pricing-features > :nth-child(1) > strong').should('have.text', 'ATS - View & hire Jobseekers')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(2) > strong').should('have.text', ' Auto CV Parsing')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(3) > strong').should('have.text', ' Bulk Contact Messaging')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(4) > strong').should('have.text', ' CRM Integrations')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(5) > strong').should('have.text', ' Dedicated Account Manager')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(6) > strong').should('have.text', ' Job Ad Multi-Posting')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(7) > strong').should('have.text', ' Largest Discounts on Premium Ads')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(8) > strong').should('have.text', ' Phone Support')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(9) > strong').should('have.text', ' Post jobs to our network')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(10) > strong').should('have.text', ' Reports & Analytics')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(11) > strong').should('have.text', '300 SMS & Email Credits/Month')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(12) > strong').should('have.text', ' Unlimited Contact Storage')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(13) > strong').should('have.text', '1 User Licence')

        cy.get(':nth-child(3) > .card-body > .media > .media-body > .font-size-16').should('have.text', 'Enterprise Plan')
        cy.get('.price-plan-highlight > .card-body > .media > .media-body > h2.mt-0').should('have.text', '£ 29 /month')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(1) > strong').should('have.text', ' ATS - View & hire Jobseekers')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(2) > strong').should('have.text', ' Auto CV Parsing')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(3) > strong').should('have.text', ' Bulk Contact Messaging')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(4) > strong').should('have.text', ' CRM Integrations')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(5) > strong').should('have.text', ' Dedicated Account Manager')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(6) > strong').should('have.text', ' Job Ad Multi-Posting')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(7) > strong').should('have.text', ' Largest Discounts on Premium Ads')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(8) > strong').should('have.text', ' Phone Support')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(9) > strong').should('have.text', ' Post jobs to our network')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(10) > strong').should('have.text', ' Reports & Analytics')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(11) > strong').should('have.text', '3000 SMS & Email Credits/Month')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(12) > strong').should('have.text', ' Unlimited Contact Storage')
        // cy.get(':nth-child(1) > .card-body > .card-pricing-features > :nth-child(13) > strong').should('have.text', '10 User Licence')

        //FAQs Section
        cy.get(':nth-child(6) > .section-heading').should('have.text', 'FAQs')
        //cy.get('#headingOne > .mb-0 > .btn').should('have.text', ' How is whoppit secure? ')
        //cy.get('#collapseOne > .card-body').should('have.text', "We do not store any card details on whoppit. We use 'Stripe' that Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry. To accomplish this, they use the best-in-class security tools and practices to maintain a high level of security.We only store basic details about yourself and this is never passed onto third practices.")
        //cy.get('#headingTwo > .mb-0 > .btn').should('have.text', 'Can I cancel at any time?')
        cy.get('#headingTwo > .mb-0 > .btn').click()
        //cy.get('#collapseTwo > .card-body').should('have.text', "We do not store any card details on whoppit. We use 'Stripe' that Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry. To accomplish this, they use the best-in-class security tools and practices to maintain a high level of security.We only store basic details about yourself and this is never passed onto third practices.")
        //cy.get(':nth-child(3) > #headingThree > .mb-0 > .btn').should('have.text', 'Do whoppit credits rollover to the next month?')
        cy.get(':nth-child(3) > #headingThree > .mb-0 > .btn').click()
        //cy.get(':nth-child(3) > #collapseThree > .card-body').should('have.text', 'No. whoppit credits do not roll over each month. ')
        //cy.get(':nth-child(4) > #headingThree > .mb-0 > .btn').should('have.text', 'What are the benefits of whoppit Pro?')
        cy.get(':nth-child(4) > #headingThree > .mb-0 > .btn').click()
        //cy.get(':nth-child(4) > #collapseThree > .card-body').should('have.text', 'There are many. We charge the Subscription so we can guarantee a high level of service and offset some of our costs at the same time.')
    }
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