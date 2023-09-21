describe('tests sur les dropdown',()=>{
    it.skip('creation de la partie handle dropdown',()=>{

        cy.visit('https://testqa.purse.tech/fake-contact')
        cy.get('#gender').select('Homme').should('have.value','male')
        cy.get('#first-name').type('famara')

        //autocompletion check static dropdowe
        //cy.get('.suggestion-title').contains('new Delhi')
    })
    it('test on google dynamic dropdown',()=>{
        cy.visit('https://www.google.fr/')
        cy.wait(3000)
        cy.get('#APjFqb').type('cypress automation')
        //itération dans un élement avec plusieurs html dom
        cy.get('#ERWdKc > .wM6W7d > span').each(($el,index,$list) => {

                if($el.text() === 'cypress automation' ) {
                    cy.wrap($el).click()
                }
        })
        cy.get('#APjFqb').should('have.value','cypress automation')
    })
})