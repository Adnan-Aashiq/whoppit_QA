export class Dashboard{
    referenceRequest(){
        cy.get(".status-card").click()
        let num = Math.floor(Math.random() * 1000);
        var email = "referenceuser" + num + "@mailinator.com";
        cy.get("#seperated_ref_email").type(email)
        cy.get("#custom_message").type("I am writing to ask whether you would feel comfortable providing a positive letter of reference for me. If you can attest to my qualifications for employment, and to the skills I attained while I was employed at ABC Company, I would sincerely appreciate it.")
        cy.get("#sendReferenceReq").click()
        cy.wait(3000)
        cy.get("#reference_req_list tr:last-child td:first-child").should('have.text',email)
    }
    dashboardTesting(){
        cy.get("#live-status-swiper div div:nth-child(1) h5").should('have.text','Live jobs ads ')
        cy.get("#live-status-swiper div div:nth-child(2) h5").should('have.text','Contacts ')
        cy.get("#live-status-swiper div div:nth-child(3) h5").should('have.text','Buy an ad bundle ')
        cy.get("#live-status-swiper div div:nth-child(4) h5").should('have.text','New applicants ')
        cy.get("#recent-hires-section h3").should('have.text','Recent Hires')
        cy.intercept('**/recent-applicants').as("recent-applicants_response")
        cy.get("#recent-received-cv-section a[href='/company/recent-applicants']").click()
        cy.wait('@recent-applicants_response').its('response.statusCode').should('eq', 200)
        cy.go('back')
        cy.get("#recent-received-cv-section h3").should('have.text','Recent Applications')
        cy.get("#recent-received-cv-nav button:nth-child(2)").click()
        cy.intercept('**/manage-job-boards').as("manage-job-boards_response")
        cy.get(".job-boards a[href='/company/manage-job-boards']").click()
        cy.wait('@manage-job-boards_response').its('response.statusCode').should('eq', 200)
        cy.go('back')
        cy.get(".job-boards h3").should('have.text','Job Boards ')
        cy.get("#job-boards-nav button:nth-child(2)").click()
        cy.get(".social-media h3").should('have.text','Social Media')
        cy.get(".team-users-wrap h3").should('have.text','Team Users')
        cy.get(".news-section-wrap h3").should('have.text','News Top Stories')


    }
    
}