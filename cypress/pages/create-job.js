/// <reference types="cypress"/>

export class CreateJob{
    basic(){
        cy.get("#select2-number_of_hires-container").type('2' + "{enter}")
        cy.get("#select2-advert_job_title-container").click()
        cy.get(".select2-results__options li:nth-child(1) .select2-results__options.select2-results__options--nested li:nth-child(1)").click()
        cy.get("#postcode").type("123456",{force: true})
        cy.get(":nth-child(5) > .form-group > .form-group-inner > .tw-items-center").type("no digs" + "{enter}")
        cy.get("#select2-advert_industry-container").click()
        cy.get(".select2-results__options li:nth-child(2)").click()
        cy.get("#addressgeo_places").type("House no 3 Street no 7 New York city",{force: true})
        cy.get("#job_refreneces").type("Production Assistant")
        cy.get(".note-editable.card-block p").type("We are looking for a farmer to oversee our farming operations. The responsibilities of a Farmer include performing physical labor, operating heavy machinery, and supervising farm workers.To be successful as a farmer, you should demonstrate a passion for the outdoors, knowledge of agricultural machinery, and physical stamina. Ultimately, a top-notch Farmer should possess physical strength, good hand-eye coordination, and a keen interest in agriculture.")
        cy.get(".tab-pane.fade.show.active > div:nth-child(7) a").click()
    }
    terms(){
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

        cy.get("#define_hrs_btn").click()
        cy.get("#hours").select("8")
        cy.get("#hours_from").type("10:10")
        cy.get("#hours_till").type("07:10")
        cy.get("#weekend_work_other_options").select("Day Shift",{force:true})

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
        // cy.get("")
        // cy.get("")
        // cy.get("")
        // cy.get("")



    }
    

}