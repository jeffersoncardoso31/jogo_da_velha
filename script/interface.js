let jogadores = ['','']
document.addEventListener('DOMContentLoaded',()=>{

    let quadrados = document.querySelectorAll('.quadrado');

    quadrados.forEach((quadrado)=>{
        quadrado.addEventListener('click', ondeClicar)
    })
     let btn = document.querySelector('#btn');
     btn.addEventListener('click',()=>{
        jogadores = document.querySelectorAll('.jogador');
        if(jogadores[0].value == '' || jogadores[1].value == ''){
            alert('Para iniciar, digite os nomes dos jogadores!!!')
        }else{
            telaPreta = document.querySelector('#jogadores')
            telaPreta.style.display = 'none';
        }
     })
     let btn_reiniciar = document.querySelector('#btn_reiniciar');
        btn_reiniciar.addEventListener('click', ()=>{
            window.location.reload()
        })
})

function ondeClicar(event){
   let quadrado = event.target;
   let posicao = quadrado.id;

   if(ondeMoveu(posicao)){
    setTimeout(() => {
        let telaPreta = document.querySelector('.vencedor');
        let parabens_vencedor = document.querySelector('#parabens');
        telaPreta.style.display = 'flex'
        parabens_vencedor.innerHTML = `<p> Vencedor -- ${jogadores[jogador].value} &#128526`
    }, 100);
   }
   if(verificarVelha()){
    setTimeout(() => {
        let telaPreta = document.querySelector('.vencedor');
        let parabens_vencedor = document.querySelector('#parabens');
        telaPreta.style.display = 'flex'
        parabens_vencedor.innerHTML = "<p>&#128557 Deu Velha &#128557</p>"
    }, 100);
   }
    atualizarQuadrados();
}

function atualizarQuadrados(){

    let quadrados = document.querySelectorAll('.quadrado');

    quadrados.forEach((quadrado)=>{
       let posicao = quadrado.id;
       let simbolo = tabuleiro[posicao]

       if(simbolo != ''){
        quadrado.innerHTML = `<p> ${simbolo}</p>`
       }
    })
}