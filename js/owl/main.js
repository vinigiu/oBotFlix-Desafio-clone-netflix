$('.owl-carousel').owlCarousel({
    loop:false, //Se quiser que seja infinito o loop: true//
    margin:10, //Espaço entre os itens do carrosel//
    nav:false, //Se quiser que coloque as <- -> para navegação no carrosel//
    responsive:{ //Trata da responsividade de acordo com o tamanho da tela, quantos itens ele exibe do carrosel//
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})