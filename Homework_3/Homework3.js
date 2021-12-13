//Task 1
const arr = [2, 3, 4, 5];
let sum = 1;
    for(let i in arr){
        sum *= arr[i];
    }
console.log("Sum of numbers: " + sum);

let i = 0;
let sum1 = 1;
	while (i < arr.length) {    
        sum1  *= arr[i++]; 
	}
    console.log("Sum of numbers: " + sum1 );
	
//Task 2
for(let i = 0; i <= 15; i++){
    switch (true){
        case(i % 2 === 0):
        console.log(i + " is even");
        break;
        default:
        console.log(i + " is odd");
    }
}

//Task 3
function  randArray(k){
    const arr = [];
    for(let i = 0; i < k; i++){
       arr[i] =  Math.floor(Math.random() * 500) + 1;
    }
    console.log("Array: " + arr);
}
randArray(5);

//Task 4
let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));

function raiseToDegree(a,b){
    console.log("Exponentiation: " + a ** b);
}
raiseToDegree(a, b);

//Task 5
function findMin(){
    let min = arguments[0];
    for(i = 1; i , arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(-5, -0.2, 6, -7, 56, 3, 6, -1, 0 ,6 ,0.6));

//Task 6
const arr2 = [1,2,3,5,7,3,4,5];
function findUnique(arr2){
    const arr3 = Array.from(new Set(arr2));
    if(arr2.length > arr3.length){
        console.log("false");
    }else{
        console.log("true");
    }
}
findUnique(arr2);

//Task 7
function lastElem(arr3, x){
    if (x == undefined || x == 0){
        x = 1;
    }
    console.log("Last elements: " + arr3.slice(-x));
}
lastElem([3, 4, 10, -5],2);
// const arr3 = [1,2,3,4,7,3,4,5];
// let x = parseInt(prompt("Enter x: "));
// function lastElem(arr3, l){
//     console.log("Last elements: " + arr3.slice(-x));
// }
// lastElem(arr3, x);
//Task 8
function upperCase(text){
    text = text.toLowerCase().split(/\s+/).map(s=>s[0].toUpperCase() + s.slice(1)).join(' ');
    console.log("Output string: " + text);
}
upperCase("i love java script");
