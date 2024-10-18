// Elementos da página
let botaoEnviar = document.querySelector('button#enviar')
let botaoCalcular = document.querySelector('button#calcular-idade')
let botaoToggleFoto = document.querySelector('button#toggle-image')

// Eventos de usuário
botaoEnviar.addEventListener('click', lerDados)
botaoCalcular.addEventListener('click', calculaIdade)
botaoToggleFoto.addEventListener('click', trocarFoto)

function lerDados() {
    let section = document.querySelector("#section-pior-form")
    let nome = section.querySelector("#nome").value
    let senha = section.querySelector("#senha").value
    let resultDiv = section.querySelector(".result")
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

function trocarFoto() {
    const pathAttributes = {
        "img/pug-normal.png": {
            togglePath: "img/pug-loaf.png",
            shamingTextDisplay: "none",
            alt: "Um close de um adorável pug que está olhando para a câmera"
        },
        "img/pug-loaf.png": {
            togglePath: "img/pug-normal.png",
            shamingTextDisplay: "block",
            alt: "O pug, outrora feliz, agora se tornou um pão de forma. Ele está deitado no sofá com a linguinha de fora."
        }
    }

    const section = document.querySelector("section#section-toggle-foto")

    const image = section.querySelector("img")
    const curImagePath = image.getAttribute("src")
    const newImagePath = pathAttributes[curImagePath].togglePath

    const shamingText = section.querySelector("#shaming-text")
    
    shamingText.style.display = pathAttributes[newImagePath].shamingTextDisplay;

    image.setAttribute("src", newImagePath)
    image.setAttribute("alt", pathAttributes[newImagePath].alt)
}