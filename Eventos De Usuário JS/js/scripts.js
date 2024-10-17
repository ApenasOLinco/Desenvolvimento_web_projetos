// Elementos da página
let botaoEnviar = document.querySelector('button#enviar')
let botaoCalcular = document.querySelector('button#calcular-idade')

// Eventos de usuário
botaoEnviar.addEventListener('click', lerDados)
botaoCalcular.addEventListener('click', calculaIdade)

function lerDados() {
    let nome = document.querySelector("#nome").value;
    let senha = document.querySelector("#senha").value;
    let comando = `nome: ${nome}\nsenha: ${senha}`

    console.log(comando);
    alert(comando);
}

function calculaIdade() {
    let idade = Number(prompt("Insira sua idade: ") || 0)
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
    `
    Ano de nascimento: ${anoAtual - idade}\n
    Dias vividos: ${dias}\n
    O número de dias vividos é ${parImpar} e ${divisivelPorTres}
    `

    console.log(result)
    alert(result)
}