/// <reference types="cypress"/>

export class UserProfile {
    editCompanyProfile() {
        cy.get(".text-dark.dropdown-toggle.nav-user").click()
        cy.get("a[href*='user/edit']").click()
        cy.get("#select2-company_roles-container").type("Events planner" + "{enter}")
        cy.get("#company_username").clear()
        cy.get("#company_username").type("UserTesting1")
        //cy.get("#company_phone").type("+447506999725")
        cy.get("#edit_company_user_form div:nth-child(5) input[type='file']").attachFile("logo.png")
        cy.get(".col-xl-6 > .card > .card-body > #edit_company_user_form > #edit_company_user").click()
    }
    editUserProfile() {
        cy.get(".text-dark.dropdown-toggle.nav-user").click()
        cy.get("a[href*='user/edit']").click()

        cy.get("#industries").select("Healthcare", { force: true })
        cy.get(':nth-child(2) > :nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        let num = Math.floor((Math.random() * 10) + 1);
        cy.get(".select2-results__options li:nth-child(" + num + ") ul li:nth-child(" + 1 + ")").click()

        cy.get("#first_name").clear()
        cy.get("#first_name").type("Black")
        cy.get("#first_name").should('have.text',"Black")

        cy.get("#last_name").clear()
        cy.get("#last_name").type("Adam")

        cy.get("#email").clear()
        cy.get("#email").type("testuser37@mailinator.com")

        cy.get("#contact_number").clear()
        cy.get("#contact_number").type("+447506866725")

        cy.get("#postcode").clear()
        cy.get("#postcode").type("895623")

        cy.get("#addressgeo").clear()
        cy.get("#addressgeo").type("IKEA Warrington, Europa Boulevard, Westbrook, Warrington, UK")

        cy.get("#line2").clear()
        cy.get("#line2").type("Tottenham Court Road Station, Oxford Street, London, UK")

        cy.get("#town").clear()
        cy.get("#town").type("Los vegas")

        cy.get("#country").clear()
        cy.get("#country").type("America")

        cy.get("#experience").select("5")
        cy.get("#job_type").select("Temporary", { force: true })
        cy.get("#qualifications").select("JIB", { force: true })
        cy.get(".show_qualification_evi_id.cloned-elements input[type='file']").attachFile("resume.docx")
        cy.get("#languages").select("Greek", { force: true })
        cy.get("#salary_type").select("Per Day", { force: true })
        cy.get("#expected_salary").clear()
        cy.get("#expected_salary").type("5623")

        cy.get("#date_of_birth").click()
        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
        cy.get("#date_available").click()
        cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click()
        cy.get("#utr_number").clear()
        cy.get("#utr_number").type("12345 67890")
        cy.get("#user-edit-profile-form div:nth-child(1) div:nth-child(1) div:nth-child(15) input[type='file']").attachFile("pic1.jpg")
        cy.get("#marketing-email").click({ force: true })
        cy.get("#marketing-sms").click({ force: true })
        cy.get("#note").clear()
        cy.get("#note").type("Developed new filing practices at my previous job, saving the company ~$2,500 per year in labor expenses")
        cy.get("#user-edit-profile-btn").click()
    }
    changePassowrd(usertype) {
        cy.get(".text-dark.dropdown-toggle.nav-user").click()
        cy.get("a[data-target='#change-password-modal']").click()
        let password
        if (usertype == 'user') {
            password = 'Testinguser@37.'
        }
        else if (usertype == 'company') {
            password = 'testing@123456'
        }
        //let newpassword = 'testing@123456'
        cy.log(password)
        cy.get("#oldpassword").type(password)
        cy.get("#newpassword").type(password)
        cy.get("#confirm_password").type(password)
        cy.get("#change-password-btn").click()
    }
}