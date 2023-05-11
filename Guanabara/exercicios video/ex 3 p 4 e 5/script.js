function contador() {
    var iniciar = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var pulo = document.getElementById("passo")
    var contando = document.querySelector('div#contagem')

    if (iniciar.value.length == 0 || final.value.length == 0 || pulo.value.length == 0) {
        alert("[ERRO] -> NÃO PODE CONTER ESPAÇO EM BRANCO! VERIFIQUE E TENTE NOVAMENTE.")
    } else {
        contando.innerHTML = 'contando:  <br>'
        let i = Number(iniciar.value)
        let f = Number(final.value)
        let p = Number(pulo.value)

        if (p <= 0) {
            alert('INVÁLIDO! CONSIDERANDO PASSO 1.')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                contando.innerHTML += ` ${c} \u{27B0}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                contando.innerHTML += ` ${c} \u{27B0}`
            }
        }
        contando.innerHTML += '\u{1F3C1}' //UNICODE EMOJI LIST
    }
}