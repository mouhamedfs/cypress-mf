describe('Assertions', ()=> {

    it('should test the assertions' ,() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','https')
            .and('not.contain','moomo')
        cy.title().should('include','range')
            .and("eq",'OrangeHRM')

        cy.get('input[name=\"username\"]').should('be.visible')
        cy.get('input[name=\"username\"]').type('Admin')
        cy.get('input[name=\"username\"]').should('have.value','Admin')
        cy.get('input[name=\"username\"]').should('not.contain','123')
    })

    it('explicit assertions', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[name=\"username\"]").type("Admin")
        cy.get("input[name=\"password\"]").type("admin123")
        cy.get("button[type=\"submit\"]").click()
        cy.get("input[name=\"password\"]").should('be.visible')



        let nametoTest = 'Juan Collings'

        cy.get('.oxd-userdropdown-name').then((name)=>{
            let actualname = name.text()
            //BDD style
            expect(actualname).to.equal(nametoTest)

            //TDD style
            assert.equal(actualname,nametoTest)
        })

    })


})