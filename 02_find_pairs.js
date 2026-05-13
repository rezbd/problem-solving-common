/* 

Find all pairs with a given sum in an array​
Given an array and a target sum, return all pairs of numbers whose sum equals the
target.

*/

const givenArray = [7, 2, 8, 1, 5, 3];
const targetSum = 10;
const newArr = [];

for (let i=0; i<=givenArray.length-2; i++) {
    for(let j=i+1; j<=givenArray.length-1; j++) {
        if (givenArray[i]+givenArray[j] === targetSum) {
            const thePair = [givenArray[i], givenArray[j]];
            newArr.push(thePair);
        }
    }
}

console.log(newArr);