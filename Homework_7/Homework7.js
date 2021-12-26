// // Task 1
// // 1)
// let win = window.open("about:blank", "New", "width=300,height=300");
// win.moveTo(60,180);
// // 2, 3, 4)
// function resizeBy(){win.resizeBy(500,500);}
// function moveTo(){win.moveBy(2000,200);}
// function close(){win.close(500,500);}

// window.setTimeout(resizeBy, 2000); 
// window.setTimeout(moveTo, 2000); 
// window.setTimeout(close, 2000); 

// // Task 2
// function changeCSS(){
//     let text = document.getElementById("text");
//     text.style.color = "orange";
//     text.style.fontSize = "20px";
//     text.style.fontFamily = "Comic Sans MS";
// }
// document.getElementById("button").onclick = changeCSS;

// // Task 3
// function blue(){document.body.style.backgroundColor = "#0000ff73";}
// function pink(){document.body.style.backgroundColor = "#ff00b173";}
// function mouseDown(){document.body.style.backgroundColor = "#463421ed";}
// function mouseUp(){document.body.style.backgroundColor = "#3a323200";}
// function linkMouseOver(){document.body.style.backgroundColor = "#e7d242e3";}
// function linkMouseDown(){document.body.style.backgroundColor = "#e7d24200";}

// document.getElementById("blue").onclick = blue;
// document.getElementById("pink").ondblclick = pink;
// document.getElementById("brown").onclick = brown;
// let linkId = document.getElementById("link");
// linkId.addEventListener("mouseover", linkMouseOver, false);
// linkId.addEventListener("mouseout", linkMouseDown, false);

// // Task 4
// function changeAndDelete(){
//     let option = document.getElementById("select");
//     option.remove(option.selectedIndex);
// }
// document.getElementById("button").onclick = changeAndDelete;

// // Task 5
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
// 	console.log("I was pressed!");
// });
// button.addEventListener("mouseover", function() {
// 	console.log("Mouse on me!");
// });
// button.addEventListener("mouseout", function() {
// 	console.log("Mouse is not on me!");
// });

// // Task 6
// document.getElementById("p").innerHTML="Width: " + window.innerWidth + ", " + "Height: " + window.innerHeight;
// window.onresize = function() {  
//     return document.getElementById("p").innerHTML="Width: " + window.innerWidth + ", " + "Height: " + window.innerHeight;
// };

//Task 7

const cities = {
    "ger": ["Berlin","Fankfurt","Hamburg"],
    "usa": ["Berlin","New-York","Chikago"],
    "ukr": ["Dnipro","Kyiv","Odessa"],
}

let select = document.getElementById("country");
select.addEventListener("change", createList);
select.addEventListener("change", toParagraph);

let city_select = document.getElementById("cities");
city_select.addEventListener("change", toParagraph);

function createList(){
    city_select.innerHTML = "";
    let selected_country = select.value;
    for (let i = 0; i < cities[selected_country].length; i++) {
        let new_option = document.createElement("option");
        new_option.innerHTML = cities[selected_country][i];
        city_select.appendChild(new_option);
    }
}

let parag = document.querySelector("p");
function toParagraph(){
    parag.innerHTML = "";
    parag.innerHTML = select.options[select.selectedIndex].text + ", " 
    + city_select.options[city_select.selectedIndex].text; 
}