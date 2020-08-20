class HomeElements {

    botaoAutomacao = () => { return '[href="/treinamento/home"]' }
    cabecalho = () => { return 'body > :nth-child(2) > .header' }
    msgCabecalho = () => { return '.orange-text' }
    botaoFormulario = () => {return ':nth-child(1) > .collapsible-header'}
    botaoCriarUsuario = () => { return '.active > .collapsible-body > ul > :nth-child(1) > a' }
   
}

export default HomeElements;