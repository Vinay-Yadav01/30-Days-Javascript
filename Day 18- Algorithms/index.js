function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

function quickSort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


function binarySerach(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// let arr = [5,9,3,7,1,8,2,4,6];
// bubbleSort(arr);
// selectionSort(arr);
// arr = quickSort(arr);
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let index = linearSearch(arr, 7);
// console.log(index); // 3
// arr = quickSort(arr);
// index = binarySerach(arr, 7);
// console.log(index); // 6

function countOccurence(str){
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}

function longestSubstringWithoutRepeating(s) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = '';
    const charIndexMap = {}; 

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.substring(start, end + 1);
        }
    }

    console.log('Longest substring without repeating characters:', maxSubstring);
    console.log('Length of the longest substring:', maxLength);

    return maxSubstring;
}

// const inputStrings = "abcabcbb";
// console.log(" ")
// longestSubstringWithoutRepeating(inputStrings);

// let str = "hello";
// let obj = countOccurence(str);
// console.log(obj); // { h: 1, e: 1, l: 2, o: 1 }


function rotate(arr,k) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[(i+k) % arr.length] = arr[i];
    }
    return result;
}

function mergeTwoArray(arr1, arr2) {
    let i = 0, j=0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// let arr = [1,2,3,4,5];
// let result = rotate(arr, 2);
// console.log(result); // [4, 5, 1, 2, 3]

// let arr1 = [1,3,5,7];
// let arr2 = [2,4,6,8];
// let result = mergeTwoArray(arr1, arr2);
// console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]