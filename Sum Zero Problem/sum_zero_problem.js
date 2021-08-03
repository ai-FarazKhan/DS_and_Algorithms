// Checking sum zero. 
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> imput
// [-4, 4] -> output
// Hamain is array main se aik aisa first pair nikalna hai jiska sum zero ho.
// Ab har element compare kar rhai hain dosray element se. 

// Yeh function recieve karayga aik array, kunke mera jo input hai woh array hai. Toh argument main array pass karaingain.
function getSumOfFirstPairZero(array) {
    for (let number of array) {
        for (let j = 1; j < array.length; j++) {
            if (number + array[j] === 0) {
                return [number, array[j]]
            }
        }
    }
}

const result = getSumOfFirstPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(result);

