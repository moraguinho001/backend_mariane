const input = require("readline-sync");
let base = input.questionInt(`Qual a base do triangulo?`)
let altura = input.questionInt(`Qual a altura do triangulo?`)
let area = (altura * base)/2
let perimetro = (altura * 2) + base
console.log(`A area do triangulo é: ${area}; E o perimetro é: ${perimetro}`)