Feature: Checkout Simples
  Como um usuário autenticado
  Quero realizar o checkout preenchendo todos os campos obrigatórios
  Para concluir a compra com sucesso

  Background:
    Given que o usuário acessa a página de checkout

  Scenario: Finalizar checkout um dos campos obrigatórios não preenchidos
    When o usuário valida os dados de entrega cadastrados
    And preenche algumas informacoes do método de pagamento
    And confirma a compra
    Then deve ser exibida a mensagem de insucesso

  Scenario: Finalizar checkout com todos os campos obrigatórios preenchidos
    When o usuário valida os dados de entrega cadastrados
    And preenche as informacoes do método de pagamento
    And confirma a compra
    Then deve ser exibida a mensagem de sucesso

