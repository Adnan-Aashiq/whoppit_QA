/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { UserProfile } from "../pages/userProfile"
import { CreateJob } from "../pages/create-job"

const loginobj = new Login()
const userprofileobj = new UserProfile()
const createjobobj = new CreateJob()

describe('Authetication for new User',()=>{
    it('Registration form',()=>{
        // loginobj.registration()
        // loginobj.selectingOrganization()
        // loginobj.ClickIndustries()
        // loginobj.clickOnCompany()
        // loginobj.signupFormStep4()
        loginobj.login()
    })
    it('Edit Users Profile',()=>{
        loginobj.login()
        userprofileobj.editProfile()
    })
    it.only('Create a Job Post',()=>{
        loginobj.login()
        createjobobj
    })
})