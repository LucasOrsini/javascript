const num = [2, 10, 100, 25, 350, 40, 0, -1]

num.sort((a, b) => a - b) // ordena os números em ordem crescente
// num.sort(function (a, b) {return a - b}) // ordena os números em ordem crescente

console.log(num)

function maiorNum(array){
    return Math.max.apply(null, array) // retorna o maior número do array
}
console.log(maiorNum(num))

function menorNum(array){
    return Math.min.apply(null, array) // retorna o menor número do array
}
console.log(menorNum(num))

const maior40 = num.filter(filtragem)

function filtragem(value, index, array){
    return value >= 40
}
console.log(maior40) // retorna os números maiores ou iguais a 40