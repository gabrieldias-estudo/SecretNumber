let secretNumber=parseInt(Math.random()*10+1);


let mensagem=document.getElementById('resposta');

function verificarChute(){
    let chute=parseInt(document.querySelector('input').value);
    mensagem.innerHTML= definirMensagem(chute,secretNumber);
    corDaMensagem(chute,secretNumber);
}


function definirMensagem(chute,secretNumber,){
    if(chute == secretNumber){
        return `Parabéns! Você acertou o número secreto ${secretNumber} !` ;
    }else if(chute > secretNumber){
        return `O número secreto é menor que ${chute}`;
    }else{
        return `O número secreto é maior que ${chute}`;
    }
}

function corDaMensagem(chute,secretNumber){
    return mensagem.style.color= chute != secretNumber ? "#ff3232ff" : "#008500";
}

