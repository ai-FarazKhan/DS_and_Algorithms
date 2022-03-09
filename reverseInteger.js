// humko integer values ko is tarhan reverse karna hai jissay:
// 15 shoulde be = 51, 500 should be = 5 kunke 5 se phele jo zero hoongain unko value nhin hoti, -15 should be = -51 ab ismain minus ki sign apni jagah rhai gi,
// both the input should be number, not string.

// Three little tricks in order to solve the question.
// 1: toString() ye kisi bhi number ko string main convert kardega.
// 2: parseInt takes a string and convert it to a number.
// 3: math.sign() ye method 1 ya -1 return karta hai sirf, Agar number positive ho to 1 return hoga, agar number negative ho to -1 return hoga.

// Solution 1
// function reverseInt(n){
//     // toh ab number ko reverse karnay ke liye hum same technique use karaingain, jo hum string ko reverse karnay main kartay thai,
//     // phele hum hum Number ko laingain, phir isko string main convert karkay reverse kardaingain.

//     let reversed = '';
//     let numberToString = n.toString();

//     for(let character of numberToString){
//         reversed = character + reversed;
//     }

//     if(n < 0){
//         return parseInt(reversed.toString()) * -1; // agar number 1 se small hai toh isko negative bana nay ke liye hum -1 se multiply kardaingain.
//     }

//     return parseInt(reversed.toString());
// }

// const results=reverseInt(211);
// console.log(results);

// Solution 2
// function reverseInt(n){
//     const reversed = n.toString().split('').reverse().join('');

//     return parseInt(reversed) * Math.sign(n);
// }

// const results = reverseInt(211);
// console.log(results);
