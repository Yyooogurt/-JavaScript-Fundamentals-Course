// Task 1
// function upperCase(text){
//      let result = text.match(/\w/);
//     if(result[0] == result[0].toUpperCase()){
//         console.log("String's starts with uppercase character");
//     }else{
//         console.log("String's not starts with uppercase character ");
//     }  
// }
// upperCase('regexp');
// upperCase('RegExp');

// Task 2
// function checkEmail(email){
//     let result = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/.test(email);
//     console.log(result);
// }
// checkEmail("Qmail2@gmail.com");

// Task 3
// function fingDB(text){
//     let result = /d(b+)(d)/ig.exec(text);
//     console.log(result);
// }
// fingDB("cdbBdbsbz");

// Task 4
// function moveString(string){
//     let result = string.replace(/(\w+) (\w+)/, '$2, $1');
//     console.log(result);
// }
// moveString("Java Script");

// Task 5
// function chechNumber(number){
//     let visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(number);
//     let mastPattern = /^(?:5[1-5][0-9]{14})$/.test(number);
//     if (mastPattern == true ){
//         console.log("This is a Mastercard card");
//     }else if(visaPattern == true){
//         console.log("This is a Visa card");
//     }else{
//         console.log("You entered incorrect card details");
//     }
// }
// chechNumber(9999999999999999);
// chechNumber(5375414118031920);

// Task 6
// function checkEmail(email){
//     let result = /^\w+\-?/.test(email);
//     if(result == true){
//         console.log("Email is correct!");
//     }else{
//         console.log("Email is not correct!");
//     }
// }
// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

// Task 7
function checkLogin(login1, login2){
    let resultText = login1.match(/\d\.\d/g);
    let result = login2.match(/\d+/g);
    let resultTest1 = /\d+/g.test(login1);
    let resultTest2 = /\d+/g.test(login2);
    console.log(result);
    console.log(resultTest1);
    console.log(resultText);
    console.log(resultTest2);
}
checkLogin('ee1.1ret3', 'ee1*1ret3');
