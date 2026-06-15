const input = require("readline-sync");
let celcius = input.questionInt(`Quantos graus está fazendo?`);
let F = celcius * 1.8 + 32;
console.log(`Hoje está fazendo  ${celcius}C° ou ${F}F°`);
