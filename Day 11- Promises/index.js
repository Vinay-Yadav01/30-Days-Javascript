// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 2000);
// });

// promise1.then((value) => {
//   console.log(value);
// });

console.log("Checking....");

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.round(Math.random() * 100) < 50) {
//       resolve("Promise 2 resolved");
//     }
//     reject("Promise 2 rejected");
//   }, 2000);
// });

// promise2
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://api.github.com/users/Vinay-Yadav01") //For Error you can edit username
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// async function callLater(){
//     const value = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello");
//         }, 2000);
//     }).then((value) => {
//         console.log(value);
//     });
//     console.log("World");
// } // World will be printed first then Hello

// async function callLater() {
//   const value = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 2000);
//   });
//   console.log(value);
//   console.log("World");
// } // Hello will be printed first then World

// callLater();

// async function githubCall(url) {
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// githubCall("https://api.github.com/users/Vinay-Yadav01");

// Promise.all([
//   fetch("https://api.github.com/users/Vinay-Yadav01"),
//   fetch("https://api.github.com/users/Vinay-Yadav01/repos"),
// ])
//   .then((responses) => {
//     return Promise.all(
//       responses.map((response) => {
//         return response.json();
//       })
//     );
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // This will give you data of user and repos of user and promise will be resolved only when all promises are resolved

// Promise.race([
//   fetch("https://api.github.com/users/Vinay-Yadav01"),
//   fetch("https://api.github.com/users/Vinay-Yadav01/repos"),
// ])
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // This will give you data of user and promise will be resolved only when first promise is resolved
