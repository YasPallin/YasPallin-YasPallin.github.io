// abre e fecha o menu ao clicar no X ou no hambúrguer

const nav = document.querySelector("#header nav");

const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle) {
	element.addEventListener('click', function(){
		nav.classList.toggle('show')
	})
}

//  para esconder o menu ao clicar em algum item do menu - fecha o menu ao redirecionar
const links = document.querySelectorAll("nav ul li a")

for(const link of links) {
	link.addEventListener('click', function(){
		nav.classList.remove('show')
	})
}

// para colocar a sombra no menu

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll(){

	if (this.window.scrollY >= navHeight){
			header.classList.add('scroll')
		} else {
			header.classList.remove('scroll')
		}

}


// Testimonials carousel slider
const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	  },
	keyboard: true,
	breakpoints: {
		767: {
			slidesPerView: 2,
			setWrapperSize: true
		}
	}
  });

// scrollreveal - para mostrar os elementos quando der scroll na página

const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})

scrollReveal.reveal(
	`
	#home .image, #home .text,
	#about .image, #about .text,
	#services header, #services .card,
	#testimonials header, #testimonials .testimonials,
	#contact .text, #contact .links,
	footer .brand, footer .social
	`, 
	{ interval: 100})

// para aparecer a setinha de volta ao topo
const backToTopButton = document.querySelector('.back-to-top');

function backToTop(){

	if (this.window.scrollY >= 560){
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}
	
// para quando acontecer o evento de scroll, chamar essas duas funções
window.addEventListener('scroll', function(){
	changeHeaderWhenScroll()
	backToTop()
	activateMenuAtCurrentSection()
})


//  menu ativo conforme a seção ativa/visível na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
	const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

	for ( const section of sections ) {
		const sectionTop = section.offsetTop // pegando o topo
		const sectionHeight = section.offsetHeight // pegando a altura
		const sectionId = section.getAttribute('id') // pegando o id

		const checkpointStart = checkpoint >= sectionTop;
		const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
		
		if (checkpointStart && checkpointEnd) {
			document.querySelector('nav ul li a[href*=' + sectionId + ']')
			.classList.add('active')
		} else {
			document.querySelector('nav ul li a[href*=' + sectionId + ']')
			.classList.remove('active')
		}
	}
}