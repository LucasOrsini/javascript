function realParaDolar(valorReal, cotacaoDolar){
    return valorReal * cotacaoDolar
}

let real = 15
let dolar = 5.61

let total = realParaDolar(real, dolar)

console.log(`O valor em real é ${real}R$, e em dólar é ${total}$`)