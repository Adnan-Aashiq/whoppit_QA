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
    leftMenu_Testing(){
        cy.get('.left-sidebar .logo-menu .burger-menu a').should('be.visible')

        //Whobbit link and Icon testing
        cy.get('.logo a:last-child').should('have.attr', 'href', '/company/dashboard')
        cy.intercept('**/dashboard').as("dashboard_response")
        cy.get('.logo a:last-child').click({force: true})
        cy.wait('@dashboard_response').its('response.statusCode').should('eq', 200)

        //Dashboard Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(1) span').should('have.text','Dashboard')
        cy.get('#company-left-side-bar li:nth-child(1) a').should('have.attr', 'href', '/company/dashboard')
        cy.intercept('**/dashboard').as("dashboard_Button_response")
        cy.get('#company-left-side-bar li:nth-child(1) a').click({force: true})
        cy.wait('@dashboard_Button_response').its('response.statusCode').should('eq', 200)

        //Social media sync Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(2) span').should('have.text','Social media sync')
        cy.get('#company-left-side-bar li:nth-child(2) a').should('have.attr', 'href', '/company/social-media-sync')
        cy.intercept('**/social-media-sync').as("social_media_sync_Button_response")
        cy.get('#company-left-side-bar li:nth-child(2) a').click({force: true})
        cy.wait('@social_media_sync_Button_response').its('response.statusCode').should('eq', 200)

        //Manage Jobs board Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(3) span').should('have.text','Manage Jobs board')
        cy.get('#company-left-side-bar li:nth-child(3) a').should('have.attr', 'href', '/company/manage-job-boards')
        cy.intercept('**/manage-job-boards').as("manage_jobs_board_Button_response")
        cy.get('#company-left-side-bar li:nth-child(3) a').click({force: true})
        cy.wait('@manage_jobs_board_Button_response').its('response.statusCode').should('eq', 200)

        //Manage team users Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(4) span').should('have.text','Manage team users')
        cy.get('#company-left-side-bar li:nth-child(4) a').should('have.attr', 'href', '/company/manage-team-users')
        cy.intercept('**/manage-team-users').as("manage_team_users_Button_response")
        cy.get('#company-left-side-bar li:nth-child(4) a').click({force: true})
        cy.wait('@manage_team_users_Button_response').its('response.statusCode').should('eq', 200)

        //Jobs board Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(5) span').should('have.text','Jobs boards')
        cy.get('#company-left-side-bar li:nth-child(5) a').should('have.attr', 'href', '/jobs?mod=company')
        cy.intercept('**/jobs?mod=company').as("jobs_board_Button_response")
        cy.get('#company-left-side-bar li:nth-child(5) a').click({force: true})
        cy.wait('@jobs_board_Button_response').its('response.statusCode').should('eq', 200)

        //Settings Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(6) span').should('have.text','Settings')
        cy.get('#company-left-side-bar li:nth-child(6) a').should('have.attr', 'href', '/company/settings')
        cy.intercept('**/settings').as("settings_Button_response")
        cy.get('#company-left-side-bar li:nth-child(6) a').click({force: true})
        cy.wait('@settings_Button_response').its('response.statusCode').should('eq', 200)

        //Billing Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(7) span').should('have.text','Billing')
        cy.get('#company-left-side-bar li:nth-child(7) a').should('have.attr', 'href', '/company/billing')
        cy.intercept('**/billing').as("billing_Button_response")
        cy.get('#company-left-side-bar li:nth-child(7) a').click({force: true})
        cy.wait('@billing_Button_response').its('response.statusCode').should('eq', 200)

        //CRM Integration Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(9) span').should('have.text','CRM Integration')
        cy.get('#company-left-side-bar li:nth-child(9) a').should('have.attr', 'href', '/company/crm-integrations')
        cy.intercept('**/crm-integrations').as("crm_integrations_board_Button_response")
        cy.get('#company-left-side-bar li:nth-child(9) a').click({force: true})
        cy.wait('@crm_integrations_board_Button_response').its('response.statusCode').should('eq', 200)

        //News Button link and text testing
        cy.get('#company-left-side-bar li:nth-child(10) span').should('have.text','News')
        cy.get('#company-left-side-bar li:nth-child(10) a').should('have.attr', 'href', '/company/news')
        cy.intercept('**/news').as("news_Button_response")
        cy.get('#company-left-side-bar li:nth-child(10) a').click({force: true})
        cy.wait('@news_Button_response').its('response.statusCode').should('eq', 200)

        //Last icon testing
        cy.get('.left-bar-bottom h4').should('have.attr', 'id', 'company-name')

    }
    billingSection(){
        cy.get('#company-left-side-bar li:nth-child(7) span').should('have.text','Billing')
        cy.get('#company-left-side-bar li:nth-child(7) a').should('have.attr', 'href', '/company/billing')
        cy.intercept('**/billing').as("billing_Button_response")
        cy.get('#company-left-side-bar li:nth-child(7) a').click({force: true})
        cy.wait('@billing_Button_response').its('response.statusCode').should('eq', 200)
    }
    mtuSection(){
        cy.get('#company-left-side-bar li:nth-child(4) span').should('have.text','Manage team users')
        cy.get('#company-left-side-bar li:nth-child(4) a').should('have.attr', 'href', '/company/manage-team-users')
        cy.intercept('**/manage-team-users').as("manage_team_users_Button_response")
        cy.get('#company-left-side-bar li:nth-child(4) a').click({force: true})
        cy.wait('@manage_team_users_Button_response').its('response.statusCode').should('eq', 200)
    }
    
}