// Write a function jo vowels kitnay hain sentence main woh return karay.
// like vowels('Hi There!') -> 3
//      vowels('Why do you ask?') -> 4
//      vowels('Why') -> 0

// Solution 1.
// function vowels(str) {
//   let countVowel = 0;

//   for (let char of str.toLowerCase()) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       countVowel++;
//     }
//   }
//   return countVowel;
// }

// Solution 2.
function vowels(str) {
  let countVowel = 0;
  //   const holdingVowelsToCompare = "aeiou";
  //   ya phir hum array bhi use kar saktay hain.
  const holdingVowelsToCompare = ["a", "e", "i", "o", "u"]; // issay hum 'abc' isko bhi aik saath dekh pain gain, ye faida hoga array ka

  for (let char of str.toLowerCase()) {
    if (holdingVowelsToCompare.includes(char)) {
      countVowel++;
    }
  }
  return countVowel;
}

const results = vowels("Faraz how you broo");
console.log(results);
