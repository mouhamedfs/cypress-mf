import {TodoPage} from "../../page-objects/todo-page";

describe('todo actions', ()=> {

    it('should navigate to Orange Hrm', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("eq",'OrangeHRM')
        cy.get('.orangehrm-login-branding')
    })
    it('Test2', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should("eq",'OrangeHRM')
        cy.get("[name=\"username\"]").type("admin")
        cy.get("input[name=\"password\"]").type("admin123")
        cy.get("button[type=\"submit\"]").click()
        cy.get(".oxd-topbar-header-breadcrumb").contains('Dashboard')

        cy.xpath("//span[@class=\"oxd-text oxd-text--span oxd-main-menu-item--name\"]").should('have.length',12)

    })
})

