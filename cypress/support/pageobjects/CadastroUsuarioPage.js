/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

import CadastroUsuarioElements from '../elements/CadastroUsuarioElements'
const cadastroUsuarioElements = new CadastroUsuarioElements

class CadastroUsuarioPage {

    clicarBotaoVoltar(){
        cy.get(cadastroUsuarioElements.botaoVoltar()).click()
    }

    preencherDados(datatable){
        datatable.hashes().forEach(element => {
            if((element.nome) != (''))
                cy.get(cadastroUsuarioElements.campoNome()).type(element.nome)
            if((element.ultimo_nome) != (''))
                cy.get(cadastroUsuarioElements.campoUltimoNome()).type(element.ultimo_nome)
            if((element.email) != (''))
                cy.get(cadastroUsuarioElements.campoEmail()).type(element.email)
            if((element.endereco) != (''))
                cy.get(cadastroUsuarioElements.campoEndereco()).type(element.endereco)
            if((element.universidade) != (''))
                cy.get(cadastroUsuarioElements.campoUniversidade()).type(element.universidade)
            if((element.profissao) != (''))
                cy.get(cadastroUsuarioElements.campoProfissao()).type(element.profissao)
            if((element.genero) != (''))
                cy.get(cadastroUsuarioElements.campoGenero()).type(element.genero)
            if((element.idade) != (''))
                cy.get(cadastroUsuarioElements.campoIdade()).type(element.idade)
        });
    }

    clicarBotaoCriar(){
        cy.get(cadastroUsuarioElements.botaoCriar()).click()
    }

    visualizarMsgSucesso(tipo){
        if((tipo) == ('cadastrado'))
            cy.get(cadastroUsuarioElements.msgCabecalhoSucesso()).should('contain', 'Usuário Criado com sucesso')
        if((tipo) == ('editado'))
            cy.get(cadastroUsuarioElements.msgCabecalhoSucesso()).should('contain', 'Seu Usuário foi Atualizado!')
    }
    
    visualizarMsgErro(){
        cy.get(cadastroUsuarioElements.msgCabecalhoErro()).should('exist')
    }

    naoVisualizarMsgSucesso(){
        cy.get(cadastroUsuarioElements.msgCabecalhoSucesso()).should('not.exist')
    } 

    visualizarPaginaTreinamento(){
        cy.get(cadastroUsuarioElements.botaoSucessoVoltar()).click()
        cy.get(cadastroUsuarioElements.menuTreinamento()).click()
        cy.get(homeElements.msgCabecalho()).should('have.text','Bem vindo ao Site de Automação do Batista.')
    }

    editarCadastro(datatable){
        cy.get(cadastroUsuarioElements.botaoSucessoEditar()).click()
        datatable.hashes().forEach(element => {
            if((element.nome) != (''))
                cy.get(cadastroUsuarioElements.campoNome()).clear().type(element.nome)
            if((element.ultimo_nome) != (''))
                cy.get(cadastroUsuarioElements.campoUltimoNome()).clear().type(element.ultimo_nome)
            if((element.email) != (''))
                cy.get(cadastroUsuarioElements.campoEmail()).clear().type(element.email)
            if((element.endereco) != (''))
                cy.get(cadastroUsuarioElements.campoEndereco()).clear().type(element.endereco)
            if((element.universidade) != (''))
                cy.get(cadastroUsuarioElements.campoUniversidade()).clear().type(element.universidade)
            if((element.profissao) != (''))
                cy.get(cadastroUsuarioElements.campoProfissao()).clear().type(element.profissao)
            if((element.genero) != (''))
                cy.get(cadastroUsuarioElements.campoGenero()).clear().type(element.genero)
            if((element.idade) != (''))
                cy.get(cadastroUsuarioElements.campoIdade()).clear().type(element.idade)
        });
        cy.get(cadastroUsuarioElements.botaoCriar()).click()
    }

    realizarNovoCadastro(){
        cy.get(cadastroUsuarioElements.botaoSucessoVoltar()).click()
        cy.get(cadastroUsuarioElements.botaoNovoUsuario()).should('have.text', 'Novo Usuário').click()
    }
}

export default CadastroUsuarioPage;