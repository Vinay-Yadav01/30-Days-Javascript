// let username = "vinay";
// localStorage.setItem("username", username);
// let name = localStorage.getItem("username");
// console.log(name)

// let obj = {
//     name: "vinay",
//     age: 21
// }

// localStorage.setItem("user", JSON.stringify(obj));
// let user = JSON.parse(localStorage.getItem("user"));
// console.log(user);

// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let username = document.getElementById("name").value;
//   let email = document.getElementById("email").value;

//   let user = {
//     username,
//     email,
//   };
//   localStorage.setItem("user", JSON.stringify(user));
// });

// function getUser() {
//   let user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);
// }

// function logLocalStorage() {
//     console.log('Current localStorage content:');
//     // Iterate over all items in localStorage
//     for (let i = 0; i < localStorage.length; i++) {
//         // Get the key of the current item
//         const key = localStorage.key(i);
//         // Get the value associated with the key
//         const value = localStorage.getItem(key);
//         // Log the key and value
//         console.log(`${key}: ${value}`);
//     }
// }

// logLocalStorage();
// localStorage.removeItem('user');
// logLocalStorage();

// let str = "vinay";
// sessionStorage.setItem("name", str);
// let name = sessionStorage.getItem("name");
// console.log(name);

// let user ={
//     name: "vinay",
//     age: 21
// }

// sessionStorage.setItem("user", JSON.stringify(user));
// let data = JSON.parse(sessionStorage.getItem("user"));
// console.log(data);

// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let username = document.getElementById("name").value;
//   let email = document.getElementById("email").value;

//   let user = {
//     username,
//     email,
//   };
//   sessionStorage.setItem("user", JSON.stringify(user));
// });

// function getUser() {
//   let user = JSON.parse(sessionStorage.getItem("user"));
//   console.log(user);
// }

// function logSessionStorage() {
//     console.log('Current sessionStorage content:');
//     // Iterate over all items in sessionStorage
//     for (let i = 0; i < sessionStorage.length; i++) {
//         // Get the key of the current item
//         const key = sessionStorage.key(i);
//         // Get the value associated with the key
//         const value = sessionStorage.getItem(key);
//         // Log the key and value
//         console.log(`${key}: ${value}`);
//     }
// }

// logSessionStorage();
// sessionStorage.removeItem('user');
// logSessionStorage();

// function saveData(key, value) {
//   localStorage.setItem(key, value);
//   sessionStorage.setItem(key, value);
// }

// function getData(key) {
//   console.log("Local Storage: ");
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     console.log(`${key}: ${value}`);
//   }
//   console.log("Session Storage: ");
//   for (let i = 0; i < sessionStorage.length; i++) {
//     const key = sessionStorage.key(i);
//     const value = sessionStorage.getItem(key);
//     console.log(`${key}: ${value}`);
//   }
// }

// saveData("name", "vinay");
// saveData("age", "21");
// saveData("email", "example@email.com");


function clearData() {
    localStorage.clear();
    sessionStorage.clear();
}

function check() {
    return localStorage.length === 0 && sessionStorage.length === 0;
}

clearData();
console.log(check());