import { JobAds } from "../pages/jobAds"

const jobadsobj = new JobAds()

export class Contacts{
    contacts_home(){
        cy.wait(10000)
        cy.get('nav  > :nth-child(1) > :nth-child(1)').click()
    }
    sms(){
        jobadsobj.bulk_message()
    }
}