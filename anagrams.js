// Solution 1.

// function anagram(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     // agar aCharMap main koi bhi character utnay number of time use nhin hua hai, jitna bCharMap main, in this case we will immediately return false
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   // agar uper ke donon check main pass hogai hum, toh its mean we found anagram.
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }
//   return charMap;
// }

// const results = anagram("Faraz", "farak");
// console.log(results);

// Solution 2.

// function checkAnagram(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   // remember ke sort method array pe kaam karay ga, string pe kaam nhin karayga.
//   // string pe kaam karwanay ke liye hum ko isko split karna hoga, phir sort and phir join karna hoga wapis string main.
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// const results = checkAnagram("hello", "ohellq");
// console.log(results);
