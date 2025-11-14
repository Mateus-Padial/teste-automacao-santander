import pagamentoElements from "../elements/pagamento_elements"

const nome = Cypress.env('namecard');
const numeroCartao = Cypress.env('numbercard');
const mes = Cypress.env('cvc');
const cvc = Cypress.env('monthvalidate')
const ano = Cypress.env('yearvalidate');

const pagamentoPage = {


    preencherDadosCartao() {

        cy.get(pagamentoElements.inputNameCard).should('be.visible').type(nome)
        cy.get(pagamentoElements.inputCardNumber).should('be.visible').type(numeroCartao)
        cy.get(pagamentoElements.inputCvc).should('be.visible').type(cvc)
        cy.get(pagamentoElements.inputExpirationMonth).should('be.visible').type(mes)
        cy.get(pagamentoElements.inputExpirationYear).should('be.visible').type(ano)

    },

    preencherDadosCartaoInvalido() {

        cy.get(pagamentoElements.inputNameCard).should('be.visible').type(nome)
        cy.get(pagamentoElements.inputCardNumber).should('be.visible').type(numeroCartao)
        cy.get(pagamentoElements.inputCvc).should('be.visible').type(cvc)
        cy.get(pagamentoElements.inputExpirationYear).should('be.visible').type(ano)

    },

    confirmarPagamento() {
        cy.get(pagamentoElements.btnConfirmOrder).should('be.visible').click()

    },

    validaMensagemPreencherCampo() {
        cy.on('window:alert', (texto) => {
            expect(texto).to.eq('Preencha este campo');
        });

    }

}
export default pagamentoPage