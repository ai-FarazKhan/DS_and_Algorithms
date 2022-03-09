function pyramid(n) {
  // now mujhey mid point calculate karna hai row ka. Our midpoint gonna change depending on the value of N.
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

const results = pyramid(5);
console.log(results);
