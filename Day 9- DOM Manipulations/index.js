document.getElementById("heading").innerText = "Vinay Yadav";
// document.getElementsByClassName("intro").style.backgroundColor = "blue"; // Not working
document.getElementsByClassName("intro")[0].style.backgroundColor = "blue"; // working

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
document.body.appendChild(div);

let li = document.createElement("li");
li.innerText = "Services";
document.querySelector("ul").appendChild(li);

// let p = document.querySelector(".intro");
// p.remove();

let ul = document.querySelector("ul");
ul.removeChild(ul.lastChild);

let input = document.querySelector("input");
input.setAttribute("type", "checkbox");

let heading = document.getElementById("heading");
heading.setAttribute("style", "color: red;");
heading.removeAttribute("style");

let p = document.querySelector(".intro");
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  p.innerText = "Hello World";
});

heading.addEventListener("mouseover", function () {
  heading.style.borderColor = "red";
});

heading.addEventListener("mouseout", function () {
  heading.style.borderColor = "white";
});
