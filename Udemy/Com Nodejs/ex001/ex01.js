let agora = new Date()
let hora = agora.getHours() 
let tempo = ''

if (hora < 12) {
    tempo = 'Manhã'
} else if (hora <= 18) {
    tempo = 'Tarde'
} else {
    tempo = 'Noite'
}
console.log(`Meu nome é: "Valéria". Estou aprendendo JavaScript às ${hora} da ${tempo}!!`)

console.log('Meu nome é: "Valéria". Estou aprendendo JavaScript às', 11, 'horas da Manhã.')