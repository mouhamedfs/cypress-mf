describe('check ui elements',()=> {

    it('test checkbox and other element',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //select radio button
        cy.get('input#male').check().and('be.checked')
        cy.get('input#female').check().and('not.be.checked')

        //unselecting checkbox
        cy.get('input#male').uncheck().should('be.visible')

        //select the first element of multiple checkbox
        cy.get('input.flex-input').first().check().should('be.checked')
    })
})