//Task 1
let x = 1;
let y = 2;
console.log("Res-1");
let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"
console.log("");

console.log("Res-2");
x = !!1;
let res2 = !!x + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"
console.log("");

console.log("Res-3");
let res3 = x != y;
console.log(res3); // true
console.log(typeof res3); // "boolean"
console.log("");

console.log("Res-4");
let res4 = String(x) * y;
console.log(res4); // NaN
console.log(typeof res4); // "number"
console.log("");

//Task 2
let number = prompt("Enter the number:");
// Парне та позитивне
if (number % 2 == 0 && number > 0){
    console.log("This number is paired positive");
}else{
    console.log("This number is not paired or positive");
}
// Кратне числу 7
if (number % 7 > 0 ){
    console.log("The number is not a multiple of 7");
}else{
    console.log("The number is a multiple of 7");
}

// //Task 3
const array = [123, "Name", true, 2];
alert("The number of elements in the array: " + array.length);

array[5] = prompt("Add any value to the array:",);
alert("The fifth element of the array: " + array[5]);

array.shift();
alert(array);

// //Task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let sum = cities[0] + "*" + cities[1] + "*" + cities[2];
console.log(sum);

// //Task 5
let isAdult = parseInt(prompt("Are you 18 years old?"));
if( isAdult < 18 && isAdult > 0){
    alert("You are still too young");
}else if( isAdult >= 18){
    alert("You are adult");
}else{
    alert("Incorrect data");
}

// //Task 6
let a = parseInt(prompt("Enter a:"));
let b = parseInt(prompt("Enter b:"));
let c = parseInt(prompt("Enter c:"));
let p = (a + b + c) / 2;
let check = isNaN(p);

if(check == true){
    alert("Incorrect data");
}else{
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert("The area of ​​the triangle is: " + s.toFixed(3) + " m")

    if(a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == b**2 + a**2){
        console.log("This is a rectangle");
    }else{
        console.log("This is not a rectangle");
    }    
}

//Task 7

let today = new Date();
let hours = today.getHours();
console.log(hours);

// let hours = prompt("Enter hours:");

if(hours >= 23 || hours <=5 ){
    console.log("Good night");
    console.log(hours);
}else if(hours > 5 && hours <= 11){
    console.log("Good morning");
    console.log(hours);
}else if(hours > 11 && hours <= 17){
    console.log("Good day");
    console.log(hours);
}else if(hours > 17 && hours < 23){
    console.log("Good envening");
    console.log(hours);
}else{
    console.log("Incorrect data");
}

switch (true){
    case(hours >= 23 || hours <=5 ):
    console.log("Good night");
    break;
    case(hours > 5 && hours <= 11):
    console.log("Good morning");
    break;
    case(hours > 11 && hours <= 17):
    console.log("Good day");
    break;
    case(hours > 17 && hours < 23):
    console.log("Good evening");
    break;
    default:
    console.log("Incorrect data");
}