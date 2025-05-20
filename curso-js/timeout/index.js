function ativarContagem(){
    /*
    document.getElementById('tempo').innerHTML = "Começou a contar"
    // Executa apenas uma vez
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML= "Executou o setTimeout"
    }, 3000)
    */

    //Repete a execução continuamente
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML
        var soma = parseInt(cronometro) - 1
        if(soma == 0){
            document.getElementById('tempo').innerHTML = "Tempo esgotado!"
        }else{
            document.getElementById('tempo').innerHTML = soma
        }
        

    }, 1000)
}

function pararContagem(){
    /* 
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "Parou a contagem!"
    */
    clearInterval(tempo)
    
}