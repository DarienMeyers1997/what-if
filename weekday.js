const prompt = require("prompt-sync")({sigint: true});





let enterDate = Number(prompt("Please enter numbers 1-7: "))


if(enterDate === 1){
    console.log("Monday")
}else if(enterDate === 2){
    console.log("Tuesday")
}else if(enterDate === 3){
    console.log("Wednesday")
}else if(enterDate === 4){
    console.log("Thursday")
}else if(enterDate === 5){
    console.log("Friday")
}else if(enterDate === 6){
    console.log("Friday")
}else if(enterDate === 7){
    console.log("Friday")
}else {
    console.log("Error")
}