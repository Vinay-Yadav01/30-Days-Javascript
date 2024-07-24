// function printNumber(num) {
//   if (num instanceof Number) {
//     console.log(num);
//   } else {
//     throw new Error("Not a number");
//   }
// }

// try {
//   printNumber("hello");
// } catch (e) {
//   console.log(e);
// }

// function divide(num1, num2) {
//   if (num2 === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return num1 / num2;
// }
// try {
//   console.log(divide(10, 5));
// } catch (error) {
//   console.log(error);
// }

// function divide(num1, num2) {
//   if (num2 === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return num1 / num2;
// }
// try {
//   console.log(divide(10, 5));
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Executed");
// }

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// function divide(num1, num2) {
//   if (num2 === 1) {
//     throw new CustomError("Cannot divide by one");
//   }
//   return num1 / num2;
// }

// try {
//   console.log(divide(10, 1));
// } catch (error) {
//   console.log(error);
// }

// class StringError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// function checkString(str) {
//   if (str === "") {
//     throw new StringError("Empty string");
//   }
//   return str;
// }

// try {
//     checkString("");
// } catch (error) {
//     console.log(error);
// }

// let promise = new Promise((resolve, reject) => {
//   if (Math.round(Math.random() * 100) <= 50) {
//     resolve("Success");
//   } else {
//     throw Error("Failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// function randomPromiseNew() {
//   return new Promise((resolve, reject) => {
//       const randomNum = Math.random();

//       if(randomNum >= 0.5) {
//           resolve(randomNum);
//       } else {
//           reject(new Error("Promise rejected"));
//       }
//   })
// }

// async function handleProm() {
//   try {
//       const result = await randomPromiseNew();
//       console.log("promise resolved " + result );

//   } catch(error) {
//       console.error("Promise rejected: " + error.message)

//   }
// }


// handleProm();


// fetch("https://api.github.com/users/Vinay-Yadav0")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function fetchData() {
//   try {
//     let response = await fetch("https://api.github.com/users/Vinay-Yadav0");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();
