import * as eventos from './eventos.js'


// Elementos da página
const botaoEnviar = document.querySelector('button#enviar')
const botaoCalcular = document.querySelector('button#calcular-idade')
const botaoToggleFoto = document.querySelector('button#toggle-image')
const botaoGerarNumero = document.querySelector('button#gerar-numero')
const botaoMudarCores = document.querySelector('button#mudar-cor')

// Eventos de usuário
botaoEnviar.addEventListener('click', eventos.lerDados)
botaoCalcular.addEventListener('click', eventos.calculaIdade)
botaoToggleFoto.addEventListener('click', eventos.trocarFoto)
botaoGerarNumero.addEventListener('click', eventos.gerarNumero)
botaoMudarCores.addEventListener('click', eventos.mudarCores)

// Outros Procedimentos de carregamento do DOM
eventos.mudarCores();