// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let target = 5;

// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// console.log(twoSum(arr, target)); // [0, 3]

// function reverseNumber(num) {
//     let reverse = parseInt(num.toString().split('').reverse().join(''));
//     if(num < 0) {
//         return -reverse;
//     }
//     return reverse;
// }

// console.log(reverseNumber(123)); // 321 
// console.log(reverseNumber(-123)); // -321
// console.log(reverseNumber(120)); // 21
// console.log(reverseNumber(0)); // 0

// function isPalindrome(num) {
//     if(num < 0) {
//         return false;
//     }
//     return num === parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     insert(index, value) {
//         if(index >= this.length) {
//             return this.append(value);
//         }
//         if(index === 0) {
//             return this.prepend(value);
//         }
//         const newNode = new Node(value);
//         let currentNode = this.head;
//         for(let i = 1; i < index; i++) {
//             currentNode = currentNode.next;
//         }
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//         this.length++;
//         return this;
//     }

//     remove(index) {
//         if(index >= this.length) {
//             return this;
//         }
//         let currentNode = this.head;
//         for(let i = 1; i < index; i++) {
//             currentNode = currentNode.next;
//         }
//         currentNode.next = currentNode.next.next;
//         this.length--;
//         return this;
//     }

//     printList() {
//         let currentNode = this.head;
//         while(currentNode !== null) {
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }


// // const myLinkedList = new LinkedList(10);
// // myLinkedList.append(5);
// // myLinkedList.append(16);
// // myLinkedList.prepend(1);
// // myLinkedList.insert(2, 99);
// // myLinkedList.insert(20, 88);


// function mergeSortedLL(list1, list2) {
//     const mergedLL = new LinkedList(-1);
//     let currentNode1 = list1.head;
//     let currentNode2 = list2.head;
//     while(currentNode1 !== null && currentNode2 !== null) {
//         if(currentNode1.value < currentNode2.value) {
//             mergedLL.append(currentNode1.value);
//             currentNode1 = currentNode1.next;
//         } else {
//             mergedLL.append(currentNode2.value);
//             currentNode2 = currentNode2.next;
//         }
//     }
//     while(currentNode1 !== null) {
//         mergedLL.append(currentNode1.value);
//         currentNode1 = currentNode1.next;
//     }
//     while(currentNode2 !== null) {
//         mergedLL.append(currentNode2.value);
//         currentNode2 = currentNode2.next;
//     }
//     return mergedLL;
// }

// const list1 = new LinkedList(1);
// list1.append(2);
// list1.append(4);
// list1.append(5);
// list1.append(7);

// const list2 = new LinkedList(3);
// list2.append(6);
// list2.append(8);
// list2.append(9);
// list2.append(10);

// const mergedLL = mergeSortedLL(list1, list2);
// mergedLL.printList();

// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(value) {
//         this.stack.push(value);
//     }

//     pop() {
//         return this.stack.pop();
//     }

//     peek() {
//         return this.stack[this.stack.length - 1];
//     }

//     isEmpty() {
//         return this.stack.length === 0;
//     }
// }

// function validParenthesis(str) {
//     const stack = new Stack();
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === '(') {
//             stack.push(')');
//         } else if(str[i] === '{') {
//             stack.push('}');
//         } else if(str[i] === '[') {
//             stack.push(']');
//         } else {
//             if(stack.isEmpty() || stack.pop() !== str[i]) {
//                 return false;
//             }
//         }
//     }
//     return stack.isEmpty();
// }

// console.log(validParenthesis('()')); // true
// console.log(validParenthesis('()[]{}')); // true
// console.log(validParenthesis('(]')); // false