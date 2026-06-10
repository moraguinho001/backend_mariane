const input   = require("readline-sync")
let a = input.questionInt("digite o numero a")
let b = input.questionInt("digite o numero b")
console.log(`${a+b}`)
console.log(`${a-b}`)
console.log(`${a*b}`)
if(b===0){
    console.log(`valor indefinido`)
} else {
    console.log(`divisão = ${a/b}`)
}


