const prompt = require("prompt-sync")({sigint: true});




let weight = Number(prompt("Enter Earth weight."));
console.log("Please enter the number of the planet you will be traveling to using the following system. 1.Venus, 2.Mars, 3.Jupiter, 4.Saturn,5.Uranus,6.Neptune" )
letPlanetNum = Number(prompt("> "))





console.log(weight);
console.log(planetNum);
let planetNum = true



if(planetNum === 1){
    console.log(("You picked Venus"))
    console.log(`Your weight needs to be: ${weight * 0.78}`)
}