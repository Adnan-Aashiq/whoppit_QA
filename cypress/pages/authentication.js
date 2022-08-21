/// <reference types="cypress"/>

export class Login {
    registration() {
        cy.visit("https://dev.whoppit.com/company/signup/step1")
        cy.get("#name").type('TestingUser1')
        cy.get("#company_name").type('TestingCompany1')
        cy.get("#email").type('testuser@mailinator.com')
        cy.get("#password").type('TestingUser1@123.', { force: true })
        cy.get("#company-signup-btn-step1").click()
        //cy.wait(7000)
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
    login() {
        cy.visit("https://dev.whoppit.com/company/signup/step1")
        cy.get(".footergroup a[href*='login']").click()
        cy.get("#email").type('alex.ramsdale@icloud.com')
        cy.get("#password").type('testing123')
        cy.get("#company-login-btn").click()
    }


}