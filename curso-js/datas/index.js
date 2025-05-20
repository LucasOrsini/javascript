let data = new Date()

//Pega o ano atual com 4 dígitos
let ano = data.getFullYear()
console.log(`Ano atual: ${ano}`)

//Pega o mês atual - de 0 a 11
let mes = data.getMonth()
console.log(mes)
//Mês no formato escrito
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesEscrito = meses[data.getMonth()]
console.log(`Mês atual: ${mesEscrito}`)	

//Dia do mês - de 1 a 31
let diaMes = data.getDate()
console.log(`Dia do mês: ${diaMes}`)

//Dia da semana - de 0 a 6
let diaSemana = data.getDay()
console.log(diaSemana)
//Dia da semana no formato escrito
const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
let diaSemanaEscrito = dias[data.getDay()]
console.log(`Dia da semana: ${diaSemanaEscrito}`)

//Hora - de 0 a 23
let hora = data.getHours()
console.log(`Hora: ${hora}`)

//Minuto - de 0 a 59
let minuto = data.getMinutes()
console.log(`Minuto: ${minuto}`)

//Segundo - de 0 a 59
let segundo = data.getSeconds()
console.log(`Segundo: ${segundo}`)

//Milissegundo - de 0 a 999
let milissegundo = data.getMilliseconds()
console.log(`Milissegundo: ${milissegundo}`)

//Fuso horário - diferença em minutos
let fusoHorario = data.getTimezoneOffset()
console.log(`Fuso horário: ${fusoHorario}`)

//Data no formato brasileiro dd/mm/aaaa
let dataBR = data.toLocaleDateString('pt-BR')
console.log(`Data no formato brasileiro: ${dataBR}`)

//Comparar datas
var hoje = new Date()
var vencimento = new Date(2025, 4, 12)

if(hoje > vencimento){
    console.log('A data de vencimento já passou')
}else{
    console.log('A data de vencimento ainda não passou')
}

//Diferença entre datas
var dataInicial = new Date
var dataFinal = new Date(2025, 5, 21)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))
console.log(`Diferença em dias: ${diferencaDias}`)