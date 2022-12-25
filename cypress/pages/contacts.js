import { JobAds } from "../pages/jobAds"
import { CreateJob_Company } from "../pages/job"

const createjobcompanyobj = new CreateJob_Company()
const jobadsobj = new JobAds()

export class Contacts {
    contacts_home() {
        cy.wait(10000)
        cy.get('nav  > :nth-child(1) > :nth-child(1)').click()
    }
    sms() {
        jobadsobj.bulk_message()
    }
    add_contact() {
        cy.get('nav  > :nth-child(1) > :nth-child(1)').realHover()
        cy.get("a[href*='add-contact']").click({ force: true })

        const names = ["Abir", "Arham", "Sadi", "Labi", "Mahdi", "Isaias Guidry", "Mustafa Beattie", "Maya Valenzuela", "Vernon Shull", "Shelby Lombardi", "Maura Braxton", "Amiya McDaniel", "Kasey Sander", "Andrew Horvath", "Daron Nixon"]
        const numbers = ["+447299181232", "+447456185040", "+447457110701", "+447104995687", "+447911034097", "+447457135173", "+447911889240", "+447159790014", "+447799649398", "+447911289115", "+447457467007", "+447700011795", "+447451051133", "+447536175992", "+447700194942", "+447911828386", "+447457922225", "+447700067068", "+447450097746", "+447911055803"]
        const randname = names[Math.floor(Math.random() * names.length)];
        const randnum = numbers[Math.floor(Math.random() * numbers.length)];
        cy.get('#forename').type(randname)
        cy.get('#surname').type(randname)
        cy.get(':nth-child(2) > :nth-child(1) > #email').type(randname + '@gmail.com')
        cy.get('#contact_number').type(randnum)
        cy.get('#Password').type('.James@789')
        cy.get('#postcode').type('45632')
        cy.get('#industries option').then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length+1);
            // select option from drop down
            cy.get('#industries').select(`${$elements[randomOption].innerText}`, { force: true });
        })

        cy.get(':nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        createjobcompanyobj.random_dd()
        cy.get("select[name='qualifications'] option").then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length+1);
            // select option from drop down
            cy.wait(3000)
            cy.get("select[name='qualifications']").select(`${$elements[randomOption].innerText}`, { force: true });
        })
        cy.get('#date_of_birth').type("2000-09-01")
        cy.get("select[name='salary_type'] option").then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length+1);
            cy.log(randomOption)
            // select option from drop down
            cy.get("select[name='salary_type']").select(`${$elements[randomOption].innerText}`, { force: true });
        })
        cy.get('#expected_salary').type('2000')
        cy.get("select[name='experience'] option").then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length+1);
            cy.log(randomOption)
            // select option from drop down
            cy.get("select[name='experience']").select(`${$elements[randomOption].innerText}`, { force: true });
        })
        cy.get("select[name='job_type'] option").then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length+1);
            cy.log(randomOption)
            // select option from drop down
            cy.get("select[name='job_type']").select(`${$elements[randomOption].innerText}`, { force: true });
        })
        cy.get("#add-contact-form div:nth-child(8) div:first-child input[type='file']").attachFile('ZarrarResume.pdf')
        cy.get("#add-contact-form div:nth-child(8) div:last-child input[type='file']").attachFile('pic2.png')

        //cy.get('#addressgeo').type('Bicester Village, Pingle Drive, Bicester, UK')
        // cy.get('#addressTwo').type()
        // cy.get('#town').type()
        // cy.get('#country').type()
        // cy.get('#example-textarea').type()
        cy.get('#add-contact-form > :nth-child(13) button').click()
    }
}