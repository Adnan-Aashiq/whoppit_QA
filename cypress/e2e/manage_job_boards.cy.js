/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"
import { ManageJobBoards } from "../pages/manage_job_boards"

const dashboardobj = new Dashboard()
const loginobj = new Login()
const managejobboardsobj = new ManageJobBoards()

describe('Manage Job Boards Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        dashboardobj.mjbSection()
    })
    it('Manage Job Boards sections components testing', () => {
        managejobboardsobj.uiTest()
    })
})