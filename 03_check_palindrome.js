/* 

Check if an array is a palindrome​
Write a function to determine whether an array reads the same backward as forward.

*/

const arr1 = [1, 2, 3, 2, 1];
const arr2 = ["a", "b", "b", "a"];
const arr3 = [7];
const arr4 = [1, 2, 3, 4];

const theArr = arr3;

let i=0, j=theArr.length-1;

let isPalindrome = true;

while (i<j) {

    if (theArr[i] !== theArr[j]) {
        isPalindrome = false;
        break;
    }

    i++;
    j--;
}

console.log(isPalindrome);