
let tabuleiro = ['','','','','','','','',''];
let jogador = 0;
let simbolos = ['0','X'];
let gameOver = false;
let velha = false;

function ondeMoveu(posicao){

    if (gameOver){
        return;
    }

    if(tabuleiro[posicao]==''){
        tabuleiro[posicao] = simbolos[jogador];

        gameOver = verificarVencedor();
        if(gameOver == false){
            if(jogador == 0){
                jogador = 1;
            }else{
                jogador = 0;
            }
        }
    }
    verificarVelha();
    return gameOver;
}
function verificarVelha(){
    let varrer_tabuleiro = tabuleiro.indexOf('');
    if(varrer_tabuleiro == -1){
        if(gameOver){
            return false;
        }else{
        return true;
        }
    }
}

function verificarVencedor(){
    let opecoesVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i =0; i < opecoesVitoria.length; i++){
        let seq = opecoesVitoria[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != ''){
            return true;
        }
    }
    return false;
}