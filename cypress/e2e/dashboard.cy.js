/// <reference types="cypress"/>

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/authentication"

const dashboardobj = new Dashboard()
const loginobj = new Login()

describe('DashBoard sections testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
    })
    it.only('Dashboard data testing by User Company', () => {
        loginobj.login("company")
        dashboardobj.dashboardTesting()
    })
    it('Reference Request module testing by User profile', () => {
        loginobj.login("user")
        dashboardobj.referenceRequest()
    })
})