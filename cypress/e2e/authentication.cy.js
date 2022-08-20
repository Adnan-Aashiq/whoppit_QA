/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { UserProfile } from "../pages/userProfile"

const loginobj = new Login()
const userprofileobj = new UserProfile()

describe('Authetication for new User',()=>{
    it('Registration form',()=>{
        loginobj.registration()
        loginobj.selectingOrganization()
        loginobj.ClickIndustries()
        loginobj.clickOnCompany()
        loginobj.signupFormStep4()
    })
    it('Edit Users Profile',()=>{
        loginobj.login()
        userprofileobj.editProfile()
    })
})