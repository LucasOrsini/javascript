let num = [5,4,6]
num.sort() // Ordena os números do vetor em ordem crescente
num[3] = 7 // Adiciona o número 7 na posição 3
num.push(9) // Adiciona o número 9 na última posição
console.log(`Meu vetor é: ${num}`)

console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostra o primeiro elemento do vetor

console.log(`O vetor tem ${num.length} posições`) // Mostra quantidade de elemtentos no vetor

for(let pos = 0; pos < num.length; pos++) { // Laço for para percorrer o vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // Mostra a posição e o valor do vetor
}