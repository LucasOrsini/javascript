const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://viacep.com.br/ws/11771402/json/')
ajax.send()

ajax.onload = function() {
    document.getElementById('area').innerHTML = this.responseText

    let obj = JSON.parse(this.responseText)
    alert(obj.ddd)
}
