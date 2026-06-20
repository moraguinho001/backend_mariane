const input = require("readline-sync");
let a = input.questionInt("Digite o primeiro numero: ");
let b = input.questionInt("Digite o segundo numero: ");
let operacao = input.question("Digite a operacao desejada (soma, subtracao, multiplicacao ou divisao): ");
function somar (a, b ) {
return a + b ;
}

const subtracao = (a, b) => {
return a - b;
};

const multiplicacao = (a, b) => a * b
console.log(multiplicacao (a, b)); 

const divisao = (a, b ) => {
return a / b ;
console.log (divisao (a, b));
};
