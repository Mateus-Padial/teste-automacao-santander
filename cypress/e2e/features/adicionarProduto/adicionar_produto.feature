Feature: Adicionar Produto ao Carrinho
  Como um usuário do e-commerce
  Quero adicionar um produto ao carrinho
  Para poder realizar uma compra posteriormente

  Background:
    Given que o usuário faca login na página inicial da loja

  Scenario: Adicionar um produto ao carrinho com sucesso
    When o usuário pesquisa um produto disponível
    And clica no botão Adicionar ao carrinho
    Then o produto deve ser exibido no carrinho
    And o carrinho deve mostrar o produto selecionado
