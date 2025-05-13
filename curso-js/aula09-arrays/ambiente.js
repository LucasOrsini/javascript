let num = [5,4,6]
num.sort() // Ordena os números do vetor em ordem crescente
num[3] = 7 // Adiciona o número 7 na posição 3
num.push(9) // Adiciona o número 9 na última posição
console.log(`Meu vetor é: ${num}`)

console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostra o primeiro elemento do vetor

console.log(`O vetor tem ${num.length} posições`) // Mostra quantidade de elemtentos no vetor

console.log(`O número 7 está na posição ${num.indexOf(7)}`) // Mostra a posição do número 7 no vetor, se não encontrar retorna -1
console.log(`O número 8 está na posição ${num.indexOf(8)}`) 