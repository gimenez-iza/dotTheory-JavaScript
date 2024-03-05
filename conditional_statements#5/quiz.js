/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player

let rank = 'unranked';

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

let answer = prompt('What do you call the birthstone for September?');
if (answer.toUpperCase() === 'SAPPHIRE') {
  score += 1;
}
console.log(score);

answer = prompt('What is the first sign of Zodiac?');
if (answer.toUpperCase() === 'ARIES') {
  score += 1;
}
console.log(score);

answer = prompt('Which zodiac sign is known for being the most loyal?');
if (answer.toUpperCase() === 'TAURUS') {
  score += 1;
}
console.log(score);

answer = prompt('Which birthstone was believed to protect sailors?');
if (answer.toUpperCase() === 'AQUAMARINE') {
  score += 1;
}
console.log(score);

answer = prompt('Which zodiac sign is associated with the mythological figure of the centaur?');
if (answer.toUpperCase() === 'SAGITTARIUS') {
  score += 1;
}
console.log(score);

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (score === 5) {
  rank = 'Gold';
} else if (score >= 3) {
  rank = 'Silver';
} else if (score >= 1) {
  rank = 'Bronze';
} else {
  rank = 'No crown';
}

// 6. Output results to the <main> element
const result = `
<h2>You got ${score} out of 5 correct.</h2>
<p>Crown earned: <strong>${rank}</strong></p>
`;
main.innerHTML = result;
