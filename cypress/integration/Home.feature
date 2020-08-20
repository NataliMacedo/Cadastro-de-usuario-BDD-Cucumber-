Feature: Validar url e acesso automatizado

Background: 
    Given acesso o site

Scenario: Realizar validação da url
    When  o título da página é "Automação com Batista"
    Then  o cabeçalho da página deve ser "Site para Automação"
     

Scenario: Realizar validação de acesso de modo automatizado
    When  clico no botão de automação
    Then  a mensagem de bem vindo deve ser exibida no cabeçalho