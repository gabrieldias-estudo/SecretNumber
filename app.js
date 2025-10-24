let secretNumber=gerarNumeroAleatorio();
let tentativas=1
console.log(secretNumber);
let mensagem=document.getElementById('resposta');

function verificarChute(){
    let chute=parseInt(document.querySelector('input').value);
    let palavraTentativa= tentativas > 1 ? "tentativas" : "tentativa";
    if(chute == secretNumber){
        definirMensagem(`Parabéns! Você acertou o número secreto ${secretNumber} em ${tentativas} ${palavraTentativa} !`,"#008500");
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > secretNumber){
            definirMensagem(`O número secreto é menor que ${chute}`,"#ff3232ff");
        }else{
            definirMensagem(`O número secreto é maior que ${chute}`,"#ff3232ff");
        }
        tentativas++;
        LimpaCampo();
    } 
        
}

function definirMensagem(texto,cor){
    mensagem.innerHTML=texto;
    mensagem.style.color=cor;
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}

function LimpaCampo(){
    chute=document.querySelector('input');
    chute.value='';
}
function resetGame(){
    secretNumber=gerarNumeroAleatorio();
    tentativas=1;
    LimpaCampo();
    definirMensagem('')
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


