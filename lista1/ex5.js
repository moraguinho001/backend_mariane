const input = require("readline-sync");
    let contador = "1"

for(let i=0; i<100; i++){
    let contador = 1
      console.log(contador);

    for(let j=0; j<99; j++){
    let um_a_cem = contador + " "
    contador++
        console.log(contador);

        if(contador %3 == 0){
console.log("Fizz");
}

else if(contador %5 == 0){
console.log("Buzz");

}

const todos = (contador %3 == 0 && contador %5 == 0);
if(todos){
    console.log("FizzBuzz");
}
}
break;
}
