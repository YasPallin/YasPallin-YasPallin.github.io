// 1) Criar uma página que possua 5 divs, 3 botões, 1 formulário contendo 5 campos de texto(Nome, endereço, telefone, email e cpf), e 1 select contendo opções de estados do Brasil (Pelo menos 10 estados) e um botão de enviar. Faça o que se pede abaixo:

// - Ao clicar no primeiro botão, as 5 divs devem aparecer com cores diferentes, largura e altura diferentes e com um efeito que você aprendeu em Jquery (Á sua escolha)
$(document).ready(function(){
	flag = false;
	$("#btn1").click(function(){
		if (flag == false){
			$("section:eq(0)").css({backgroundColor: "purple", width: "200px", height: "200px", overflow: "auto"}).slideUp();
			$("section:eq(1)").css({backgroundColor: "green", width: "300px", height: "300px", overflow: "auto"}).slideUp();
			$("section:eq(2)").css({backgroundColor: "pink", width: "500px", height: "200px", overflow: "auto"}).slideUp();
			$("section:eq(3)").css({backgroundColor: "aquamarine", width: "100px", height: "500px", overflow: "auto"}).slideUp();
			$("section:eq(4)").css({backgroundColor: "black", width: "400px", height: "700px", overflow: "auto", color: "white"}).slideUp();
			flag = true;
				
		} else {
			$("section:eq(0)").css({backgroundColor: "inherit", width: "inherit", height: "inherit"}).show();
			$("section:eq(1)").css({backgroundColor: "inherit", width: "inherit", height: "inherit"}).show();
			$("section:eq(2)").css({backgroundColor: "inherit", width: "inherit", height: "inherit"}).show();
			$("section:eq(3)").css({backgroundColor: "inherit", width: "inherit", height: "inherit"}).show();
			$("section:eq(4)").css({backgroundColor: "inherit", width: "inherit", height: "inherit", color: "inherit"}).show();
			flag = false;
		}
	})
})

// - Ao clicar no segundo botão, todas as divs deverão ficar com a cor azul, largura de 300px e altura de 150px.
$(document).ready(function(){
	flag = false;
	$("#btn2").click(function(){
		if (flag == false){
				$("section").css({backgroundColor: "#0477BF", width: "300px", height: "150px", overflow: "auto", color: "white"})
				flag = true;				
		} else {
			$("section").css({backgroundColor: "inherit", width: "inherit", height: "inherit", color: "inherit"})
			flag = false;
		}
	})
})

// - Ao dar um duplo clique no terceiro botão, você deverá esconder duas divs à sua escolha, também utilizando um efeito do Jquery.
$(document).ready(function(){
	flag = false;
	$("#btn3").dblclick(function(){
		if (flag == false){
			$("section:eq(2)").slideUp();
			$("section:eq(3)").slideUp();
			flag = true;		
		} else {
			$("section").slideDown();
			flag = false;
		}
	})
})

// - Coloque um foco nos campos do formulário com uma cor agradável ao usuário, e ao tirar o foco do campo de formulário remova esse efeito.
$(document).ready(function(){
	$("input").focus(function(){
		$(this).css({backgroundColor: "#A7CFF2"})
	}),
	$("input").blur(function(){
		$(this).css({backgroundColor: "white"})
	})
})

// - Pegue o valor do nome e do email do usuário e apresente na tela em uma tag de span os dados que foram digitados pelo usuário.
$(document).ready(function(){
	$("input").change(function(){
		var nome = $("input:eq(0)").val();
		var email = $("input:eq(3)").val();
		$("span").text(nome + " e " + email);
	})
})

// 2) Crie uma página contendo uma div e aplique todos os efeitos que você aprender durante a aula(Hide(), show(), toggle(), fadeIn(), fadeOut(), fadeTo(), fadeToggle(), slideUp(), slideDown(), slideToggle()
$(document).ready(function(){
	$("#btn_efeito1").click(function(){
		$("#div_efeitos").hide();
	})
	$("#btn_efeito2").click(function(){
		$("#div_efeitos").show();
	})
	$("#btn_efeito3").click(function(){
		$("#div_efeitos").toggle();
	})
	$("#btn_efeito4").click(function(){
		$("#div_efeitos").fadeIn();
	})
	$("#btn_efeito5").click(function(){
		$("#div_efeitos").fadeOut();
	})
	$("#btn_efeito6").click(function(){
		$("#div_efeitos").fadeTo(2000, 0.2);
	})
	$("#btn_efeito7").click(function(){
		$("#div_efeitos").fadeToggle();
	})
	$("#btn_efeito8").click(function(){
		$("#div_efeitos").slideUp();
	})
	$("#btn_efeito9").click(function(){
		$("#div_efeitos").slideDown();
	})
	$("#btn_efeito10").click(function(){
		$("#div_efeitos").slideToggle();
	})
})
/////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $("#logo").click(function(){
        var audio = new Audio("jurassic_park_raptor.mp3");
		console.log(audio);
        audio.addEventListener("canplaythrough", function(){
            audio.play();
        });
    });
}); 

$(document).ready(function(){
	$("#menu_vertical").hide();})	
window.addEventListener("resize", function () {
	var tamanho = $(window).width();
	if (tamanho >=1024){
		$("#menu_horizontal").show();
		$("#menu_vertical").hide();
	}else{
		$("#menu_vertical").show();
		$("#menu_horizontal").hide();
	} 
});