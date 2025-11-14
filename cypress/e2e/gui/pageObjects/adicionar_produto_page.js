import element from '../elements/adicionar_produto_elements'
const product = 'Polo'

const adicionarProdutoPage = {


    pesquisarProduto() {
        cy.visit('/products')
        cy.get(element.searchInput).type(product)
        cy.get(element.searchButton).click()

    },

    adicionarProdutoNoCarrinho() {
        cy.get(element.productImage).should('be.visible')
        cy.get(element.productInfo).should('contain.text', product)
        cy.get(element.addToCartButton).should('be.visible').click();
        cy.get(element.modalTitle).should('be.visible').and('include.text', 'Added!')
        cy.get(element.cartIcon).should('be.visible');
    },

    acessaCarinho(){
        cy.visit("/view_cart")
    },


    validarProdutoSelecionado(){
        cy.get(element.cartInfo).should('be.visible').and('include.text', product)

    }

}
export default adicionarProdutoPage