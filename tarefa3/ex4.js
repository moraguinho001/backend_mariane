const input = require("readline-sync")
const alunos = [
{ id: 1, nome: "Ana", nota: 8.5 },
{ id: 2, nome: " Bruno ", nota: 7.0 },
{ id: 3, nome: " Carlos ", nota: 9.2 },
{ id: 4, nome: " Diana ", nota: 5.5 },
{ id: 5, nome: " Pedro ", nota: 6.0 }
];
alunos.push({ id: 6, nome: " Maria ", nota: 10.0 });
console.log(alunos.length);
const comSituacao = alunos.map(a => {
return {
nome: a.nome ,
nota: a.nota ,
situacao: a.nota >= 7 ? " Aprovado " : " Reprovado "
};
});
console.log(comSituacao);