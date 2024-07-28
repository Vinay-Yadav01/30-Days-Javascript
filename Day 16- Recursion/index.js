// function factorial(num) {
//   if (num == 0 || num == 1) return num;
//   return num * factorial(num - 1);
// }

// console.log(factorial(5)); // 120

// function fib(num) {
//   if (num == 0 || num == 1) return num;
//   return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(5)); // 5

// function sum(arr, index) {
//   if (index >= arr.length) return 0;
//   return arr[index] + sum(arr, index + 1);
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(sum(arr, 0)); // 15

// function maxi(arr, index, max) {
//   if (index >= arr.length) return max;
//   if (arr[index] > max) max = arr[index];
//   return maxi(arr, index + 1, max);
// }

// console.log(maxi(arr, 0, arr[0])); // 5

// function reverse(str, index) {
//   if (index >= str.length) return "";
//   return reverse(str, index + 1) + str[index];
// }

// let str = "hello";
// console.log(str);
// console.log(reverse(str, 0)); // olleh

// function palindrome(str, index) {
//   if (index >= str.length / 2) return true;
//   if (str[index] != str[str.length - 1 - index]) return false;
//   return palindrome(str, index + 1);
// }

// console.log(palindrome("madam", 0)); // true
// console.log(palindrome("hello", 0)); // false
// console.log(palindrome("racecar", 0)); // true

function inorder(root) {
    if(root == null) return;
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function preorder(root) {
    if(root == null) return;
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

function postorder(root) {
    if(root == null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}

function depth(root){
    if(root==null) return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    return Math.max(left,right)+1;
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}       

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Inorder Traversal: ");
inorder(root);
console.log("Preorder Traversal: ");
preorder(root);
console.log("Postorder Traversal: ");
postorder(root);

console.log(`Depth of the tree is: ${depth(root)}`);