function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    console.log("row = " + row);
    for (let column = 0; column < n; column++) {
      //   console.log("column = " + column);
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

const results = steps(5);
console.log(results);
