const input = require("readline-sync");
let palavra = input.question("Digite uma palavra: ");
let letra = input.question("Digite uma letra: ");
function contarLetra(palavra, letra){
for(let i=0; i<.length; i++){
    if(palavra[i] === letra){
        console.log(`A letra "${letra}" aparece na palavra "${palavra}" ${i} vezes`);
    }
}
}