class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
  static getDetails() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

// const person1 = new Person('John', 30);
// person1.greet();
// person1.age = 31;
// console.log(person1.age); // 31

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
    Student.incrementCount();
  }

  getStudentId() {
    return `${this.name}'s Student Id is ${this.studentId}`;
  }

  greeting() {
    return `Hello ${this.name} Your Student Id is ${this.studentId}`;
  }

  static incrementCount() {
    if (!this.studentCount) {
      this.studentCount = 0;
    }

    this.studentCount++;
  }

  static getStudentCount() {
    return `${this.studentCount} created`;
  }
}

const student = new Student("vinay", 542343245);
const student2 = new Student("vinayak", 542343245);
console.log(student.getStudentId());
console.log(student.greeting());

console.log(Student.getStudentCount());

// const student1 = new Student('Jane', 123);
// student1.greet();
// console.log(student1.id);

// Person.getDetails(); // Print without error
// Person.greet(); // Error

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// }

// const person1 = new Person("John", "Doe");
// console.log(person1.fullName); // John Doe
// person1.fullName = "Jane Smith";
// console.log(person1.fullName); // Jane Smith
