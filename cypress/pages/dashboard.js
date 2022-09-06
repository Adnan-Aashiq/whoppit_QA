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
}