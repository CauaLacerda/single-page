//Configuração do lightbox
lightbox.option({
    'imageFadeDuration': 300,
    'fadeDuration': 300,
    'albumLabel': "Foto %1 do total de %2",
    'resizeDuration': 400
})

//Inicialização do plugin AOS animate
AOS.init();

//variaveis p/ selecionar os elementos
const FIELD_IDADE = document.getElementById('idade')
const TXT_IDADE = document.getElementById('txt-idade')
//txt-idade mostra o valor do campo idade
TXT_IDADE.innerText = FIELD_IDADE.value

FIELD_IDADE.addEventListener('change', () => {
    TXT_IDADE.innerText = FIELD_IDADE.value
})