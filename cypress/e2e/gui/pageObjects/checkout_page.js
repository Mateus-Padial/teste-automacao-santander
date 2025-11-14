import checkoutElement from "../elements/checkout_element";


const checkoutPage = {

    acessaCheckout() {
        cy.login()
        cy.visit("/checkout")
    },

    validaEnderecoCadastrado() {
        cy.get(checkoutElement.modalEndereco).should('be.visible')
    },

    acessarFormaDePagamento() {
        cy.get(checkoutElement.btnProcessToCheckout).scrollIntoView().should('be.visible').click()
    },

    validarPedidoSucesso() {

        cy.get(checkoutElement.txtOrderPlaced).should('be.visible')
    }

}
export default checkoutPage;