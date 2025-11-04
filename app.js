let dificuldade = "fácil";
let maxNumber = definirNumeroMax(dificuldade);
let secretNumber = gerarNumeroAleatorio(maxNumber);
let tentativas = 1;
let mensagem = document.getElementById('resposta');

console.log(secretNumber);

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    if(chute == secretNumber){
        definirMensagem(`Parabéns! Você acertou o número secreto ${secretNumber} em ${tentativas} ${palavraTentativa}!`, "#008500");
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > secretNumber){
            definirMensagem(`O número secreto é menor que ${chute}`, "#ff3232ff");
        } else {
            definirMensagem(`O número secreto é maior que ${chute}`, "#ff3232ff");
        }
        tentativas++;
        LimpaCampo();
    } 
}

function definirMensagem(texto, cor){
    mensagem.innerHTML = texto;
    mensagem.style.color = cor;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maxNumber + 1);
}

function LimpaCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function resetGame(){
    secretNumber = gerarNumeroAleatorio(maxNumber);
    tentativas = 1;
    LimpaCampo();
    definirMensagem('');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log("Novo número secreto:", secretNumber);
}

function alterarDificuldade(){
    let select = document.getElementById("dificuldade");
    dificuldade = select.value;
    maxNumber = definirNumeroMax(dificuldade);
    let intervalo = document.getElementById("texto");
    intervalo.innerHTML = `Digite um número de 1 a ${maxNumber} e tente a sorte!`;

    resetGame();
}

function definirNumeroMax(nivel){
    switch(nivel){
        case "médio": return 100;
        case "difícil": return 1000;
        case "impossível": return 10000;
        default: return 10;
    }
}
