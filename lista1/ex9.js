const input = require("readline-sync");
let numA = input.questionInt("Digite um numero: ");
let numB = input.questionInt("Digite outro numero: ");
function menores(numA, numB){
console.log(`processando os numeros menores: ${numA} e ${numB}...`);
menoresFuncao(numA, numB);
}
let numero_menor = "";
if(numA < numB){
    numero_menor = numA;
    console.log(`O numero menor é ${numero_menor}`);
}
else if(numB < numA){
    numero_menor = numB;
    console.log(`O numero menor é ${numero_menor}`);
}