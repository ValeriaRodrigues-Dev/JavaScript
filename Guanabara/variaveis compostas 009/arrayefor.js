let valores = [8,1,7,4,2,9]

console.log(valores)

/* ao invés disso:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
usa isso --> 
for (let posicao = 0; posicao < valores.length; posicao++){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
} 
simplificando...*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('OUTRO ARRAY:')
let num = [4,5,6,7,8]
let posi = num.indexOf(9)
console.log(num)
if (posi == -1){
    console.log('o valor não foi encontrado')
} else{
    console.log(`o valor está na posição ${posi}`)
}
