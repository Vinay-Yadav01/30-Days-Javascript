// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   document.querySelector("p").innerText = "I am a paragraph";
// });

// let flag = true;
// const img = document.querySelector("img");
// img.addEventListener("dblclick", () => {
//   if (flag) img.style.visibility = "hidden";
//   else img.style.visibility = "visible";
// });

// const key = document.querySelector(".keyPressed");

// document.addEventListener("keydown", (e) => {
//   key.innerText = `Key Pressed: ${e.key}`;
// });

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//   document.querySelector("p").innerText = e.target.value;
// });



let form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from being submitted

  const formData = new FormData(event.target); // Create FormData object from the form
  const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

  console.log(data); // Log the form data
});

let fruits = document.querySelector("#fruits");
fruits.addEventListener("change", (e) => {
  document.querySelector("p").innerText = `You selected: ${e.target.value}`;
});

const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

function addNewItem() {
  let item = document.createElement("li");
  item.textContent = "New Item";
  list.appendChild(item);
}

document.querySelector("#add").addEventListener("click", addNewItem);