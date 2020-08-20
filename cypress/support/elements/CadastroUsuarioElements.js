class CadastroUsuarioElements {

    campoNome = () => {return '#user_name'}
    campoUltimoNome = () => {return '#user_lastname'}
    campoEmail = () => {return '#user_email'}
    campoEndereco = () => {return '#user_address'}
    campoUniversidade = () => {return '#user_university'}
    campoProfissao = () => {return '#user_profile'}
    campoGenero = () => {return '#user_gender'}
    campoIdade = () => {return '#user_age'}
    botaoCriar = () => { return '.actions > input'}
    botaoVoltar = () => { return '.waves-light'}
    msgCabecalhoSucesso = () => { return '.row.center' }
    msgCabecalhoErro = () => { return '#error_explanation > ul > li'}
    botaoSucessoVoltar = () => { return '.red'}
    botaoSucessoEditar = () => { return '.col > .blue'}
    menuTreinamento = () => { return '.col > [href="/treinamento/home"]'}
    botaoNovoUsuario = () => { return '.waves-light'}
}

export default CadastroUsuarioElements;

