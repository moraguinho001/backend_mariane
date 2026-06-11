const input = require("readline-sync");
let num1 = input.questionInt(`digite o primeiro numero:`)
let num2 = input.questionInt(`digite o segundo numero:`)
function somar(num1, num2) {
return num1 + num2
}
function subtrair(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1/num2
}
if(num2===0){
    console.log(`Erro: divisao por zero`)
}
console.log(somar(num1, num2))
console.log(subtrair(num1, num2))
console.log(multiplicacao(num1, num2))
console.log(divisao(num1, num2))
