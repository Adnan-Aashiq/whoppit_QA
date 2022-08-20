/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { CreateJob } from "../pages/create-job"

const loginobj = new Login()
const createjobobj = new CreateJob()

describe('Job posting and applying',()=>{
    it('Create a Job Post',()=>{
        cy.viewport(1200,800)
        loginobj.login()
        cy.get(".navigation a[href*='/company/post-free-advert']").click({force:true})
        createjobobj.basic()
        //cy.get("#terms-tab").click()
        createjobobj.terms()
    })
})