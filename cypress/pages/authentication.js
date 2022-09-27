/// <reference types="cypress"/>

export class Login {
    registration(usertype) {
        cy.visit("https://dev.whoppit.com")
        let num = Math.floor(Math.random() * 1000);
        if (usertype == 'user') {
            cy.get(".text-muted a[href*='user']").click()
            cy.get("#name").type("TestingJobseeker" + num + "User")
            cy.get("#email").type("testuser" + num + "@mailinator.com")
            cy.get("#contact_number").type("+447506866725")
            cy.get("#password").type("Testinguser@" + num + ".", { force: true })
            cy.get("#user-signup-btn-step1").click()
            cy.wait(2000)
        }
        else if (usertype == 'company') {
            cy.get(".text-muted a[href*='company']").click()
            cy.get("#name").type("TestingCompany" + num + "User")
            cy.get("#company_name").type("Testing" + num + "Company")
            cy.get("#email").type("testuser" + num + "@mailinator.com")
            cy.get("#password").type("Testinguser@" + num + ".", { force: true })
            cy.get("#company-signup-btn-step1").click()
            cy.wait(7000)
        }
    }
    selectingOrganization() {
        const value = "Director, Finance manager, Site foreman, Owner"
        const vals = value.split(",");
        for (var i = 0; i < vals.length; i++) {
            cy.get('.select2-search__field')
                .type(vals[i] + "{enter}")
        }
        cy.get("#company_contact_number").type("+9123456789")
        cy.get("#company-signup-btn-step2").click()
    }
    ClickIndustries() {
        const industries = ["Armed Forces", "Science", "Leadership"]
        cy.get('#company-signup-form-step3 div:nth-child(1) .custom-check-wrap').each(($el, index, $list) => {
            const Cy_industries = cy.wrap(industries);
            const text = $el.find('label').text()
            Cy_industries.each((indus_name) => {
                if (text.includes(indus_name)) {
                    cy.wrap($el.find('label')).click()
                }
            })
        })
    }
    clickOnCompany() {
        const companyType = "Sole Trader"
        cy.get('#company-signup-form-step3 div:nth-child(2) .custom-check-wrap').each(($el, index, $list) => {
            const text = $el.find('label').text()
            if (text.includes(companyType)) {
                cy.wrap($el.find('label')).click()
            }
        }).then(() => {
            cy.get("#company-signup-btn-step3").click()
        })

    }
    signupFormStep4() {
        const hireCount = "5-10"
        cy.get('#company-signup-form-step4 div:nth-child(1) .custom-check-wrap').each(($el, index, $list) => {
            const text = $el.find('label').text()
            if (text.includes(hireCount)) {
                cy.wrap($el.find('label')).click()
            }
        }).then(() => {
            const hearingPlatform = "Facebook Ad"
            cy.get('#company-signup-form-step4 div:nth-child(2) .custom-check-wrap').each(($el, index, $list) => {
                const text = $el.find('label').text()
                if (text.includes(hearingPlatform)) {
                    cy.wrap($el.find('label')).click()
                }
            })
        }).then(() => {
            cy.get("#company-signup-btn-step4").click()

        })
    }
    step2user() {

        for (var i = 0; i < 5; i++) {
            let num = Math.floor((Math.random() * 20) + 1);
            cy.get("#user-signup-form-step2 div:nth-child(1) .select2-selection__rendered").click()
            cy.get(".select2-results__options li:nth-child(" + num + ")").click()
            cy.wait(2000)
        }
        for (var i = 0; i < 3; i++) {
            let num = Math.floor((Math.random() * 10) + 1);
            cy.get("#user-signup-form-step2 div:nth-child(2) .select2-selection__rendered").click()
            cy.get(".select2-results__options li:nth-child(" + num + ") ul li:nth-child(" + 1 + ")").click()
            cy.wait(3000)
        }
        cy.get("#user-signup-btn-step2").click()
    }
    step3user() {
        cy.get("#addressgeo").type("Tottenham Court Road Station, Oxford Street, London, UK")
        cy.get("#Permanent").click({ force: true })
        cy.get("input[id='Per Hour']").click({ force: true })
        cy.get("#expected_salary").type("5600")
        cy.get("#user-signup-btn-step3").click()
    }
    step4user() {
        cy.get("input[id='7 to 10']").click({ force: true })
        cy.get("#select2-qualifications-container").click()
        cy.get(".select2-results__options li:nth-child(5)").click()
        cy.get(".js-qualifications.cloned-element input[type='file']").attachFile("resume.docx")
        cy.wait(2000)
        cy.get(".evidence-attached.cv input[type='file']").attachFile("ZarrarResume.pdf")
        cy.wait(2000)
        cy.get("#user-signup-btn-step4").click()
    }
    step5user() {
        let num = Math.floor((Math.random() * 20) + 1);
        cy.get("#seperated_ref_email").type("testingadnan" + num + "@gmail.com")
        cy.get("#custom_message").type("Thanks for asking! I don’t have anything else to add. I feel like we covered the important topics, and I was able to share the key pieces of my background and how they’d help me perform well in the role. It was great learning about the role, and the opportunity to do XYZ in this position sounds especially interesting. What are the next steps in the process?")
        cy.get("#sendReferenceReq").click()
    }
    login(usertype,email,password) {
        cy.visit("https://dev.whoppit.com/user/login")
        if (usertype == 'user') {
            cy.get("#email").type(email)
            cy.get("#password").type(password)
            cy.get("#"+usertype+"-login-btn").click()
        }
        else if (usertype == 'company') {
            cy.get("#login-box a").click()
            cy.get("#email").type(email)
            cy.get("#password").type(password)
            cy.get("#"+usertype+"-login-btn").click()
        }
    }
    forgotPassword(usertype){
        cy.visit("https://dev.whoppit.com")
        if (usertype == 'user') {
            cy.get("a[href*='/"+usertype+"/forgot-password']").click()
            cy.get("#email").type('testuser37@mailinator.com')
            cy.get("#"+usertype+"-forgot-password-btn").click()
            cy.wait(2000)
            cy.get("a[href*='/"+usertype+"/login']").click()
        }
        else if (usertype == 'company') {
            cy.get("#login-box a").click()
            cy.get("a[href*='/"+usertype+"/forgot-password']").click()
            cy.get("#email").type('alex.ramsdale@icloud.com')
            cy.get("#"+usertype+"-forgot-password-btn").click()
            cy.wait(2000)
            cy.get("a[href*='/"+usertype+"/login']").click()
        }
    }


}