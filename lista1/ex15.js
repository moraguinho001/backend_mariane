const input = require("readline-sync");
const produtos = [];
const readline_sync = console.log(produtos[0]);
const objeto = [
{ id: 1, nome: "linguiça", preco: 15.00 },
{ id: 2, nome: "calabresa", preco: 60.00 },
{ id: 3, nome: "salamitos", preco: 25.00 },
{ id: 4, nome: "hamburguer do siri cascudo", preco: 20.00 },
{ id: 5, nome: "formula secreta", preco: 667.00 }
];
const encontrado = produtos.find(p => p.id === 3)
console.log(`Nome: ${encontrado.nome}`)

let produto = produtos.filter((p) =>{
    if(p.preco >100.00){
        return p
    }
})
console.log(`Nome: ${produto[0].nome}`)

const comSituacao = objeto.map(a => {
return {
nome: a.nome,
situacao: a.nome === "linguiça" ? "calabresa" : "salamitos" ? "hamburguer do siri cascudo" : "formula secreta"
};
});
console.log(comSituacao);

const coisa = ['linguiça', 'calabresa', 'salamitos', 'hamburguer do siri cascudo', 'formula secreta'];
coisa.forEach((coisa, indice) => {
  console.log(`${indice}: ${coisa}`);
});