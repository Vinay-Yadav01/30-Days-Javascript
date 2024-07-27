// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//     console.log(counter)
//   }
//   incrementCounter();
//   incrementCounter();
//   incrementCounter();
//   incrementCounter();
// }

// outer();

// function createCounter() {
//   let counter = 0;
//   return function incrementCounter() {
//     counter++;
//     console.log(counter)
//   }
    
// }

// const myCounter = createCounter();
// myCounter();

// function generateID() {
//   let id = Date.now();
//   return function incrementID() {
//     id++;
//     return id;
//   }
    
// }

// const myID = generateID();
// console.log(myID()); // 1722060357010
// console.log(myID()); // 1722060357011


// function greetUser(userName) {
//     return function () {
//         console.log(`Hello, ${userName}!`);
//     };
// }

// const greetAlice = greetUser("Alice");
// greetAlice(); // Hello, Alice!

// function functionArray() {
//     const arr =[];
//     for (let i = 0; i < 3; i++) {
//       arr.push(function () {
//         console.log(i);
//       });
//     }
//     return arr;
// }

// const result = functionArray();
// console.log(result); 
// result[0](); // 0
// result[1](); // 1
// result[2](); // 2
// function arr(){
//     const arr =[];
//     return{
//         add:function(item){
//             arr.push(item);
//         },
//         get:function(){
//             return arr;
//         },
//         remove:function(){
//             arr.pop();
//         }
//     }
// }
// const myArr = arr();
// myArr.add(1);
// myArr.add(2);
// myArr.add(3);
// console.log(myArr.get()); // [1, 2, 3]
// myArr.remove();
// console.log(myArr.get()); // [1, 2]

// function memoize(fn) {
//     const cache = {};
  
//     return function (...args) {
//       const key = JSON.stringify(args);
//       if (cache[key] === undefined) {
//         cache[key] = fn(...args);
//       }
//       return cache[key];
//     };
//   }
  
//   function expensiveCalculation(x) {
//     console.log(`Calculating for ${x}...`);
//     return x * 2;
//   }
  
//   const memoizedCalculation = memoize(expensiveCalculation);
//   console.log(memoizedCalculation(5)); // Logs: "Calculating for 5..." and 10
//   console.log(memoizedCalculation(5)); // Logs: 10 (result is cached)


// function factorial(num, dp){
//     if(dp[num] !== undefined){
//         return dp[num];
//     }
//     if(num === 1){
//         return 1;
//     }
//     dp[num] = num * factorial(num-1, dp);
//     return dp[num];
// }

// const dp = {};
// console.log(factorial(5, dp)); // 120