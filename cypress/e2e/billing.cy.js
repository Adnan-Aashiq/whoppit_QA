/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"
import { Billing } from "../pages/billing";

const dashboardobj = new Dashboard()
const loginobj = new Login()
const billingobj =  new Billing()

describe('Billing Section testing',()=>{
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "sbisht+demo2@whoppit.com", "testing@12345")
        dashboardobj.billingSection()
    })
    it('Change Subscription from billing section',()=>{
        billingobj.upgradte_Plan()
    })
    it('Add users from billing section',()=>{
        billingobj.add_user()
    })
    it(' Buy whoppit Credits billing section',()=>{
        billingobj.buy_whoppit_credits()
    })
    it('More Information Menu from billing section',()=>{
        billingobj.more_information()
    })
    it('View Invoices from billing section',()=>{
        billingobj.view_invoices("sbisht+demo2@whoppit.com")
    })
    it('Delete Card Details from billing section',()=>{
        billingobj.delete_card()
    })
})