/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"
import { ManageTeamUsers } from "../pages/manage_team_users";

const dashboardobj = new Dashboard()
const loginobj = new Login()
const manageteamusersobj = new ManageTeamUsers()

describe('Billing Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        dashboardobj.mtuSection()
    })
    it('Change Subscription from billing section', () => {
        manageteamusersobj.uiTest()
        manageteamusersobj.inviteUsers()
        manageteamusersobj.toggleButton()
    })
})