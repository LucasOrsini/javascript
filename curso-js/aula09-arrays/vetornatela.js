let valores =[8, 1, 7, 4, 2, 9]

console.log(valores) // Mostra o vetor completo

for (let pos = 0; pos < valores.length; pos++) { // Percorre o vetor mostrando qual o valor de cada posição
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Outra forma de fazer o mesmo código acima, mas com o for in
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}

