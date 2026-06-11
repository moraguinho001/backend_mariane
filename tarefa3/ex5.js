const input = require("readline-sync")
const produtos = [];
const readline_sync = console.log(produtos[0]);
const objeto = [
{ id: 1, nome: "linguiça", preco: 15.00 },
{ id: 2, nome: "calabresa", preco: 60.00 },
{ id: 3, nome: "salamitos", preco: 25.00 }
];
let produto = produtos.filter((p) =>{
    if(p.preco >20.00){
        return p
    }
})
console.log(`Nome: ${produto[0].nome}`)
