/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"
import { Settings } from "../pages/settings"

const dashboardobj = new Dashboard()
const loginobj = new Login()
const settingssobj = new Settings()

describe('Settings Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        dashboardobj.setting()
    })
    it('Setting sections components testing', () => {
        settingssobj.basic_settings()
        //have to delete Pending Lane if exist before running the test
        settingssobj.job_applications()
    })
})