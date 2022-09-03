/// <reference types="cypress"/>

import { Login } from "../pages/authentication"
import { CreateJob_Company} from "../pages/job"
import { JobApply_Company } from "../pages/job"
import { JobApply_User } from "../pages/job"

const loginobj = new Login()
const createjobcompanyobj = new CreateJob_Company()
const jobapplycompanyobj = new JobApply_Company()
const jobapplyuserobj = new JobApply_User()

describe('Job posting and applying',()=>{
    beforeEach(()=>{
        cy.viewport(1200,800)
    })
    it('Create a Job Post By Company',()=>{
        loginobj.login('company')
        cy.get(".navigation a[href*='/company/post-free-advert']").click({force:true})
        createjobcompanyobj.basic()
        createjobcompanyobj.terms()
        createjobcompanyobj.requirement()
        createjobcompanyobj.about()
        createjobcompanyobj.share()
    })
    it('Apply on Job by registration By Company',()=>{
        loginobj.login('company')
        jobapplycompanyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > #register_apply_btn > strong').click()
        jobapplycompanyobj.registration()
    })
    it('Apply on Job by login By Company',()=>{
        loginobj.login('company')
        jobapplycompanyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > [data-target="#login"] > strong').click()
        jobapplycompanyobj.login()
    })
    // it('Apply on Job by login By User',()=>{
    //     loginobj.login('user')
    //     jobapplyuserobj.applyForjob()
    // })
})