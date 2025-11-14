Feature: Teste da API do Trello

  Scenario: Enviar um GET para a API do Trello
    Given eu envio um GET para a API
    When o status code deve ser 200
    Then o campo "name" da estrutura "list" deve ser exibido