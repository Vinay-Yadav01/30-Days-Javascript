const obj = {
  name: "Vinay",
  age: 21,
};

// console.log(`Name: ${obj.name}, Age: ${obj.age}`);

let str = `Hello Everyone,
    This is Vinay
    I am a Software Developer`;
// console.log(str);

arr1 = [1, 2, 3, 4, 5];
arr2 = [...arr1];

// console.log(arr2[0]);
// console.log(arr2[1]);

arr2[0] = 100;
arr2[4] = 500;
// console.log(arr1);
// console.log(arr2);

let book1 = {
  title: "Book1",
  author: "Vinay",
};

let book2 = { ...book1 };
// console.log(book2.title);
// console.log(book2.author);

book2.title = "Book2";
// console.log(book1);
// console.log(book2);

function print(...args) {
  console.log(args);
}

// print(1);
// print(1, 2);
// print(1, 2, 3, 4, 5);
// print(book1, book2);
// print(arr1, arr2);
// print(book1, arr1);

function print({ ...args }) {
  console.log(args);
}
// It will take only one object which can have any properties as argument if it get it will print them else it will print empty object but in case of array it will print convert array into object by taking its index as key and array element as value and print it

// print(1);
// print(1, 2);
// print(1, 2, 3, 4, 5);
// print(book1, book2);
// print(arr1, arr2);
// print(book1, arr1);

function prod(num1, num2 = 1) {
  return num1 * num2;
}

// console.log(prod(2, 3));
// console.log(prod(2));

let title = "Book";
let author = "Vinay";

let getDetails = function () {
  console.log(`Title: ${this.title}, Author: ${this.author}`);
};

book1 = { title, author, getDetails };
// console.log(book1);
// book1.getDetails();

let prop1 = "name";
let prop2 = "age";
let method = "greetMe";

let obj1 = {
  [prop1]: "Vinay",
  [prop2]: 21,
  [method](){
    console.log(`Hello Everyone, my name is ${this.name} and my age is ${this.age}`);
  }
};
console.log(obj1);
obj1.greetMe();
