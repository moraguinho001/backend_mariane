const input   = require("readline-sync")
let impar = 0
let par = 0
for(let i=1; i<=10; i++){
    let numero = input.questionInt(`digite o ${i}numero: `)
    if(numero%2===0){
        par++
    } else {
        impar++
    }

}
console.log(`os numeros impares sao: ${impar}`)
console.log(`os numeros pares sao: ${par}`)
