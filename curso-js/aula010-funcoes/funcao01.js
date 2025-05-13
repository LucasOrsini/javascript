function parimpar(n){
    if (n%2 == 0){ //Se o n for divisível por 2
        return 'par!'

    }else{
        return'ímpar!'
    }
}
let res = parimpar(11)
console.log(`O número inserido é ${res}`)