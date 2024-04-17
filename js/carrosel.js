// const imgContainer = document.getElementById('img'); // Corrigido o seletor
// const imgs = document.querySelectorAll('#img img');

// let idx = 0;

// function carrossel() { // Corrigido o nome da função
//     idx++;

//     if (idx > imgs.length - 1) {
//         idx = 0;
//     }
//     imgContainer.style.transform = `translateX(${-idx * 1349}px)`; // Corrigido 'transleteX' para 'translateX'
// }

// setInterval(carrossel, 1800);
const imgContainer = document.getElementById('img'); 
const imgs = document.querySelectorAll('#img img');
const btn = document.querySelector('#start');
const btnBack = document.querySelector('#back');
let idx = 0;

function atualizarLarguraViewport() {
  const larguraViewport = document.documentElement.clientWidth;
  imgContainer.style.width = `${larguraViewport}px`; // Atualiza a largura do container de imagens
}

function iniciarCarrosel(){
    idx++;
    if(idx > imgs.length - 1){
        idx = 0;
    }
    imgContainer.style.transform = `translateX(${-idx * imgContainer.clientWidth}px)`; // Usa a largura do container ao invés da tela
}
function backCarrosel(){
    idx--;
    if(idx < 0){
        idx =  imgs.length - 1;
    }
    imgContainer.style.transform = `translateX(${-idx * imgContainer.clientWidth}px)`; // Usa a largura do container ao invés da tela
}

window.addEventListener('resize', atualizarLarguraViewport);

btn.addEventListener('click', iniciarCarrosel);
btnBack.addEventListener('click', backCarrosel );

atualizarLarguraViewport();