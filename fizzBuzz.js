// to determine whether a number is multiple of other, we can use modulo operator %.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //   first hamain ye check karna hai ke, number ko input kar rhai hain woh multiple hai 3 or 5 ke ya nhin ?
    // is the number multiple of 3 and 5 ?}
    if (i % 3 === 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    }
    // is number multiple of 3 ?
    else if (i % 3 == 0) {
      console.log("fizz");
    }
    // is multiple of 5 ?
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    // ab agar woh number kisi ka bhi multiple nhin hai, toh hum simply numbers ko print kardaingain.
    else {
      console.log(i);
    }
  }
}

const result = fizzBuzz(25);
console.log(result);
