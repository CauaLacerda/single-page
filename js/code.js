//Configuração do lightbox
lightbox.option({
    'imageFadeDuration': 300,
    'fadeDuration': 300,
    'albumLabel':  "Foto %1 do total de %2", 
    'resizeDuration' : 400
})

//Inicialização do plugin AOS animate
AOS.init();

//variaveis p/ selecionar os elementos
const FIELD_IDADE = document.getElementById('idade')
const TXT_IDADE = document.getElementById('txt-idade')
console.log(FIELD_IDADE)
