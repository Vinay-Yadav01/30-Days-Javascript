let book = {
  author: "Vinay Yadav",
  title: "Journey of a Developer",
  year: 2024,
};

// console.log(book);
// console.log(book.author);
// console.log(book.title);

book.getDetails = () => {
  return `${book.title} was written by ${book.author}`;
};

// console.log(book);
// console.log(book.getDetails); //It gives the function definition i.e Only reference of function
// console.log(book.getDetails()); //It gives the output of function i.e the return value of function

let changeYear = function (year) {
  //book.year = year; Both can used to access the property of book object
  this.year = year; //But this is more preferable as it helps us to take the reference of the object itself which we want to update
};

book.changeYear = changeYear;

// console.log(book);
// book.changeYear(2025);
// console.log(book);

let library = {
  name: "Vinay's Library",
  books: [book, book, book],
};

// console.log(library);
// console.log(`Name of Library: ${library.name}`);
// console.log(`Title of Books in Library:`);
// console.log(library.books.forEach((book) => console.log(book.title))); //This will print undefined as forEach returns undefined
// library.books.forEach((book) => console.log(book.title));

// book.getBookDetails = () => {
//   return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
// };                                       //This will not work as arrow function does not have its own this keyword

book.getBookDetails = function () {
  return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
}; // This will work as it has its own this keyword

// console.log(`Details of Books in Library:`);
// console.log(book.getBookDetails());

// console.log(book)

// If we create a function inside an object using arrow function then it will not have its own this keyword
// If we create a function inside an object using normal function then it will have its own this keyword

//If we first create a function and then assign it to an object then it will not shown as anonymous function in object
//But if we directly create a function inside an object then it will shown as anonymous function in object

// for (const key in book) {
//   const element = book[key];
//   console.log(key, element);
// } //This will print all the properties of book object and for methods it will print the function definition

// for (const key in book) {
//   const element = book[key];
//   console.log(`${key}: ${element}`);
// } //This will print all the properties of book object and for methods it will print the complete function with how it is defined either arrow or normal

console.log(Object.keys(book)); //This will print all the properties of book object
console.log(Object.values(book)); //This will print all the values of properties of book object and for methods it will print the function definition
