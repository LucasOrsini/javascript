function buscarCEP(){
    let campoTexto = document.getElementById('cep').value

    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto + '/json/')
    ajax.send()

ajax.onload = function() {
    document.getElementById('texto').innerHTML = this.responseText
    let obj = JSON.parse(this.responseText)
    let logradouro = obj.logradouro
    let cidade = obj.localidade
    let estado = obj.uf

    document.getElementById('texto').innerHTML = "Rua: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado
    
    
}
}