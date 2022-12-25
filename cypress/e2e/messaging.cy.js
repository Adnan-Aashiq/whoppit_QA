/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { Messaging } from "../pages/messaging"
 
const loginobj = new Login()
const messagingobj = new Messaging()

describe('Messaging Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        messagingobj.messaging_home()
    })
    it('Send SMS and attachments to applicants components testing', () => {
        messagingobj.filter()
        messagingobj.jobseeker()
    })
    // Bug needs to resolved 
    // when user send sms to contacts it doesn't appear in inbox
    // it.only('Send SMS and attachments to contacts components testing', () => {
    //     messagingobj.contacts()
    // })
    it.only('Bulk message contacts components testing', () => {
        messagingobj.bulkmessages()
    })
})