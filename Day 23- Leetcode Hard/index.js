// function findMedianSortedArrays(nums1, nums2) {
// }

// // Test cases
// console.log(findMedianSortedArrays([1, 3], [2])); // 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
// console.log(findMedianSortedArrays([], [1])); // 1
// console.log(findMedianSortedArrays([2], [])); // 2

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// // Function to create a linked list from an array
// function createLinkedList(arr) {
//     let head = new ListNode();
//     let current = head;

//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }

//     return head.next; // Return the head node of the created linked list
// }

// // Priority Queue class implementation
// class PriorityQueue {
//     constructor(comparator = (a, b) => a.val < b.val) {
//         this._heap = [];
//         this._comparator = comparator;
//     }
//     size() {
//         return this._heap.length;
//     }
//     isEmpty() {
//         return this.size() === 0;
//     }
//     peek() {
//         return this._heap[0];
//     }
//     add(value) {
//         this._heap.push(value);
//         this._siftUp();
//     }
//     poll() {
//         const poppedValue = this.peek();
//         const bottom = this.size() - 1;
//         if (bottom > 0) {
//             this._swap(0, bottom);
//         }
//         this._heap.pop();
//         this._siftDown();
//         return poppedValue;
//     }
//     _greater(i, j) {
//         return this._comparator(this._heap[i], this._heap[j]);
//     }
//     _swap(i, j) {
//         [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
//     }
//     _siftUp() {
//         let node = this.size() - 1;
//         while (node > 0 && this._greater(node, Math.floor((node - 1) / 2))) {
//             this._swap(node, Math.floor((node - 1) / 2));
//             node = Math.floor((node - 1) / 2);
//         }
//     }
//     _siftDown() {
//         let node = 0;
//         while (
//             (node * 2 + 1 < this.size() && this._greater(node * 2 + 1, node)) ||
//             (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node))
//         ) {
//             let maxChild = (node * 2 + 2 < this.size() && this._greater(node * 2 + 2, node * 2 + 1)) ? node * 2 + 2 : node * 2 + 1;
//             this._swap(node, maxChild);
//             node = maxChild;
//         }
//     }
// }

// // Function to merge k sorted linked lists
// function mergeKLists(lists) {
//     // Check if the input array is empty
//     if (lists.length === 0) {
//         return null;
//     }

//     // Initialize a new linked list
//     let mergedList = new ListNode();
//     let current = mergedList;

//     // Create a priority queue to store the nodes
//     let pq = new PriorityQueue((a, b) => a.val < b.val);

//     // Add the head nodes of all the linked lists to the priority queue
//     for (let list of lists) {
//         if (list) {
//             pq.add(list);
//         }
//     }

//     // Merge the linked lists
//     while (!pq.isEmpty()) {
//         // Get the node with the smallest value
//         let node = pq.poll();

//         // Add the node to the merged list
//         current.next = node;
//         current = current.next;

//         // Add the next node from the same list to the priority queue
//         if (node.next) {
//             pq.add(node.next);
//         }
//     }

//     // Return the merged list
//     return mergedList.next;
// }

// // Test cases
// let list1 = createLinkedList([1, 4, 5]);
// let list2 = createLinkedList([1, 3, 4]);
// let list3 = createLinkedList([2, 6]);

// // Output the merged linked list
// let mergedList = mergeKLists([list1, list2, list3]);

// while (mergedList) {
//     console.log(mergedList.val);
//     mergedList = mergedList.next;
// }


// function trap(height) {
//     // Initialize left and right pointers
//     let left = 0, right = height.length - 1;

//     // Initialize left and right max heights
//     let leftMax = 0, rightMax = 0;

//     // Initialize the result
//     let result = 0;

//     // Loop through the height array
//     while (left < right) {
//         // Check if the left height is less than the right height and update the result accordingly
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 result += leftMax - height[left];
//             }
//             left++;
//         } else { 
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 result += rightMax - height[right];
//             }
//             right--;
//         }
//     }

//     // Return the result
//     return result;
// }

// // Test cases
// let height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
// console.log(trap(height1)); // Output: 6

// let height2 = [4,2,0,3,2,5];
// console.log(trap(height2)); // Output: 9

// let height3 = [0,1,0,2,1,0,1,3,2,1,2,1];
// console.log(trap(height3)); // Output: 6


// function solveNQueens(n) {
//     // Initialize the chessboard
//     let board = Array.from({ length: n }, () => Array(n).fill('.'));
//     let result = [];
    
//     // Helper function to check if the current position is safe
//     function isSafe(row, col) {
//         // Check the current row and column
//         for (let i = 0; i < row; i++) {
//             if (board[i][col] === 'Q') return false;
//         }
        
//         // Check the left diagonal
//         for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//             if (board[i][j] === 'Q') return false;
//         }
        
//         // Check the right diagonal
//         for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//             if (board[i][j] === 'Q') return false;
//         }
        
//         // If the position is safe, return true
//         return true;
//     }
    
//     // Helper function to backtrack and place the queens
//     function backtrack(row) {
//         // Check if the row is equal to n and add the board to the result
//         if (row === n) {
//             result.push(board.map(row => row.join('')));
//             return;
//         }
        
//         // Loop through each column in the current row
//         for (let col = 0; col < n; col++) {
//             // Check if the current position is safe and place the queen accordingly
//             if (isSafe(row, col)) {
//                 board[row][col] = 'Q';
//                 backtrack(row + 1);
//                 board[row][col] = '.';
//             }
//         }
//     }
    
//     // Start the backtracking process
//     backtrack(0);
    
//     // Return the result
//     return result;
// }

// // Test cases
// let n1 = 4;
// console.log(solveNQueens(n1)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

// let n2 = 1;
// console.log(solveNQueens(n2)); // Output: [["Q"]]

// function ladderLength(beginWord, endWord, wordList) {
//     // Create a set of words from the word list
//     let wordSet = new Set(wordList);
    
//     // Check if the end word is not in the word set
//     if (!wordSet.has(endWord)) return 0;
    
//     // Initialize the queue with the begin word and the level
//     let queue = [[beginWord, 1]];
    
//     // Loop through the queue
//     while (queue.length) {
//         // Dequeue the current word and the level
//         let [word, level] = queue.shift();
        
//         // Check if the current word is equal to the end word
//         if (word === endWord) return level;
        
//         // Loop through each character in the word
//         for (let i = 0; i < word.length; i++) {
//             // Loop through each letter in the alphabet
//             for (let j = 0; j < 26; j++) {
//                 // Get the new word by replacing the character at index i with the new letter
//                 let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                
//                 // Check if the new word is in the word set and enqueue the new word with the level
//                 if (wordSet.has(newWord)) {
//                     queue.push([newWord, level + 1]);
//                     wordSet.delete(newWord);
//                 }
//             }
//         }
//     }
    
//     // Return 0 if there is no transformation sequence
//     return 0;
// }

// // Test cases
// let beginWord1 = "hit", endWord1 = "cog", wordList1 = ["hot","dot","dog","lot","log","cog"];
// console.log(ladderLength(beginWord1, endWord1, wordList1)); // Output: 5

// let beginWord2 = "hit", endWord2 = "cog", wordList2 = ["hot","dot","dog","lot","log"];
// console.log(ladderLength(beginWord2, endWord2, wordList2)); // Output: 0

// let beginWord3 = "a", endWord3 = "c", wordList3 = ["a","b","c"];
// console.log(ladderLength(beginWord3, endWord3, wordList3)); // Output: 2