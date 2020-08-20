/* global Givan, Then, When */

import CadastroUsuarioPage from '../pageobjects/CadastroUsuarioPage'
import HomePage from '../pageobjects/HomePage'

const cadastroUsuarioPage = new CadastroUsuarioPage
const homePage = new HomePage


And ("clico no botão formulário", () => {
    homePage.clicarBotaoFormulario();
})

And ("clico no botão de criar novo usuário", () => {
    homePage.clicarBotaoCriarUsuario();
})

When ("clico no botão Voltar", () => {
    cadastroUsuarioPage.clicarBotaoVoltar();
})

When ('preenchendo todos os dados', (datatable) => {
    cadastroUsuarioPage.preencherDados(datatable);
})

And ('clico no botão de criar', () => {
    cadastroUsuarioPage.clicarBotaoCriar();
})

And ("a mensagem de erro deve ser exibida no cabeçalho" , () => {
    cadastroUsuarioPage.visualizarMsgErro();
})

And ("a página de treinamento deve ser exibida" , () => {
    cadastroUsuarioPage.visualizarPaginaTreinamento();
})

And ("edito o cadastro" , (datatable) => {
    cadastroUsuarioPage.editarCadastro(datatable);
})

Then ("a mensagem de {string} com sucesso deve ser exibida" , (tipo) => {
    cadastroUsuarioPage.visualizarMsgSucesso(tipo);
})

Then ("a mensagem de sucesso não deve ser exibida" , () => {
    cadastroUsuarioPage.naoVisualizarMsgSucesso();
})

Then ("realizando um novo cadastro" , (datatable) => {
    cadastroUsuarioPage.realizarNovoCadastro();
    cadastroUsuarioPage.preencherDados(datatable);
    cadastroUsuarioPage.clicarBotaoCriar()
})

