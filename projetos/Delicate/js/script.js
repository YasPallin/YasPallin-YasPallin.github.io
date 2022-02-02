// função que deixa o header transparente no topo, mas com cor caso role a tela

$(document).ready(function(){
	verifica_posicao_scroll();
	$(window).scroll(function(){
		verifica_posicao_scroll();
	})
})

function verifica_posicao_scroll(){
	if ($(window).scrollTop() != 0){
		$("#topo").css({backgroundColor: "#fa7a78"});
		$("nav").removeClass("navbar-light").addClass("navbar-dark");
		$("#logo").attr("src", "Imagens/logo13.png");
	} else{
		$("#topo").css({backgroundColor: "transparent"});
		$("nav").removeClass("navbar-dark").addClass("navbar-light");
		$("#logo").attr("src", "Imagens/logo12.png");
	}
}

// função para aparecer a setinha para o topo

$(document).ready(function(){
	verifica_posicao_topo();
	$(window).scroll(function(){
		verifica_posicao_topo();
	});
	$("#seta_topo").click(function(){
		$("html").animate({scrollTop: 0}, 1000);
	});
});

function verifica_posicao_topo(){
	console.log($(window).scrollTop())
	if ($(window).scrollTop() > 400){
		$("#seta_topo").fadeIn();
	} else {
		$("#seta_topo").fadeOut();
	}
}

// função que alterna entre o login e cadastro

$(document).ready(function(){
	$("#form_login").show();
	$("#form_cadastro").hide();
	$("#btn_criar_conta").click(function(){
		$("#form_login").hide();
		$("#form_cadastro").show();
	})
	$("#btn_cadastro_enviar").click(function(){
		$("#form_login").show();
		$("#form_cadastro").hide();
	})
})

// função para abrir pop-up para enviar e-mail
$(document).ready(function(){
	$("#popup_senha").hide();
	$("#popup_email").hide();
	$("#btn_esqueci_senha").click(function(){
		$("#popup_senha").dialog();
	})
	$("#btn_enviar_senha").click(function(){
		$("#popup_email").dialog();
	})
})

// função para efeito de destaque no menu de imagens - index

$(document).ready(function(){
	$(".img_menu_produtos").mouseover(function(){
		$(this).css({border: "solid white"})
	})
	$(".img_menu_produtos").mouseout(function(){
		$(this).css({border: "none"})
	})
})

// função para somar no badge em carrinho

$(document).ready(function () {
	var contador = 0;
	$(".btn_comprar").click(function(){
		$("#contador_carrinho").text(contador += 1);
	})
})

// Chama as funções para validar formulário de cadastro da página minha conta - cadastro
$(document).ready(function () {
	$("#nome").blur(valida_campo_letras);
	$("#sobrenome").blur(valida_campo_letras);
	$("#idade").blur(valida_idade);
	$("#rg").blur(valida_campo_numero);
	$("#cpf").blur(valida_campo_numero);
	$("#telefone").blur(valida_campo_numero);
	$("#logradouro").blur(verifica_campo_vazio); 
	$("#numero_casa").blur(valida_campo_numero);
	$("#cidade").blur(valida_campo_letras);
	$("#cep").blur(valida_campo_numero);
	$("#email").blur(valida_email);
	$("#confirma_email").blur(valida_confirmacao_email);
	$("#senha_cadastro").blur(valida_senha);
	$("#confirma_senha").blur(valida_confirmacao_senha);
})

// função para habilitar o botão de enviar cadastro
function habilitar_botao(){
	if (retorna_valor_letras($("#nome")) && retorna_valor_letras($("#sobrenome")) && retorna_valor_idade($("#idade")) && retorna_valor_numero($("#rg")) && retorna_valor_numero($("#cpf")) && retorna_valor_numero($("#telefone")) && retorna_campo_vazio($("#logradouro")) && retorna_valor_numero($("#numero_casa")) && retorna_valor_letras($("#cidade")) && retorna_valor_numero($("#cep")) && retorna_campo_email($("#email")) && retorna_confirma_email($("#confirma_email")) && retorna_campo_senha($("#senha_cadastro")) && retorna_confirma_senha($("#confirma_senha"))){
		$("#btn_cadastro_enviar").removeAttr("disabled");
	} else {
		$("#btn_cadastro_enviar").attr("disabled", "disabled");
	}
}

// função para verificar campo de letras

function valida_campo_letras(){ // é a que será chamada no evento onblur dos campos de verificar se tem só letras
	var validacao_temporaria = retorna_valor_letras($(this)); // validacao_temporaria recebe o resultado do que for retornado na função retorna_valor (T/F)	
	if (validacao_temporaria == false){
		$(this).css({background: "lightpink"});
	} else {
		$(this).css({background: "lightgreen"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_valor_letras(input){ // é a função que verifica o valor do input e retorna F/v
	var campo_valor = input.val();
	var validacao_temporaria = campo_valor.length > 0; //validacao_temporaria recebe = se for maior que 0 é true, se = ou menor que 0 é false
	for (i = 0; i < campo_valor.length; i++){ // for para percorrer cara caractere
		if (!isNaN(campo_valor[i]) && campo_valor[i] != " "){ // se for número, entra e coloca em false - para aceitar espaços entre os nomes
			validacao_temporaria = false;
		}		
	}
	return validacao_temporaria; // retorna se é true se válido, e false se inválido
}
// função para verificar idade;
function valida_idade(){	 
	if (retorna_valor_idade($(this))){ // se for V, entra no if e pinta de verde claro
		$("#idade").css({background: "lightgreen"});
	} else { // se for F, entra no else e pinta de vermelho
		$("#idade").css({background: "lightpink"});
	} 
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_valor_idade(input){ // função para verificar o input da idade
	var idade = input.val(); // var idade recebe o valor do input
	return idade <= 100 && idade >= 18 && idade.length > 0; // se toda esta expressão for T retorna true, se alguma for F, retorna False pq está usando AND
}

// função para verificar campo de número; 

function valida_campo_numero(){
	var validacao_temporaria = retorna_valor_numero($(this));	
	if (validacao_temporaria){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_valor_numero(input){ // função para verificar o input de número
	var campo_valor = input.val();
	var validacao_temporaria = campo_valor.length > 0; //validacao_temporaria recebe = se for maior que 0 é true, se = ou menor que 0 é false
	for (i = 0; i < campo_valor.length; i++){
		if (isNaN(campo_valor[i]) || campo_valor[i] == " "){
			validacao_temporaria = false;
		}		
	}
	return validacao_temporaria;
}

// função para verificar se está vazia 
function verifica_campo_vazio(){
	var validacao_temporaria = retorna_campo_vazio($(this));	
	if (validacao_temporaria){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_campo_vazio(input){
	var campo_valor = input.val();
	return campo_valor.length > 0;
}

// função para verificar e-mail;
function valida_email(){
	if (retorna_campo_email($(this))){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_campo_email(input){
	var campo_valor = input.val();
	return campo_valor.indexOf("@") != -1;
}

// função para confirmar e-mail;
function valida_confirmacao_email(){
	if (retorna_confirma_email($(this))){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}
function retorna_confirma_email(input){
	var campo_valor = input.val();
	var campo_primeiro_email = $("#email").val();
	return campo_valor == campo_primeiro_email && campo_valor.length > 0;
}

// função para verificar senha;
function valida_senha(){
	if (retorna_campo_senha($(this))){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_campo_senha(input){
	var campo_valor = input.val();
	return campo_valor.length == 8;
}

// função para confirmar senha;
function valida_confirmacao_senha(){
	if (retorna_confirma_senha($(this))){
		$(this).css({background: "lightgreen"});
	} else {
		$(this).css({background: "lightpink"});
	}
	habilitar_botao(); // chama a função para verificar se habilita ou não o botão
}

function retorna_confirma_senha(input){
	var campo_valor = input.val();
	var campo_primeira_senha = $("#senha_cadastro").val();
	return campo_valor == campo_primeira_senha && campo_valor.length > 0;
}




