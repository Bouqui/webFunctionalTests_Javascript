let i = 0

for (i; i<10; i++){
    console.log(i)
}
const names=["Mark", "Sarah", "Ebony"]
for (let i=0; i<names.length;i++){
    console.log(names[i]);
}

const numbers =[1,2,3,4];
for (let j=0;j<numbers.length;j++){
    console.log(numbers[j]*2)
}

let password ="tomorrow";
let userGuess="";

while (userGuess!== password){
    userGuess=prompt("please enter a your password")
}
alert("login successful")

//5*4*3*2*1
let factorial=1;
let number =5;
let original = number
do{
    factorial =factorial*number;
    number --
}while (number>0)

console.log(original + "factorial is " + factorial)
console.log("I was told to edit it locally ...")