function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const ListaDeTeclas = document.querySelectorA11(".recla");


for(let contador = 0; contador <ListaDeTeclados.length; contador++){
    const tecla = ListaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.omclick = function (){
        tocaSom(idAudio);
    }
}
