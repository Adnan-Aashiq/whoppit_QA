/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { UserProfile } from "../pages/userProfile"

const loginobj = new Login()
const userprofileobj = new UserProfile()

describe('Authetication for new User',()=>{
    it('Registration form for company profile',()=>{
        loginobj.registration("company")
        loginobj.selectingOrganization()
        loginobj.ClickIndustries()
        loginobj.clickOnCompany()
        loginobj.signupFormStep4()
    })
    it('Edit Company Profile',()=>{
        loginobj.login("company")
        userprofileobj.editCompanyProfile()
    })
    it('Registration form for Jobseeker profile',()=>{
        loginobj.registration("user")
        loginobj.step2user()
        loginobj.step3user()
        loginobj.step4user()
        loginobj.step5user()
    })
    it('Forgot password Users Profile',()=>{
        cy.viewport(1200,800)
        loginobj.forgotPassword("user")
    })
    it('Edit Users Profile',()=>{
        cy.viewport(1200,800)
        loginobj.login("user")
        userprofileobj.editUserProfile()
    })
    it('Change password Users Profile',()=>{
        cy.viewport(1200,800)
        loginobj.login("user")
        userprofileobj.changePassowrd('user')
    })
})