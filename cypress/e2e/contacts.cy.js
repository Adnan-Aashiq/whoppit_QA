/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { Contacts } from "../pages/contacts"
import { Messaging } from "../pages/messaging"

const loginobj = new Login()
const contactsobj = new Contacts()
const messagingobj = new Messaging()

describe('Contacts Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
    })
    it.only('Send single and Bulk messages randomly to contacts components testing', () => {
        contactsobj.contacts_home()
        contactsobj.sms()
    })
    it('Add New Contact component testing', () => {
        contactsobj.add_contact()
    })
})