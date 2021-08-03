// First array jo elements hain, unka square hamain second array ke elements main dekhna hai. 
// Lets say arrayOne=[1,2,3,4] and arrayTwo=[1,9,4,16]. 
// Ab array 1 ko agar dekhoon toh 1 ka square 1 hi hoga, toh 1 dosray array main mojood hai already. isi tarhan sabke square dosray array main mojood hain. 

// Toh phele main square calculate karoonga first array main jo elements hain unka. phir usko compare karoonga dosray array ke elements se.
// agar milgaya toh true warna return false.



function isSquareInAnotherCheck(arrayOne, arrayTwo) {
    for (let i = 0; i < arrayOne.length; i++) {
        let isSquare = false;
        let squareInArrayOne = arrayOne[i] * arrayOne[i];
        for (let j = 0; j < arrayTwo.length; j++) {
            if (squareInArrayOne === arrayTwo[j]) {
                isSquare = true;
            }
            // agar J loop hamara last tak chal gaya aur usko element mila hi nhin.
            if (j === arrayTwo.length - 1) {
                // is case main hum check karaingain ke kiya mujhey square mila ? 
                if (!isSquare) {
                    return false;
                }
            }
        }
    }
    return true;
}

const result = isSquareInAnotherCheck([1, 2, 3, 4], [1, 9, 4, 25]);
console.log(result);

// Time complexity will be O(n^2)