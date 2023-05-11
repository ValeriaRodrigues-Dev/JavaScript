let num = document.getElementById('numero')
let sel = document.getElementById('lista')
let res = document.getElementById('saida')
let valores = []


function isnum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isnum(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        saida.innerHTML=''
    } else {
        alert('Valor inválido ou já está contido na lista')
    }
    num.value = ''
    num.focus()
}
function analisador() {
    if (valores.length == 0){
        alert('Adicione Valor para Finalizar!!')
    } else {
        let tele= valores.length
        let maior= valores[0]
        let menor= valores[0]
        soma = 0
        media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] <  menor)
            menor = valores[pos]
        }
        media = soma / tele
        saida.innerHTML = ''
        saida.innerHTML += `<p> A quantidade de números cadastrados é ${tele}.</p>`
        saida.innerHTML += `<p> O maior valor cadastrado foi ${maior}.</p>`
        saida.innerHTML += `<p> O menor valor cadastrado foi ${menor}.</p>`
        saida.innerHTML += `<p> A soma dos valores cadastrados é ${soma}.</p>`
        saida.innerHTML += `<p> A média dos valores cadastrados é ${media}.</p>`
    }

}