//cria a variavel para armazenar o valor da nota do primeiro trimestre
let nota1Trim = parseFloat(document.querySelector(".trim1").textContent);
//console apenas para fins de teste
console.log(nota1Trim);
//cria a variavel para armazenar o valor da nota do primeiro trimestre
let nota2Trim = parseFloat(document.querySelector(".trim2").textContent);
//console apenas para fins de teste
console.log(nota2Trim);
//cria a variavel para armazenar o valor da nota do primeiro trimestre
let nota3Trim = parseFloat(document.querySelector(".trim3").textContent);
//console apenas para fins de teste
console.log(nota3Trim);

//variavel para armazenar o valor da soma das notas
let resultado = nota1Trim + nota2Trim + nota3Trim;
//console apenas para fins de teste
console.log(resultado);

//cria a variavel e armazena o conteudo do resultado-final
let resultadoFinal = document.querySelector(".resultado-final");

if(resultado >= 180){
    //se for igual ou maior que 180 aparece como aprovado
    resultadoFinal.textContent = "Sim, parabéns!"
} else {
    //se nao, aparece como reprovado e mostra quanto precisa para passae
    let notaNecessaria = 180 - (nota1Trim+nota2Trim+nota3Trim);
    resultadoFinal.textContent = "Não, se esforce mais! Ainda preciaria de "+ notaNecessaria +" pontos para ser aprovado.";
}
