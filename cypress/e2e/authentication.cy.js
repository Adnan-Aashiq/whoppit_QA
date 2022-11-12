/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { UserProfile } from "../pages/userProfile"

const loginobj = new Login()
const userprofileobj = new UserProfile()

describe('Authetication for new User',()=>{
    beforeEach(() => {
        cy.viewport(1200, 800)
    })
    it('Registration form for company profile',()=>{
        loginobj.registration("company")
        loginobj.selectingOrganization()
        loginobj.ClickIndustries()
        loginobj.clickOnCompany()
        loginobj.signupFormStep4()
    })
    it('Forgot password company Profile',()=>{
        loginobj.forgotPassword("company")
    })
    it('Edit Company Profile',()=>{
        loginobj.login("company","1@mailinator.com","One@123...")
        userprofileobj.editCompanyProfile()
    })
    it('Change password Company Profile',()=>{
        loginobj.login("company","1@mailinator.com","One@123...")
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
        loginobj.forgotPassword("user")
    })
    it('Edit Users Profile',()=>{
        loginobj.login("user","testuser37@mailinator.com","Testinguser@37.")
        userprofileobj.editUserProfile()
    })
    it('Change password Users Profile',()=>{
        loginobj.login("user","testuser37@mailinator.com","Testinguser@37.")
        userprofileobj.changePassowrd('user')
    })
})