const input = require("readline-sync");
const alunos = [];
const readline_sync = console.log(alunos[0]);
const objeto = [
{ nome: "Mariane", nota: 10.00 },
{ nome: "Pedro Guedes", nota: 9.00 },
{ nome: "Eduarda", nota: 11.00 },
{ nome: "Emilly", nota: 8.00 },
{ nome: "Pedro Cassiano", nota: 7.00 }
];
const comSituacao = objeto.map(a => {
return {
nota: a.nota >= 7 ? "Aprovado" : "Reprovado",
};
});
console.log(comSituacao);

let aprovado = objeto.filter((a) =>{
    if(a.nota >= 7){
        return a
    }
})
console.log(`Nome: ${aprovado[0].nome}`)
console.log(`Nome: ${aprovado[1].nome}`)
console.log(`Nome: ${aprovado[2].nome}`)
console.log(`Nome: ${aprovado[3].nome}`)
console.log(`Nome: ${aprovado[4].nome}`)

function calcularMedia(alunos.nota){
const soma = "Mariane.nota" + "Pedro Guedes.nota" + "Eduarda.nota" + "Emilly.nota" + "Pedro Cassiano.nota";
const media = soma / 3;
return media;
}
console . log (calcularMedia(alunos.nota));