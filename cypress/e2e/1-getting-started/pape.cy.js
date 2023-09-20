describe("Dummy API", () => {
    it("Test GET Request", () => {
        let prenom;
        let nom;
        let id;
        cy.request({
            method: 'GET',
            url: 'https://dummyapi.io/data/v1/user',
            headers: {
                'Content-Type': 'text/html',
                'app-id': '61f4248c9d9bb038eaf0c6c0',
            },
        })
            .then((response) => {
                expect(response.body.data[0])
                prenom = response.body.data[0].firstName;
                nom = response.body.data[0].lastName;
                id = response.body.data[0].id;
                cy.log(prenom)
                cy.visit("https://testqa.purse.tech/fake-contact")
                cy.get("#gender").select("Homme")
                cy.get("#first-name").type(prenom)
                cy.get("#last-name").type(nom)
                cy.get("#company").type("Agiltoo")
                cy.get("#phone").type('071523335')
                cy.get("#phone").type('65561561513312')
                cy.get("#phone").then(()=>{
                    expect(nom).to.be.equal(prenom)
                })
            })
            cy.request({
                method: 'GET',
                url: 'https://dummyapi.io/data/v1/post:',
                headers: {
                    'Content-Type': 'text/html',
                    'app-id': '61f4248c9d9bb038eaf0c6c0',
                },
            })
    })
})