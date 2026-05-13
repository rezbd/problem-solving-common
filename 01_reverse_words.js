/* 

Write a function to reverse the order of words in a string while keeping the words
themselves intact.​
Example: "Hello World" → "World Hello"

*/

const theWord = "The World is Big";
const splittedWord = theWord.split(" ");
const newArray = [];

for(let i=splittedWord.length-1; i>=0; i--) {
    newArray.push(splittedWord[i]);
}

const reversedWord = newArray.join(" ");
console.log(reversedWord);