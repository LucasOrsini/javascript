/* var hora = 1
console.log("A hora é: " + hora)

if (hora > 0 && hora < 6){
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else if (hora < 24) {
    console.log("Boa noite!")
} */ 
// Sem comando do horário atual, apenas para teste

var agora = new Date()
var hora = agora.getHours()
console.log("A hora é: " + hora)

if (hora > 0 && hora < 6){
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else if (hora < 24) {
    console.log("Boa noite!")
} 
