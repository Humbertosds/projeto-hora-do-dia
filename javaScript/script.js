function carregar() {
txt = document.getElementById('msg')
foto = document.getElementById('imgdia')
agora = new Date()
//hora = agora.getHours()
hora = 14
txt.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora <= 12){
    // Bom Dia!
    foto.src = "imagens/pexels-lukas-296234.jpg"
    document.body.style.background = '#D7DFE7'
}else if (hora >= 13 && hora <= 18) {
    // BOA TARDE!
    foto.src = "imagens/pexels-anderson-martins-2386144.jpg"
    document.body.style.background = '#F4A75B'
}else if (hora >= 19 && hora <= 23) {
    // BOA NOITE!
    foto.src = "imagens/pexels-rahul-716398.jpg"
    document.body.style.background = '#231F20'

}
}
