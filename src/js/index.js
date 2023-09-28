const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imageAtual = 0

setaAvancar.addEventListener('click', function () {
    if(imageAtual === imagens.length - 1){
        return
    }
    
    imageAtual++
    
    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});

    setaVoltar.addEventListener('click', function () {
        if(imageAtual === 0){
            return
        }

        
        imageAtual--
        
    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});

function mostrarImagem() {
    imagens[imageAtual].classList.add('mostrar');
}

function esconderImagemAberta(){
   const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function mostrarOuEsconderSetas(){
 const naoEhAPimeriaImagem = imageAtual !== 0;
 if(naoEhAPimeriaImagem){
    setaVoltar.classList.remove('opacidade');
 }else{
    setaVoltar.classList.add('opacidade');
 }

 const chegouNaUltimaImagem = imageAtual !== 0 && imageAtual === imagens.length - 1;
 if(chegouNaUltimaImagem){
    setaAvancar.classList.add('opacidade')
 }else{
    setaAvancar.classList.remove('opacidade')
 }
}