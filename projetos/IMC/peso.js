function calculaPeso() {
	var peso = document.FormPeso.peso.value
	var altura = document.FormPeso.altura.value

	var peso1 = parseFloat(peso)
	var altura1 = parseFloat(altura)

	var imc = peso1 / (altura1 * altura1)


	var resposta = "Para a altura de " + altura1.toFixed(2) + " e peso de " + peso1.toFixed(1) + " o IMC é " + imc.toFixed(2) + ". "

	if (imc < 16) {
		resposta = resposta + "A classificação é MAGREZA GRAVE."
	}

	else if (imc >= 16 && imc < 17){
		resposta = resposta + "A classificação é MAGREZA MODERADA."
	}

	else if (imc >= 17 && imc < 18.5){
		resposta = resposta + "A classificação é MAGREZA LEVE."
	}

	else if (imc >= 18.5 && imc < 25){
		resposta = resposta + "A classificação é SAUDÁVEL."
	}

	else if (imc >= 25 && imc < 30){
		resposta = resposta + "A classificação é SOBREPESO."
	}

	else if (imc >= 30 && imc < 35){
		resposta = resposta + "A classificação é OBESIDADE GRAU I."
	}	

	else if (imc >= 35 && imc < 40){
		resposta = resposta + "A classificação é OBESIDADE GRAU II (Severa)."
	}	

	else {
		resposta = resposta + "A classificação é OBESIDADE GRAU III (Mórbida)."
	}

	document.getElementById('resposta').innerHTML = resposta
	document.FormPeso.reset();

}


