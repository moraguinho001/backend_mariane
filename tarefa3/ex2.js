const input   = require("readline-sync")
const produtos = [
    {id: 1, nome: "nurggets", preco: 20.00},
    {id: 2, nome: "linguiça", preco: 25.00},
    {id: 3, nome: "calabresa", preco: 60.00},
    {id: 4, nome: "salamitos", preco: 15.00}
];
for(let i=0; i<produtos.length; i++){
let produto = produtos[i]
console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: ${produto.preco}`)
}
const NUevoPROducto = produtos.push({id: 5, nome: "doguinho", preco: 8.50})
console.log(`Um novo produto foi adicionado`)
console.log(`O novo tamanho do array é: ${NUevoPROducto} produtos`)

produtos.find(id === 3)
console.log(`Nome: ${produto.nome}`)

produtos.filter(preco > 50.00)
console.log(`Nome: ${produto.nome}`)