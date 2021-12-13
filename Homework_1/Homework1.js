//Task 2
console.log("Рябошапка");

//Task 3
let a = 1;
let b = 2;
alert("Переменная а = " + a);
alert("Переменная b = " + b);
a = b;
alert("Переменная а = " + a);
alert("Переменная b = " + b);

//Task 4
let any;
const five = {
    String: "Name",
    Number: 123,
    Boolean: true,
    Undefined: any,
    Null: null
};

//Task 5
let isAdult = confirm("Are you 18 years old?");
console.log(isAdult);

//Task 6
let name = "Egor";
let surname = "Ryaboshapka";
let group = 654;
let yearOfbirth = 2000;
let inRelationship = true;
let something;
let nullVariable = null;

console.log(typeof group);
console.log(typeof inRelationship);
console.log(typeof name);
console.log(typeof nullVariable);
console.log(typeof something);



//Task 7
let login = prompt("Enter your login:");
let email = prompt("Enter your email");
let password = prompt("Enter your password");
alert("Dear " + login + ", your email is " + email + ", your password is " + password);

//Task 8
let hour = prompt("Enter hours:",);
let days = prompt("Enter days:",);
let months = prompt("Enter months:",);

calcHour = hour * 3600;
calsDays = days * 86400;
calsMonths = months * 2678400;
alert(hour + " hours = " + calcHour + " seconds");
alert(days + " days = " + calsDays + " seconds");
alert(months + " months = " + calsMonths + " seconds");

