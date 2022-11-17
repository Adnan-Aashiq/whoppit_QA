/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { Contacts } from "../pages/contacts"

const loginobj = new Login()
const contactsobj = new Contacts()

describe('Contacts Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
    })
    it('Send single or Bulk SMS to contacts components testing', () => {
        contactsobj.contacts_home()
        contactsobj.sms()
    })
    it.only('Add New Contact component testing', () => {
        contactsobj.add_contact()
    })
    // it('Bulk message contacts components testing', () => {
    //     messagingobj.bulkmessages()
    // })
})