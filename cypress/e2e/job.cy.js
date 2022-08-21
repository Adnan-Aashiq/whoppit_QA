/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { CreateJob } from "../pages/job"
import { JobApply } from "../pages/job"

const loginobj = new Login()
const createjobobj = new CreateJob()
const jobapplyobj = new JobApply()

describe('Job posting and applying',()=>{
    it('Create a Job Post',()=>{
        cy.viewport(1200,800)
        loginobj.login()
        cy.get(".navigation a[href*='/company/post-free-advert']").click({force:true})
        createjobobj.basic()
        createjobobj.terms()
        createjobobj.requirement()
        createjobobj.about()
        createjobobj.share()
    })
    it('Apply on Job by registration',()=>{
        cy.viewport(1200,800)
        loginobj.login()
        jobapplyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > #register_apply_btn > strong').click()
        jobapplyobj.registration()
    })
    it.only('Apply on Job by login',()=>{
        cy.viewport(1200,800)
        loginobj.login()
        jobapplyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > [data-target="#login"] > strong').click()
        jobapplyobj.login()
    })
})