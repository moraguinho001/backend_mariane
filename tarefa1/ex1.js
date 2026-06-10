const input   = require("readline-sync");
let nome = input.question("Digire seu nome:");
let idade = input.questionInt("Digite sua idade:");
let cidade = input.question("digite sua cidade:");

console.log(`Ola! Meu nome e ${nome}, tenho ${idade} anos e sou de ${cidade}.`);