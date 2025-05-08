function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value) // Converte o valor para número
        tab.innerHTML = '' // Limpa o select antes de adicionar os novos options
        for(let i=1; i <=10; i++){ 
            let item = document.createElement('option') // Cria um novo elemento option
            item.text = `${n} x ${i} = ${n*i}` // texto do option
            item.value = `tab${i}` // valor do option
            tab.appendChild(item) // Adiciona o option ao select
        }


    }

}