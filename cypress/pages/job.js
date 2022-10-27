///<reference types="cypress"/>
///<reference types="cypress-iframe" />


export class CreateJob_Company {
    basic() {
        let num = Math.floor(Math.random() * 10 + 1);

        //Number of Hires
        cy.get('#number_of_hires').select('5', { force: true });

        //Industry
        cy.get("#select2-advert_industry-container").click()
        cy.get(".select2-results__options li:nth-child(" + num + ")").click()

        //Job Title
        cy.get("#select2-advert_job_title-container").click()
        cy.get("z").click()

        //Location
        cy.get(':nth-child(2) > :nth-child(2) > .form-group-inner > .tw-items-center > .right-field > .field-wrap > .select2 > .selection > .select2-selection').click()
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("new")
        cy.wait(1000)
        cy.get(".select2-results__options li:nth-child(" + num + ")").click()

        //Postcode
        // cy.get("#postcode").type("123456", { force: true })

        //Your Job Reference
        cy.get("#job_refreneces").type("Production Assistant")

        //Generic Job Details field
        //cy.get(":nth-child(5) > .form-group > .form-group-inner > .tw-items-center").type("no digs" + "{enter}")

        //Description
        // cy.get(".note-editable.card-block p").type("We are looking for a farmer to oversee our farming operations. The responsibilities of a Farmer include performing physical labor, operating heavy machinery, and supervising farm workers.")

        //Next Button
        cy.get(".tab-pane.fade.show.active > div:nth-child(7) a").click()
    }
    terms() {
        let num = Math.floor(Math.random() * 10 + 1);

        //This is a Graduate Job Check
        cy.get("#is_graduate_job").click()

        //Job Type
        cy.get("#select2-job_type-container").click()
        cy.get(".select2-results__options li:nth-child(" + num + ")").click()

        //ASAP Check
        cy.get("#start_asap").click()
        cy.wait(1000)
        cy.get("#start_asap").click()

        //No Planned Start Date Check
        cy.get("#no_start_date").click()
        cy.wait(1000)
        cy.get("#no_start_date").click()

        //Start Date
        cy.get("#start_date").type("2022-09-01")

        //Salary Based on experience Check
        cy.get("#is_salary_based_exp").click()

        //Salary 
        cy.get("#salary").type("1200")
        cy.get("#select2-salarytype-container").click()
        cy.get(".select2-results__options li:nth-child(4)").click()

        //Define Hours Button
        // cy.get("#define_hrs_btn").dblclick()
        // cy.get("#terms-content div:nth-child(3) div:first-child .tw-flex.tw-gap-x-2.tw-justify-between button").then(($element) => {
        //     var classValue = $element.attr('class')
        //     var finalval = classValue.split('-').pop()
        //     cy.log(finalval)
        //     if (finalval === 'plus') {
        //         cy.get("#define_hrs_btn").click()
        //     }
        //     else if (finalval === 'minus') {
        //     }
        //     cy.get("#hours").select("8")
        //     cy.get("#hours_from").type("10:10")
        //     cy.get("#hours_till").type("07:10")
        //     cy.get("#weekend_work_other_options").select("Day Shift", { force: true })
        // })

        //Define Weekend Work Button
        // cy.get("#weekend_rules_btn").click()
        // cy.get("#weekend_work_sat").click()
        // cy.get("#weekend_work_sat_options").select("2.0 x Standard Pay")
        // cy.get("#weekend_work_sun").click()
        // cy.get("#weekend_work_sun_options").select("1.5 x Standard Pay")
        // cy.get("#weekend_work_bank_holiday").click()
        // cy.get("#weekend_work_bank_holiday_options").select("2.0 x Standard Pay")

        //Breaks
        cy.get("#add_break_clone").click()
        cy.get(".second-field .ml-3.remove-break").click()
        cy.get("#break_duration_min").select("10")
        cy.get('#is_break_paid').click()

        //Next Button
        cy.get(".tab-pane.fade.active.show div:nth-child(6) div:nth-child(2) a").click()
    }
    requirement() {
        cy.get("#advert_qualifications").select("CSCS - Gold Card", { force: true })
        cy.get("#additional_requirment").select("Must have VISA", { force: true })
        cy.get("#min_year_exp").select("3", { force: true })
        cy.get("#education").type("Bachelors in Computer Science")
        cy.get("#remotetype").select("Flexible")
        cy.get("#cv_required").click()
        cy.get("#is_references_required").click()
        cy.get("#requirement-content div:nth-child(6) div:nth-child(2) a").click()
    }
    about() {
        cy.get("#company").clear()
        cy.get("#company").type("TestingCompany1")
        cy.get("#company_email").clear()
        cy.get("#company_email").type("testuser@mailinator.com")
        cy.get("#company_phone").clear()
        cy.get("#company_phone").type("+442589366852")
        cy.get("#about-content input[type='file']").attachFile("pic1.jpg")
        cy.get(".tab-pane.fade.active.show div:nth-child(3) div:nth-child(2) a").click()
    }
    jobBoards(job_board) {
        if (job_board == 'TOTALJOBS') {
            cy.get("#job-boards-prem tr:nth-child(2) td:nth-child(2) label").click()
        }
        else if (job_board == 'CV_LIB') {
            cy.get("#job-boards-prem tr:nth-child(3) td:nth-child(2) label").click()
        }
        else if (job_board == 'REED') {
            cy.get("#job-boards-prem tr:nth-child(4) td:nth-child(2) label").click()
        }
        cy.get("#message-content div:last-child div:last-child a[href='#message-tab']").click()
    }
    socialMedia() {
        cy.get("#social_textarea").clear()
        cy.get('#share-content div:last-child div:last-child #preview-JobBoard-btn').click()
    }
    jobPostBilling() {
        cy.wait(3000)
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > #advert-preview-modal-body > .new-design > .floating-contact-btn > .container-fluids > .bottom-bar-float > #post_a_advert').click({ force: true })
        
        cy.wait(5000)
        cy.get('.modal-dialog > #modal_content > .modal-body').eq(0).as('modal_locator')
        cy.get('@modal_locator').parent().parent().parent().invoke('attr','class').then(val=>{
            if(val.includes('show')){
                cy.get("iframe[name*='__privateStripeFrame']").eq(0).iframe(() => {
                    cy.get('#root .ElementsApp div:first-child div:nth-child(2) span:nth-child(1)').type('424242424242424242424242424')
                })
                cy.get('#premium_plan_pay_btn').click()
            }
            else{
                return
            }
        })
    }

}

export class JobApply_Company {
    miscellaneous() {
        cy.get(".navigation ul li:nth-child(3) a[href='/company/manage-jobs']").click()
        cy.get('.job-applications-wrap div:nth-child(7) div:nth-child(2) div:nth-child(1) div:nth-child(1) h5 a').invoke('removeAttr', 'target').click({ force: true })
        cy.wait(3000)
    }
    registration() {
        cy.get("#first_name").type("Adam", { force: true })
        cy.get("#last_name").type("Junior", { force: true })
        let num = Math.floor(Math.random() * 1000);
        cy.get('#user-job-signup-form > :nth-child(2) > #email').type("adamjunior" + num + "@mailinator.com", { force: true })
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
export class JobApply_User {
    applyForjob() {
        cy.get("#recent-job-invites div:nth-child(5) div:nth-child(1) div:nth-child(1) div:nth-child(3) ul li ul a").should('have.attr', 'target', '_blank').invoke('removeAttr', 'target').click({ force: true })
        //cy.get('.container-fluid > .job-preview-wrap > .card > .card-body > .preview-form-details > .detail-listing > .pt-3 > .actions-div > .content-wrap > .pt-2 > #apply-job-form > #user-job-apply-btn').click()

    }
}
export class JobApplications {
    sms() {
        cy.get(".navigation ul li:nth-child(2) a[href='/company/recent-applicants']").click({force:true})
        cy.get("#recent_candiadte tbody tr:nth-child(1) td:last-child a:nth-child(1)").click()
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > .modal-body > #chat-form-global > :nth-child(1) > #messageform-global').type("Thank you for taking the time to apply for our [title] position. Below is a small test we would like you to tackle which should take no more than 20 minutes. This will help us to understand the way you work and also give us some insight into your skills.")
        cy.get('[style="padding-right: 5px; display: block;"] > .modal-dialog > .modal-content > .modal-body > #chat-form-global > :nth-child(2) > .btn').click()
    }
}