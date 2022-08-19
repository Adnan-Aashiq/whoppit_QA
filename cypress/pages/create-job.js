/// <reference types="cypress"/>

export class CreateJob{
    formFilling(){
        cy.get(".navigation a[href*='/company/post-free-advert']").click()
    }
    

}