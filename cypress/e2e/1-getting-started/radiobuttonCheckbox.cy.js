describe('check ui elements',()=> {

    it('test checkbox and other element',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //select radio button
        cy.get('input#male').check().and('be.checked')
        cy.get('input#female').check().and('not.be.checked')
    })
})