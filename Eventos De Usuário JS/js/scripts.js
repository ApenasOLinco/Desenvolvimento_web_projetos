// Elementos da página
let botaoEnviar = document.querySelector('button#enviar')
let botaoCalcular = document.querySelector('button#calcular-idade')

// Eventos de usuário
botaoEnviar.addEventListener('click', lerDados)
botaoCalcular.addEventListener('click', calculaIdade)

function lerDados() {
    let nome = document.querySelector("#nome").value
    let senha = document.querySelector("#senha").value
    let resultDiv = document.querySelector("#section-pior-form .result")
    let result = 
    `\
    Seu nome: ${nome}<br>
    Sua senha: ${senha}\
    `

    resultDiv.innerHTML = result
}

function calculaIdade() {
    let section = document.querySelector("#section-calculo-idade")
    let idade = section.querySelector("#idade").value
    let dias = idade * 365
    
    // Contagem de anos bissextos
    let anoAtual = new Date().getFullYear()
    let anosBissextos = 0

    for(let i = anoAtual - idade; i <= anoAtual; i++) {
        if(i % 4 === 0)
            anosBissextos++
    }
    
    dias += anosBissextos

    // Calcular Par ou Ímpar, Divisível por 3
    let parImpar = 'par'
    let divisivelPorTres = 'não é divisível por 3'

    if(dias % 2 !== 0)
        parImpar = 'ímpar'
    
    if(dias % 3 === 0)
        divisivelPorTres = 'é divisível por três'

    // Resultado
    let result =
    `\
    Ano de nascimento: ${anoAtual - idade}<br>
    Dias vividos: ${dias}<br>
    O número de dias vividos é ${parImpar} e ${divisivelPorTres}\
    `

    // Display do resultado
    let resultDiv = section.querySelector(".result")
    resultDiv.innerHTML = result
}