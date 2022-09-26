const prompt = require("prompt-sync")({sigint: true});





let num = Number(prompt("Enter a number: "))
console.log(num);


/*
divisible by 3 -> write fizz
divisible by 5 -> write buzz
divisible by both -> write fizzbuzz
*/

if(num % 15 === 0){ //Diviible by 3 and 5
    console.log("fizzbuzz")
}else if(num % 3 === 0){
    console.log("Fizz")
}else if(num % 5 === 0){
    console.log("Buzz")
}