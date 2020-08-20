/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

class HomePage {
    
    acessarSite(){
        cy.visit('https://automacaocombatista.herokuapp.com')
    }

    clicarBotaoAutomacao(){
        cy.get(homeElements.botaoAutomacao()).click()
    }

    visualizarMensagem(){
        cy.get(homeElements.msgCabecalho()).should('have.text','Bem vindo ao Site de Automação do Batista.')
    }

    tituloPagina(titulo){
        cy.title().should('be.equal', titulo)
    }

    visualizarCabecalho(cabecalho){
        cy.get(homeElements.cabecalho()).should('have.text', cabecalho)
    }

    clicarBotaoFormulario(){
        cy.get(homeElements.botaoFormulario()).click()
    }

    clicarBotaoCriarUsuario(){
        cy.get(homeElements.botaoCriarUsuario()).click()
    }
}

export default HomePage;