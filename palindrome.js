// The idea behind palindrome is that, we should be able to reverse a string, if the reversed string is equal to the orignal one then that word is called palindrome, otherwise that is not.
// for example hamaray paas aik string hai, "abba" agar hum isko reverse karain toh ye doobara "abba" hojai, toh isko hum palindrome kehte hain.
// In easy words agar kisi string ko reverse karnay pe woh string waisa hi doobara ban jai, to isko hum palindrome kehtay hain.
// now agar ab hum "abcdefg" isko reverse karaingain toh ye palindrome nhin hoga, kunke isko reverse karnay par alag output aiga.

// One to keep in mind, Ke appsay reversed string ko return karnay ka nhin kaha gaya hai, balakay app ko true ya false return karnay ko kaha gaya hai, To indicate whether or not its palindrom or not.

// Solution: 1
function palindrome(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  // if(str === reversed){
  //     return true;
  // }
  // else{
  //     return false;
  // }

  //  or we can also return  this.
  return str === reversed;
}

// Solution: 2
// function palindrome(str){
//     const reversed=str.split('').reverse().join('');

//     return str===reversed; // agar equal hoogain toh return true, otherwise return return false.
// }

const results = palindrome("abba");
console.log(results);
