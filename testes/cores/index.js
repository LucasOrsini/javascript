function diaSemana() {
    const dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];
    const dia = new Date().getDay();
    const p = document.getElementById("paragrafo");

    if (p) {
        p.innerHTML = `Hoje é ${dias[dia]}`;
    } else {
        console.warn('Elemento com id "paragrafo" não encontrado.');
    }
}

/* function diaSemana(){
    let dia = new Date().getDay()
    let p = document.getElementById("paragrafo")

    switch(dia){
        case 0:
            p.innerHTML = "Hoje é domingo"
            break
        case 1:
            p.innerHTML = "Hoje é segunda-feira"
            break
        case 2:
            p.innerHTML = "Hoje é terça-feira"
            break
        case 3:
            p.innerHTML = "Hoje é quarta-feira"
            break
        case 4:
            p.innerHTML = "Hoje é quinta-feira"
            break
        case 5:
            p.innerHTML = "Hoje é sexta-feira"
            break
        case 6:
            p.innerHTML = "Hoje é sábado"
            break
    }



} */