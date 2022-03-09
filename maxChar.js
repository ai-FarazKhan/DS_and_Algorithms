// Given a string, return the character that is most commonly used in the string.
// maxChar("abcccccccd") -> "C" iska output C ana chahhiye, kunke C sabsay zaida occur hua hai string main.
// maxChar("apple 123111111") -> "1" iska output 1 ana chahiye, kunke 1 sabsay zaida occur hua hai.

// function maxChar(str) {
//   const charMap = {};
//   let maxChar = "";
//   let max = 0;

//   for (let char of str) {
//     // agar hum pheli baar kisi character ko dekh rhai hain, toh humko uski value ko 1 set karna hoga.
//     // if nothing exists here in charMap then set its value to 1.
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       // agar woh value already hai toh aur doobara gaya hai, toh uski value increamnet kardaingain.
//       charMap[char]++;
//     }
//   }

//   //   char ismain Key hai.
//   for (let char in charMap) {
//     //   ab ismain charpMap[char] ye key ki value hai.
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// const results = maxChar("hello");
// console.log(results);

function maxChar(str) {
  let charMap = {};
  let maxOccurance = 0;
  let characterName = "";

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxOccurance) {
      maxOccurance = charMap[char];
      characterName = char;
    }
  }

  return characterName + " No of times = " + maxOccurance;
}

const results = maxChar("Farazrrrrrrrr");
console.log(results);
