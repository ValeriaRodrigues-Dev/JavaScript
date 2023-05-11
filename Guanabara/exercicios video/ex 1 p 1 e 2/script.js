function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 19// data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = "<img src='fotodamanha.png'>"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = "<img src='fotodatarde.png'>"
        document.body.style.background = '#b9846f'
    } else {
        img.innerHTML = "<img src='fotodanoite.png'>"
        document.body.style.background = '#515154'
    }
}