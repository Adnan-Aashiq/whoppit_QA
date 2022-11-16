/// <reference types="cypress"/>

import { JobAds } from "../pages/jobAds"
import { Login } from "../pages/authentication"

const jobadsobj = new JobAds()
const loginobj = new Login()

describe('Job Ads Section testing', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        loginobj.login('company', "alex.ramsdale@icloud.com", "testing@123456")
        jobadsobj.jobads_homepage()
    })
    it.only('Job Ads sections components testing', () => {
        jobadsobj.view_application()
        cy.get('#job-422 > .card-body-top > .status-icons > .view_contacted > img').click()
        jobadsobj.bulk_message()
        //before running boost make sure user doesnot have below credit
        jobadsobj.boost('TOTALJOBS')
        jobadsobj.analytics()
        jobadsobj.archive_job()
        jobadsobj.close_job()
    })
    it('Job Ads sections Edit Job component testing', () => {
        jobadsobj.editjob()
    })
    it('Job Ads sections Repost Job component testing', () => {
        jobadsobj.repost_job()
    })
})