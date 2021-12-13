//Task 1
let width = prompt("Enter width:");
let height = prompt("Enter height:");
let result;
function calcRectangleArea(width, height){
    try {
          result = width * height; 
         if (isNaN(result) === true){
             throw new Error("Error, try to enter only numbers");
         }else if(result == 0){
            throw new Error("Error, the field is empty!");
         } 
         alert("Good job!, result: " + result);   
  } catch(error) {
        console.log(error.message);
  }
  console.log('Code after try..catch');
}
calcRectangleArea(width, height);

//Task 2
let age = prompt("Enter your age:");
function checkAge(age){
    try{
        switch(true){
            case(age == 0):
                throw new Error("Error, the field is empty!");      
            case(isNaN(age) == true):
                throw new Error("Error, try to enter only numbers");        
            case(age < 14):
                throw new Error("Error, you are less than 14 years old");
            default:
                alert("You got access!");
        }
    } catch(error){
        console.log(error.message);
    }
}
checkAge(age);

//Task 3
let number = prompt("Enter number of month:");

class MonthException{
    constructor(message){
        this.message = message;
        this.name = "MonthException";
    }
}

function showMonthName(number){
    number = number - 1;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    try{
        if(number < 0){
            throw new MonthException(" The field is empty or negative!");    
        }else if(isNaN(number) == true){
            throw new MonthException(" Try to enter only numbers"); 
        }else if( number > 11){
            throw new MonthException(" There is no such month number"); 
        }else{
            console.log(months[number]);
        }
    }catch(error){
        console.log(error.name + error.message);
    }
}
showMonthName(number);

//Task 4
const ids = [];
for (let i = 0; i < 4;i++){
    let id = parseInt(prompt("Enter id: "));
    ids.push(id);
}

function showUser(id){
    if(id < 0){
        throw new Error("Error: ID must not be negative! " + id);
    }
    return { id: id };
}

function showUsers(ids){
    const arr = [];
    ids.forEach(function (id) {
      try{
        let user = showUser(id);
        arr.push(user);
      } catch(error){
        console.log(error.message);
      }
    });
    console.log(arr);
    return arr;
}
showUsers(ids);

