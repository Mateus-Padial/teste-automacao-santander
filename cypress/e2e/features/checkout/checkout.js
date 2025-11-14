var { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import checkoutPage from '../../gui/pageObjects/checkout_page';
import pagamentoPage from '../../gui/pageObjects/pagamento_page';

Given(`que o usuário acessa a página de checkout`, () => {
    cy.login()
    cy.visit("/checkout")
});

When(`o usuário valida os dados de entrega cadastrados`, () => {
   
   checkoutPage.validaEnderecoCadastrado()
});

When(`preenche as informacoes do método de pagamento`, () => {
    checkoutPage.acessarFormaDePagamento()
    pagamentoPage.preencherDadosCartao()
});

When(`confirma a compra`, () => {
    pagamentoPage.confirmarPagamento()
});


Then(`deve ser exibida a mensagem de sucesso`, () => {
    checkoutPage.validarPedidoSucesso()
});

When(`preenche algumas informacoes do método de pagamento`, () => {
    pagamentoPage.preencherDadosCartaoInvalido()
});

Then(`deve ser exibida a mensagem de insucesso`, () => {
   pagamentoPage.validaMensagemPreencherCampo()
});