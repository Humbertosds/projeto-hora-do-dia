function carregar() {
txt = document.getElementById('msg')
foto = document.getElementById('imgdia')
agora = new Date()
hora = agora.getHours()

txt.innerHTML = `Agora são ${hora} horas`
}