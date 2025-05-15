const carro ={
    marca: "Honda",
    modelo: "Civic",
    ano: 2005,
    cor: "Cinza",
    completo: function(){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo 
    }
}

console.log(carro.completo())