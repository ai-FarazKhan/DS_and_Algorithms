function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    //   ab main left dekhoonga, left dekhnay ke liye i-1 use hoga. This is to left to the current character.
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    }
    // aur agar space nhin hai left main
    else {
      result += str[i];
    }
  }

  return result;
}

const results = capitalize("hello how are you bro");
console.log(results);
