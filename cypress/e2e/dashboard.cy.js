/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"

const dashboardobj = new Dashboard()
const loginobj = new Login()

describe('DashBoard sections testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
    })
    it('Dashboard data testing by Company profile', () => {
        loginobj.login("company","alex.ramsdale@icloud.com","testing@123456")
        dashboardobj.dashboardTesting()
    })
    it('Dashboard left Menu Testing by Company profile', () => {
        loginobj.login("company","alex.ramsdale@icloud.com","testing@123456")
        dashboardobj.leftMenu_Testing()
    })
    it('Reference Request module testing by User profile', () => {
        loginobj.login("user","testuser37@mailinator.com","Testinguser@37.")
        dashboardobj.referenceRequest()
    })
    it.only('Jobseeker profile', () => {
        loginobj.login("company","alex.ramsdale@icloud.com","testing@123456")
        dashboardobj.jobseekerProfile()
    })

    
})