// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     insert(value){
//         let newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//         }else{
//             let current = this.head;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     delete(value){
//         if(!this.head){
//             return;
//         }
//         if(this.head.value === value){
//             this.head = this.head.next;
//             return;
//         }
//         let current = this.head;
//         while(current.next){
//             if(current.next.value === value){
//                 current.next = current.next.next;
//                 return;
//             }
//             current = current.next;
//         }
//     }

//     print(){
//         let current = this.head;
//         while(current){
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }

// function addTwo(list1, list2) {
//     let result = new LinkedList();
//     let carry = 0;
//     let node1 = list1.head;
//     let node2 = list2.head;

//     while (node1 || node2 || carry) {
//         let sum = (node1 ? node1.value : 0) + (node2 ? node2.value : 0) + carry;
//         carry = Math.floor(sum / 10);
//         result.insert(sum % 10);

//         if (node1) {
//             node1 = node1.next;
//         }
//         if (node2) {
//             node2 = node2.next;
//         }
//     }

//     return result;
// }

// let list1 = new LinkedList();
// list1.insert(2);
// list1.insert(4);
// list1.insert(3);
// list1.print(); // 2, 4, 3

// let list2 = new LinkedList();
// list2.insert(5);
// list2.insert(6);
// list2.insert(4);
// list2.print(); // 5, 6, 4

// let result = addTwo(list1, list2);
// result.print(); // 7, 0, 8

// function longestSubstring(str) {
//   let longest = "";
//   let current = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const index = current.indexOf(char);

//     if (index > -1) {
//       if (current.length > longest.length) {
//         longest = current;
//       }
//       current = current.slice(index + 1);
//     }

//     current += char;
//   }

//   return current.length > longest.length ? current : longest;
// }

// const str = "abcabcbb";
// const longestSubstr = longestSubstring(str);
// console.log(longestSubstr); // Output: 'abc'


// function containerWater(arr) {
//     let maxArea = 0;
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let width = right - left;
//         let height = Math.min(arr[left], arr[right]);
//         let area = width * height;
//         maxArea = Math.max(maxArea, area);

//         if (arr[left] < arr[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxArea;
// }

// const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const maxArea = containerWater(arr);
// console.log(maxArea); // Output: 49

// function ThreeSum(arr) {
//     let result = [];
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length - 2; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             continue;
//         }

//         let left = i + 1;
//         let right = arr.length - 1;

//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];

//             if (sum === 0) {
//                 result.push([arr[i], arr[left], arr[right]]);
//                 while (left < right && arr[left] === arr[left + 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right - 1]) {
//                     right--;
//                 }
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }


// const arr = [-1, 0, 1, 2, -1, -4];
// const result = ThreeSum(arr);
// console.log(result); // Output: [[-1, -1, 2], [-1, 0, 1]]

// function anagram(arr){
//     let map = new Map();
//     for(let i = 0; i < arr.length; i++){
//         let word = arr[i].split('').sort().join('');
//         if(map.has(word)){
//             map.get(word).push(arr[i]);
//         }else{
//             map.set(word, [arr[i]]);
//         }
//     }
//     return Array.from(map.values());
// }

// const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const result = anagram(arr);
// console.log(result); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]