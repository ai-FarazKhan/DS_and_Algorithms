// Given an array and chunk size, divide the array into many subarrays, Where each subarray is of length size
// in short hum aik large array le rhai hain, phir usko chunks main divide kar rhai hain, according to given size.
// for example:
// Humnay aik diya aur chunk ka size likha, ab phir humnay aik big array banaya, aur usmain jo input array dala tha usko according to give size divide karke, is big array main daal diya.
// ismain jo 2 likha wa hai iska matlab ye nhin hai ke 2 chunks hoon, balkay iska matlab hai jo input array hai, usmain se 2 elements ko lekar uska aik array banaya jai, aur phir usko aik large array main daal diya jai.
// 1: chunkArray([1,2,3,4], 2) --> [[1,2],[3,4]]

// chunkSize means ke array main jo elements aingain woh kitnay hoongain.

// Steps:
// 1: sabsay phele hum Aik empty array array banaingain, uska name hoga chunkedArray.
// 2: phir hum iteration karaingain orignal unchunked array main.
// 3: phir hum apnay chunked array main last element retrieve karaingain.
// Jab first time hamara algorithm run karay ga, toh usko hamaray chunked array main kuch nhin milayga, Kunke hamara array us waqt empty hoga, toh us undefined ko handle karnay ke liye hum step 4 karaingain.
// 4: If the last element does not exist, or if its length is equal to chunk size.
// 5: Then push a new chunk into 'chunkedArray' with the current element.
// 6: Else add the current element into the chunk.

function chunkAnArray(array, chunkSize) {
  const chunkedArray = [];

  for (let element of array) {
    const last = chunkedArray[chunkedArray.length - 1]; // getting the last element inside a chunkedArray. Ye chunked array ke andar jo multiple arrays ban rhai hain unko represent kar rha hai.

    // console.log("its last = " + last);
    // console.log("its chunked array = " + chunkedArray);

    // if last does not exist or if last jo chunk hai chunkedArray main uska length full hogai hai.
    if (!last || last.length === chunkSize) {
      chunkedArray.push([element]); // Yahan hum new sub array push kar rhai hain. Yahan hum donon cheezain aik saath kar rhai hain, phele hum chunkedArray main aik array chunk bana rhai hain, aur phir usmain element ko push kar rhai hain.
    } else {
      last.push(element);
      // chunkedArray[chunkedArray.length - 1].push(element);
    }
  }
  console.log(array.length);
  return chunkedArray;
}

const results = chunkAnArray([1, 2, 3, 4, 5, 6], 2);
console.log(results);
