function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var msg2 = document.getElementById('msg2')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    msg2.innerHTML = 'Bom Dia!'
    img.src = 'imagens/manha.png'
    document.body.style.background = '#fbe9d1'
}else if(hora >= 12 && hora <= 18) {
    msg2.innerHTML = 'Boa Tarde!'
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#b9846f'

}else{
    msg2.innerHTML = 'Boa Noite!'
    img.src = 'imagens/noite.png'
    document.body.style.background = '#193741'

}

}