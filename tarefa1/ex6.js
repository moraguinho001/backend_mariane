const input   = require("readline-sync")
const secreto=42
let tentativas = 0
while(true){
    let chute = input.questionInt(`digite a senha:`)
    tentativas++
    if(chute===secreto){
console.log(`secreto certo, tentativas${tentativas}`)
        break;
} else if(chute<secreto){
        console.log(`secreto é maior`)
    } else{
        console.log(`o secreto é menor`)
    }


}