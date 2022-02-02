function apagarTudo() {
	$("#notasjs").text("")
}

function verificaNotaFinal() {

	var nota1 = document.FormNotas.nota1.value
	var nota2 = document.FormNotas.nota2.value
	var nota3 = document.FormNotas.nota3.value
	var nota4 = document.FormNotas.nota4.value


	var nota1bim = parseFloat(nota1)
	var nota2bim = parseFloat(nota2)
	var nota3bim = parseFloat(nota3)
	var nota4bim = parseFloat(nota4)

	var nomecompleto = document.FormNotas.nomeC.value

	var notaFinal = (nota1bim + nota2bim + nota3bim + nota4bim) / 4

	var mensagem1 = "A nota final é " + notaFinal + ". "

	if (notaFinal >= 6) {
		mensagem1 += "O(a) aluno(a) " + nomecompleto + " está aprovado(a). Parabéns e aproveite as férias!"
	} else if (notaFinal >= 5.1) {
		mensagem1 += "O(a) aluno(a) " + nomecompleto+ " deverá fazer a recuperação entre 15/11 e 15/12. Contate a secretaria para mais informações."
	} else {
		mensagem1 += "O(a) aluno(a) " + nomecompleto + " está reprovado(a), favor contatar a secretaria para mais informações sobre a rematrícula."
	}

	// document.getElementById("notasjs").innerHTML = mensagem1
	$("#notasjs").text(mensagem1)

}

