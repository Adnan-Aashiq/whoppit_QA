/// <reference types="cypress"/>

cy.get('#select2-company_roles-container').select('')


import { Login } from "../pages/authentication"
import { CreateJob_Company, JobApply_Company, JobApply_User,JobApplications  } from "../pages/job"

const loginobj = new Login()
const createjobcompanyobj = new CreateJob_Company()
const jobapplycompanyobj = new JobApply_Company()
const jobapplyuserobj = new JobApply_User()
const jobapplicationsObj = new JobApplications()

describe('Job posting and applying', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
    })
    it.only('Create a Job Post By Company', () => {
        loginobj.login('company', "sbisht+demo1@whoppit.com", "testing@12345")
        cy.get(".navigation a[href*='/company/post-free-advert']").click({ force: true })
        createjobcompanyobj.basic()
        createjobcompanyobj.terms()
        createjobcompanyobj.requirement()
        createjobcompanyobj.about()
        createjobcompanyobj.jobBoards('CV_LIB')
        createjobcompanyobj.socialMedia()
        createjobcompanyobj.jobPostBilling()
        
    })
    it('Apply on Job by registration By Company', () => {
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        jobapplycompanyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > #register_apply_btn > strong').click()
        jobapplycompanyobj.registration()
    })
    it('Apply on Job by login By Company', () => {
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        jobapplycompanyobj.miscellaneous()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > :nth-child(1) > [data-target="#login"] > strong').click()
        jobapplycompanyobj.login()
    })
    //page target issue
    it('Apply on Job by login By User', () => {
        loginobj.login('user')
        jobapplyuserobj.applyForjob()
    })
    it.only('SMS to Job Applicants By Company profiler', () => {
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        jobapplicationsObj.sms()

    })
})