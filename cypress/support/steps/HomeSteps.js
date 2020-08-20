/* global Givan, Then, When */

import HomePage from '../pageobjects/HomePage'
import CadastroUsuarioPage from '../pageobjects/CadastroUsuarioPage'

const homePage = new HomePage
const cadastroUsuarioPage = new CadastroUsuarioPage

Given ("acesso o site" , () => {
    homePage.acessarSite();
}) 

And ("clico no botão de automação", () => {
    homePage.clicarBotaoAutomacao();
})

Then ("a mensagem de bem vindo deve ser exibida no cabeçalho" , () => {
    homePage.visualizarMensagem();
})

When  ("o título da página é {string}", (titulo) => {
    homePage.tituloPagina(titulo);
})

Then ("o cabeçalho da página deve ser {string}" , (cabecalho) => {
    homePage.visualizarCabecalho(cabecalho);
})
