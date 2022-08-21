/// <reference types="cypress"/>

export class CreateJob {
    basic() {
        cy.get("#select2-number_of_hires-container").type('2' + "{enter}")
        cy.get("#select2-advert_job_title-container").click()
        cy.get(".select2-results__options li:nth-child(1) .select2-results__options.select2-results__options--nested li:nth-child(1)").click()
        cy.get("#postcode").type("123456", { force: true })
        cy.get(":nth-child(5) > .form-group > .form-group-inner > .tw-items-center").type("no digs" + "{enter}")
        cy.get("#select2-advert_industry-container").click()
        cy.get(".select2-results__options li:nth-child(2)").click()
        cy.get("#addressgeo_places").type("House no 3 Street no 7 New York city", { force: true })
        cy.get("#job_refreneces").type("Production Assistant")
        cy.get(".note-editable.card-block p").type("We are looking for a farmer to oversee our farming operations. The responsibilities of a Farmer include performing physical labor, operating heavy machinery, and supervising farm workers.To be successful as a farmer, you should demonstrate a passion for the outdoors, knowledge of agricultural machinery, and physical stamina. Ultimately, a top-notch Farmer should possess physical strength, good hand-eye coordination, and a keen interest in agriculture.")
        cy.get(".tab-pane.fade.show.active > div:nth-child(7) a").click()
    }
    terms() {
        cy.get("#is_graduate_job").click()
        cy.get("#select2-job_type-container").click()
        cy.get(".select2-results__options li:nth-child(2)").click()

        cy.get("#start_asap").click()
        cy.wait(2000)
        cy.get("#start_asap").click()
        cy.get("#no_start_date").click()
        cy.wait(2000)
        cy.get("#no_start_date").click()
        cy.get("#start_date").type("2022-09-01")

        cy.get("#is_salary_based_exp").click()
        cy.get("#salary").type("1200")
        cy.get("#select2-salarytype-container").click()
        cy.get(".select2-results__options li:nth-child(4)").click()

        //cy.get("#define_hrs_btn").click()
        cy.get("#hours").select("8")
        cy.get("#hours_from").type("10:10")
        cy.get("#hours_till").type("07:10")
        cy.get("#weekend_work_other_options").select("Day Shift", { force: true })

        cy.get("#weekend_rules_btn").click()
        cy.get("#weekend_work_sat").click()
        cy.get("#weekend_work_sat_options").select("2.0 x Standard Pay")
        cy.get("#weekend_work_sun").click()
        cy.get("#weekend_work_sun_options").select("1.5 x Standard Pay")
        cy.get("#weekend_work_bank_holiday").click()
        cy.get("#weekend_work_bank_holiday_options").select("2.0 x Standard Pay")

        cy.get("#add_break_clone").click()
        cy.get(".second-field .ml-3.remove-break").click()
        cy.get("#break_duration_min").select("10")
        cy.get('#is_break_paid').click()


        cy.get(".tab-pane.fade.active.show div:nth-child(6) div:nth-child(2) a").click()
    }
    requirement() {
        cy.get("#advert_qualifications").select("CSCS - Gold Card", { force: true })
        cy.get("#select2-additional_requirment-container").click()
        cy.get(".select2-results__options li:nth-child(2)").click()
        cy.get("#min_year_exp").select("3", { force: true })
        cy.get("#education").type("Bachelors in Computer Science")
        cy.get("#remotetype").select("Flexible")
        cy.get("#cv_required").click()
        cy.get("#is_references_required").click()
        cy.get(".tab-pane div:nth-child(5) div:nth-child(2) a").click()
    }
    about() {
        cy.get("#company").clear()
        cy.get("#company").type("TestingCompany1")
        cy.get("#company_email").clear()
        cy.get("#company_email").type("testuser@mailinator.com")
        cy.get("#company_phone").type("+442589366852")
        cy.get("input[type='file']").attachFile("pic1.jpg")
        cy.get(".tab-pane.fade.active.show div:nth-child(3) div:nth-child(2) a").click()
    }
    share() {
        cy.get("#job-boards-prem tr:nth-child(2) td:nth-child(2) label").click()
        //cy.get("#job-boards-prem tr:nth-child(2) td:nth-child(3) label").click()
        cy.get("#job-boards-prem tr:nth-child(3) td:nth-child(2) label").click()
        //cy.get("#job-boards-prem tr:nth-child(3) td:nth-child(3) label").click()
        cy.get("#job-boards-prem tr:nth-child(4) td:nth-child(2) label").click()
        //cy.get("#job-boards-prem tr:nth-child(4) td:nth-child(3) label").click()

        cy.get("#message-content div:last-child div:last-child #preview-JobBoard-btn").click()
        cy.wait(3000)
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > #advert-preview-modal-body > .new-design > .floating-contact-btn > .container-fluids > .bottom-bar-float > #go_back_preview').click()
    }
}
export class JobApply {
    miscellaneous() {
        cy.get(".navigation ul li:nth-child(3) a[href='/company/manage-jobs']").click()
        cy.get('.job-applications-wrap div:nth-child(6) div:nth-child(2) div:nth-child(1) div:nth-child(1) h5 a').invoke('removeAttr', 'target').click({ force: true })
        cy.wait(3000)
    }
    registration() {
        cy.get("#first_name").type("Adam", { force: true })
        cy.get("#last_name").type("Junior", { force: true })
        cy.get('#user-job-signup-form > :nth-child(2) > #email').type("adamjunior@mailinator.com", { force: true })
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get(".select2-results__options li:nth-child(10)").click()
        cy.get("#Password").type("testing@123456", { force: true })
        cy.get(':nth-child(5) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.wait(1500)
        cy.get(".select2-results__options li:nth-child(5)").click()
        cy.get("#addressgeo").type("random address", { force: true })
        cy.get(':nth-child(7) > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.wait(1500)
        cy.get(".select2-results__options li:nth-child(5)").click()

        cy.get("label[for='qualification_evidence'] input[type='file']").attachFile("pic2.png")
        cy.wait(1500)
        cy.get("label[for='cv'] input[type='file']").attachFile("resume.docx")
        cy.wait(1500)
        cy.get('#user-job-signup-btn').click()
    }
    login() {
        cy.get('#login-job-form > :nth-child(1) > .input-group > #email').type("adamjunior@mailinator.com", { force: true })
        cy.get('.mt-4 > .input-group > #password').type("testing@123456", { force: true })
        cy.get('#user-job-login-btn').click()
        cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > .pt-2 > #apply-job-form > #user-job-apply-btn > strong').click()
    }
}