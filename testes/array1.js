const compras1 = ["Banana", "Maçã", "Pera", "Uva", "Laranja"]
const compras2 = ["Carne", "Frango", "Peixe", "Linguiça"]
const compras3 = ["Arroz", "Feijão", "Macarrão", "Farinha"]

compras1.push("Melancia") // adiciona um elemento no final

console.log(compras1)

compras1.pop() // remove o último elemento
console.log(compras1)

compras1.shift() // remove o primeiro elemento
console.log(compras1)

compras1.unshift("Abacaxi") // adiciona um elemento no início
console.log(compras1)

// delete compras[1] // remove o elemento na posição 1 mas coloca "undefined" no lugar
console.log(compras1)

compras1.splice(2, 1) // remove o elemento na posição 2 e não coloca "undefined" no lugar
console.log(compras1)

compras1.splice(1, 0, "Morango", "Limão") // adiciona os elementos na posição 1 e a seguinte
console.log(compras1)

const superCompra = compras1.concat(compras2, compras3) // concatena os três arrays
console.log(superCompra)

const frutas = superCompra.slice(0, 6) // pega os elementos do índice 0 ao 5

console.log(frutas)