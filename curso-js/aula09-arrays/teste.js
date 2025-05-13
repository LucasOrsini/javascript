let numeros = [1, 4, 7, 10, 13, 12]
numeros[6] = 14 // Adiciona o número 14 na posição 6
numeros.push(20) // Adiciona o número 15 na última posição

for(let pos in numeros){ // Percorre o vetor mostrando qual o valor de cada posição
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`) 

}

console.log(`O vetor tem ${numeros.length} posições`) // Mostra quantidade de elemtentos no vetor

let pos = numeros.indexOf(12) // Mostra onde o valor digitado está
if(pos == -1){
    console.log(`O valor digitado não se encontra no vetor`)
}else{
    console.log(`O valor digitado está na posição ${pos}`)
}
