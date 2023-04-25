
function idade(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonas')
    var resultado = document.querySelector('div#saida')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','foto-bb-m.png') 

            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','foto-jovem-m.png') 

            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','foto-adulto..png') 

            } else {
                //Idoso
                img.setAttribute('src','foto-idoso.png') 
            }
        } else {
            genero = 'Feminino'
            if (idade >=0 && idade < 10){
                //Criança
                
                img.setAttribute('src','foto-bb-f.png') 

            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','foto-jovem-f.png') 

            } else if (idade < 50){
                //Adulta
                img.setAttribute('src','foto-adulta.png') 

            } else {
                //Idosa
                img.setAttribute('src','fota-idosa.png') 
            }
        }
       
        resultado.innerHTML = `Foi detectado: Gênero ${genero} de ${idade} anos`
        resultado.appendChild(img)
        
    }
}