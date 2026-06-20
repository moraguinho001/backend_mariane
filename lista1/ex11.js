const input = require("readline-sync");
let idade = input.questionInt("Digite sua idade: ");
function podeVotar(idade){
    let resultado = (idade >= 16) ? true : false;
    console.log(resultado);
    }
podeVotar(idade);