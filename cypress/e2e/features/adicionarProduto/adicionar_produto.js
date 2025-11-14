var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

import adicionarProduto from '../../gui/pageObjects/adicionar_produto_page';

Given(`que o usuário faca login na página inicial da loja`, () => {
     cy.login()
});

When(`o usuário pesquisa um produto disponível`, () => {
    adicionarProduto.pesquisarProduto()
});

When(`clica no botão Adicionar ao carrinho`, () => {
    adicionarProduto.adicionarProdutoNoCarrinho()
});

Then(`o produto deve ser exibido no carrinho`, () => {
    adicionarProduto.acessaCarinho()
});

Then(`o carrinho deve mostrar o produto selecionado`, () => {
   adicionarProduto.validarProdutoSelecionado()
});