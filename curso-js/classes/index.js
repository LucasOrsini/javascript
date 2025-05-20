class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina(){
        return this.modelo + " buzinou: biiiiii"
    }
    toString() {
        return `${this.marca}, ${this.modelo}, (${this.ano})`
    } // Por padrão, quando você tenta exibir um objeto em uma string (por exemplo, usando ${objeto}), o JavaScript retorna [object Object]. Ao criar um método toString() personalizado, você define como o objeto será representado como texto.
}

const civic = new Carro("Honda", "Civic", 2005)
const onix = new Carro ("Chevrolet", "Onix", 2015)
const polo = new Carro ("Wolkswagen", "Polo", 2020)

onix.ano = 2016 // Para alterar uma propriedade

let carro = document.getElementById('carro')

carro.innerHTML = `Opções de veículos: <br><br> ${civic} <br> ${onix} <br> ${polo}`

console.log(onix.buzina())
console.log(civic.buzina())