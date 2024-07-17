// function evenOdd(num) {
//     if(num % 2 === 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("Odd");
//     }
// }

// evenOdd(5); // Odd
// evenOdd(10); // Even

// function square(num) {
//     return num * num;
// }

// let sq = square(3);
// console.log(sq)

// function maximum(num1, num2) {
//     if(num1>num2) console.log(`${num1} is greater`);
//     else if(num1<num2) console.log(`${num2} is greater`);
//     else console.log(`Both are same`)
// }

// maximum(4,9);
// maximum(14,9);
// maximum(9,9);

// function concat(s1, s2) {
//     return s1+s2;
// }

// let concated = concat("hello", " world");
// console.log(concated)

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(4,7));

// let find = (str, ch) => {
//   for (const i of str) {
//     if (i === ch) return true;
//   }
//   return false;
// };

// console.log(find("vinay", "n"));
// console.log(find("vinay", "z"));

// let prod = function(num1, num2=10){
//     return num1*num2;
// }

// console.log(prod(4,5));
// console.log(prod(4));

// let greet = (name="Indian", age=18)=>{
//     console.log(`Hello ${name}, your age is ${age}.`)
// }

// greet("Vinay", 20);
// greet();

// let greet = (name = "Indian", age = 18) => {
//   console.log(`Hello ${name}, your age is ${age}.`);
// };

// let greeting = (func, num) => {
//   while (num--) {
//     func();
//   }
// };

// greeting(greet, 5);


// function mul(num) {
//     return num*10;
// }

// let add =  function(num){
//     return num+num;
// }

// let HOF = (func1, func2, value)=>{
//     const result1 = func1(value);
//     const result2 = func2(result1);
//     return result2;
// }

// console.log(HOF(mul, add, 10))