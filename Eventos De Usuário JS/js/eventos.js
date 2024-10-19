export function calculaIdade() {
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

export function lerDados() {
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

export function trocarFoto() {
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

export function gerarNumero() {
    const section = document.querySelector("#section-numero-aleatorio")

    const numMax = Number(section.querySelector("#num-max").value)
    // const randomNum = Math.floor(Math.random() * (numMax + 1))
    const randomNum = numMax
    // console.log(`Max=${numMax}\nGerado=${randomNum}`);
    
    const resultDiv = section.querySelector(".result")
    resultDiv.innerHTML = ''

    let imagemHTML = '';

    function criarImagem() {
        const img = document.createElement('img')
        img.src = "img/capybara.jpg"
        img.alt = "Uma foto de corpo inteiro de uma capivara de perfil"
        return img
    }

    // Método fragmento
    (() => {
        let fragment = document.createDocumentFragment()
        for(let i = 0; i < randomNum; i++) {
            fragment.appendChild(criarImagem())
        }

        resultDiv.appendChild(fragment)
    })();

    // Display de quantas imagens foram geradas
    const imagensGeradasP = section.querySelector("p")
    let imagensGeradas = '';

    if(randomNum === 0) {
        imagensGeradas = `<p>Nenhuma capivara foi gerada :(</p>`
    }
    else
        imagensGeradas = `<p>${randomNum} ${randomNum == 1 ? 'capivara roliça foi gerada' : 'capivaras roliças foram geradas'}!</p>`

    imagensGeradasP.innerHTML = imagensGeradas
}

export function mudarCores() {
    const section = document.querySelector("#section-cor-aleatoria")
    const style = section.style

    // Background, Color e Outline    
    let cores = []
    for(let i = 0; i < 3; i++) {
        const [r, g, b] = Array.from({length: 3}, () => Math.floor(Math.random() * 256))
        const cor = `rgb(${r}, ${g}, ${b})`
        console.log(cor);
        cores.push(cor)
    }
    
    style.background = cores[0]
    style.color = cores[1]
    style.outlineColor = cores[2]
}