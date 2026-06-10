const input   = require("readline-sync")
let soma=0
for(let i=0; i<5; i++) {
let nota = input.questionInt(`digite o valor:`)
soma = soma+nota/5
}
let media = soma/5
if(media>=7){
console.log(`aprovado`)
}else if (media>=5){
    console.log(`recuperação`)
}
else{
    console.log(`reprovado`)
}
