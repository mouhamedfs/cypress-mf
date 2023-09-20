export class TodoPage {
    navigate () {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    }
    setUser(username,password) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', {timeout : 1000}).type(password)
    }
    validateTodoText() {
        cy.get('.oxd-button').click()
    }
}