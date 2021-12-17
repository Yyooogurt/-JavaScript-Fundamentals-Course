//Task 1
document.getElementById("test").innerHTML = "Last";
document.body.children[0].innerHTML = "Last";
document.getElementsByTagName('div').innerHTML = "Last";

//Task 2
// 1)
let img = document.getElementsByClassName("image")[0];
img.src = "cat.jpeg";
alert(img.outerHTML);

// 2)
// let img = document.querySelector("img");
// img.setAttribute("src", "cat.jpeg");

//Task 3
let div = document.querySelectorAll("#text p");
for(let i = 0; i < div.length; i++){
    console.log("Selector text " + i + " : " + div[i].innerText);
}

//Task 4
// 1)
let ul = document.querySelector("ul#list");
list = ul.querySelectorAll("li");
alert(list[0].innerText);
alert(list[4].innerText);
alert(list[1].innerText);
alert(list[3].innerText);
alert(list[2].innerText);

// 2)
// const x = document.getElementById("list");
// const y = x.getElementsByTagName("li");
// alert(y[0].innerText);
// alert(y[4].innerText);
// alert(y[1].innerText);
// alert(y[3].innerText);
// alert(y[2].innerText);

// 3)
// const parentEl = document.getElementById("list");
// const firstEl = parentEl.childNodes[0].innerHTML;
// const lastEl = parentEl.childNodes[4].innerHTML;
// const secondEl = parentEl.childNodes[1].innerHTML;
// const fourthEl = parentEl.childNodes[3].innerHTML;
// const thirdEl = parentEl.childNodes[2].innerHTML;

// 4)
// const firstEl = document.getElementById("list").firstChild.innerHTML;
// const lastEl = document.getElementById("list").lastChild.innerHTML;
// const secondEl = document.getElementById("list").firstChild.nextSibling.innerHTML;
// const fourthEl = document.getElementById("list").lastChild.previousSibling.innerHTML;
// const thirdEl = document.getElementById("list").firstChild.nextSibling.nextSibling.innerHTML;

//Task 5
let h1 = document.querySelector("h1");
let p = document.querySelectorAll("#myDiv p");
let ul1 = document.getElementById("myList");
let span = document.querySelector("span");
h1.style.background="#00800082";
ul1.style.display="flex";
ul1.style.listStyle="none";
span.style.display="none";
p[0].setAttribute("style","font-weight:bold");
p[1].setAttribute("style","color:red");
p[2].setAttribute("style","text-decoration: underline"); 
p[3].setAttribute("style","font-style: oblique");

// document.querySelector("h1").style.backgroundColor = "#00800082";
// document.getElementById("myDiv").children[0].style.fontWeight = "bold";
// document.getElementById("myDiv").children[1].style.color = "red";
// document.getElementById("myDiv").children[2].style.textDecoration = "underline";
// document.getElementById("myDiv").children[3].style.fontStyle = "Italic";
// document.getElementById("myList").style.listStyle="none";
// document.getElementById("myList").style.display="flex";
// document.getElementsByTagName("span")[0].style.display="none";

//Task 6
let text1 = prompt("Enter input1:");
let text2 = prompt("Enter input2:");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
input1.value = text1;
input2.value = text2;

let input1Value = input1.value;
let input2Value = input2.value;

input1.value = input2Value;
input2.value = input1Value;

//Task 7
// document.body.innerHTML = `<body>
// <main class="mainClass check item"> 	
//       <div id="myDiv">
//  <p>First paragraph</p>           
// </div>
// </main> 
// </body>`;