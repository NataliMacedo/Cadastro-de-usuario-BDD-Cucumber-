Feature: Realizar cadastro de usuário validando a obrigatoriedade dos campos

Background: 
    Given acesso o site
    And  clico no botão de automação
    And  clico no botão formulário
    And  clico no botão de criar novo usuário

Scenario: Realizar cadastro de usuário com sucesso, preenchendo todos os dados
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Maria | Oliveira | mariao@gmail.com | avenida são joão | UFV | QA | feminino | 25 | 
    And  clico no botão de criar 
    Then a mensagem de "cadastrado" com sucesso deve ser exibida
    And  a página de treinamento deve ser exibida
    
Scenario: Realizar cadastro de usuário com sucesso, preenchendo apenas dados obrigatórios
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Pedro | Silva | pedros@gmail.com |  |  |  |  |  | 
    And  clico no botão de criar 
    Then a mensagem de "cadastrado" com sucesso deve ser exibida
    And  a página de treinamento deve ser exibida


Scenario: Realizar cadastro de usuário com sucesso preenchendo dados obrigatórios e editando cadastrado
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Marcos | Silva | marcoss@gmail.com |  |  |  |  |  | 
    And  clico no botão de criar 
    And  edito o cadastro 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Paulo | Souza | paulos@gmail.com | ttt | aaa |qa  | m |  22 | 
    Then a mensagem de "editado" com sucesso deve ser exibida
    And a página de treinamento deve ser exibida

Scenario: Realizar cadastro de usuário com sucesso, preenchendo apenas dados obrigatórios e realizando um segundo cadastro em seguida
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Pedro | Silva | pedros@gmail.com |  |  |  |  |  | 
    And  clico no botão de criar 
    Then realizando um novo cadastro
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Ana | Pereira | anap@gmail.com |  |  |  |  |  | 
    Then a mensagem de "cadastrado" com sucesso deve ser exibida
    And  a página de treinamento deve ser exibida

Scenario: Validar obrigatoriedade do campo nome
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        |  | Oliveira | mariao@gmail.com | avenida são joão | UFMG | Desenvolvedor | feminino | 30 | 
    And  clico no botão de criar 
    Then a mensagem de sucesso não deve ser exibida
    And  a mensagem de erro deve ser exibida no cabeçalho

Scenario: Validar obrigatoriedade do campo sobrenome
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Lucas |  | lucasr@gmail.com | avenida são joão | UFV | QA | masculino | 22 | 
    And  clico no botão de criar 
    Then a mensagem de sucesso não deve ser exibida
    And  a mensagem de erro deve ser exibida no cabeçalho

Scenario: Validar obrigatoriedade do campo email
    When preenchendo todos os dados 
        | nome | ultimo_nome | email | endereco | universidade | profissao | genero | idade |
        | Marina | Ribeiro | | avenida são joão | UFV | QA | feminino | 25 | 
    And  clico no botão de criar 
    Then a mensagem de sucesso não deve ser exibida
    And  a mensagem de erro deve ser exibida no cabeçalho

Scenario: Validar botão Voltar
    When  clico no botão Voltar
    Then  a mensagem de bem vindo deve ser exibida no cabeçalho







