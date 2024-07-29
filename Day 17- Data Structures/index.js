// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(data) {
//     let newNode = new Node(data);
//     if (this.head == null) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next != null) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   delete(data) {
//     let current = this.head;
//     let prev = null;
//     while (current != null) {
//       if (current.data == data) {
//         if (prev == null) {
//           this.head = current.next;
//         } else {
//           prev.next = current.next;
//         }
//         return;
//       }
//       prev = current;
//       current = current.next;
//     }
//   }

//   display() {
//     let current = this.head;
//     while (current != null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// let linkedList = new LinkedList();
// linkedList.insert(10);
// linkedList.insert(20);
// linkedList.insert(30);
// linkedList.insert(40);
// linkedList.display();
// linkedList.delete(20);
// linkedList.display();

// class Stack{
//     constructor(){
//         this.data = [];
//         this.top = -1;
//     }
//     insert(data){
//         if(this.top==-1){
//             this.data.push(data);
//             this.top++;
//         }else{
//             this.top++;
//             this.data.push(data);
//         }
//     }
//     delete(){
//         if(this.top==-1){
//             return;
//         }else{
//             this.data.pop();
//             this.top--;
//         }
//     }
//     display(){
//         for(let i=this.top;i>=0;i--){
//             console.log(this.data[i]);
//         }
//     }
// }

// let stack = new Stack();
// stack.insert(10);
// stack.insert(20);
// stack.insert(30);
// stack.insert(40);
// stack.display();
// stack.delete();
// stack.display();

// class Queue {
//   constructor() {
//     this.data = [];
//     this.front = -1;
//     this.rear = -1;
//   }
//   insert(data) {
//     if (this.front == -1) {
//       this.data.push(data);
//       this.front++;
//       this.rear++;
//     } else {
//       this.rear++;
//       this.data.push(data);
//     }
//   }
//   delete() {
//     if (this.front == this.rear) {
//       return;
//     } else {
//       this.data.shift();
//       this.rear--;
//     }
//   }
//   display() {
//     for (let i = this.front; i < this.rear; i++) {
//       console.log(this.data[i]);
//     }
//   }
// }

// let queue = new Queue();
// queue.insert(10);
// queue.insert(20);
// queue.insert(30);
// queue.insert(40);
// queue.display();
// queue.delete();
// queue.display();


// class TreeNode{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// let root = new TreeNode(10);
// root.left = new TreeNode(20);
// root.right = new TreeNode(30);
// root.left.left = new TreeNode(40);
// root.left.right = new TreeNode(50);
// root.right.left = new TreeNode(60);
// root.right.right = new TreeNode(70);

// function inorder(root){
//     if(root==null){
//         return;
//     }
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
// }

// inorder(root);

