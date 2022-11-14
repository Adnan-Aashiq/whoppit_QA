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
        loginobj.login('company', "sbisht+demo1@whoppit.com", "testing@12345")
        dashboardobj.setting()
    })
    it('Setting sections components testing', () => {
        settingssobj.basic_settings()
        settingssobj.job_applications()
        settingssobj.jobAd_settings()
    })
})