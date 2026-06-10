const input   = require("readline-sync")
let numero = input.questionInt(`digite o numero:`)
for(let i=1; i<=10; i++){
console.log(`${numero}*${i} = ${numero*i}`) 
}