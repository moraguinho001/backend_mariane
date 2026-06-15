const input = require("readline-sync");
let num = input.questionInt(`Insira o número:`)
let resultado = (num%2 === 0) ? "par" : "impar"
console.log(`o número ${num} é ${resultado}`)