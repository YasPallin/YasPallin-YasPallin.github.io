// função que deixa o header transparente no topo, mas com cor caso role a tela

$(document).ready(function(){
	verifica_posicao_scroll();
	$(window).scroll(function(){
		verifica_posicao_scroll();
	})
})

function verifica_posicao_scroll(){
	if ($(window).scrollTop() != 0){
		$("nav").addClass("show");
	} else{
		$("nav").removeClass("show");

	}
}


// função para aparecer a setinha para o topo

// $(document).ready(function(){
// 	verifica_posicao_topo();
// 	$(window).scroll(function(){
// 		verifica_posicao_topo();
// 	});
// 	$("#seta_topo").click(function(){
// 		$("html").animate({scrollTop: 0}, 1000);
// 	});
// });

// function verifica_posicao_topo(){
// 	console.log($(window).scrollTop())
// 	if ($(window).scrollTop() > 400){
// 		$("#seta_topo").fadeIn();
// 	} else {
// 		$("#seta_topo").fadeOut();
// 	}
// }




/*
 * Swipper 
 */

const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	  },

	coverflowEffect: {
		rotate: 30,
		slideShadows: false,
	  },

	  breakpoints: {
		767: {
			slidesPerView: 1,
			setWrapperSize: true
		}
	}
  });