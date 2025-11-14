const api_functions = {

 const: baseUrl= Cypress.env('baseTrelloapi'),

    enviarGetApiTrello() {

        cy.request({
            method: 'GET',
            url: baseUrl,
        }).as('responseData')

    },

    validaStatusCode200GetApiTrello() {
        cy.get('@responseData').then((response) => {
            expect(response.status).to.eq(200);
        })

    },

    validarStringResponseGetApiTrello(name, list) {
        cy.get('@responseData').then((response) => {
            const valor = response.body.data[list][name];
            cy.log(`O campo "${name}" dentro de "${list}" é: ${valor}`);
            expect(valor).to.exist;
        });

    }


}; export default api_functions