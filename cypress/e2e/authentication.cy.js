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
        loginobj.login("company","alex.ramsdale@icloud.com","testing@123456")
        userprofileobj.editCompanyProfile()
    })
    it('Change password Company Profile',()=>{
        cy.viewport(1200,800)
        loginobj.login("company")
        userprofileobj.changePassowrd('company')
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
        loginobj.login("user","testuser37@mailinator.com","Testinguser@37.")
        userprofileobj.editUserProfile()
    })
    it('Change password Users Profile',()=>{
        cy.viewport(1200,800)
        loginobj.login("user","testuser37@mailinator.com","Testinguser@37.")
        userprofileobj.changePassowrd('user')
    })
})