// Divide and Conquerer Technique. Array ko divide karaingain 2 parts main. Issay faida yeh hoga ke Number of iterations jo hain woh kam hojaingain. Loop harjagah na chalay, bas waheen chalay jahan need hai.
// giving array [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// min=0. is 0 index pe jo element hai woh 1 hai.
// max=array.length-1, aur yahan pe jo element hai woh 15 hai array main. but index iska 14 hai.

// Toh mujhey min aur max milgaya hai. 
// Ab sabsay phele mujhey mid index nikalna hai. midIndex = (min + max) / 2. Toh abhi mera min hai 0 aur max hai 14. (0 + 14) / 2 = 7 index agaya. Aur 7 index pe jo element hai woh 8 hai.
// Agar mera element jo aya hai abhi, woh less than hota hai, mere us number se jiska mujhey index chahiye. 
// if array[midIndex] < number(7)
// toh hum min ke andar jo index hai usko +1 karadaingain.
// min=midIndex+1
// but agar array[midIndex] > number(7)
// ab is case main hum apnay max ke andar max=midIndex-1,  min rahaiga 0 aur max hojaiga 6.  toh ab loop hamara { 1,2,3,4,5,6,7 } yaha tak chalay ga.
// Ab mujhey again is main nikalna hai mid element. 
// Toh again (min + max) / 2
// yehi logic divide karayga, aur bataiga ke mujhey left side jana hai ya right side.



function binarySearchAlgo(array, inputNum) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        // sabsay phele mid index nikalna hai array ka.
        let midIndex = Math.floor(min + max) / 2;

        // console.log(`MidIndex = ${midIndex} Min = ${min} Max = ${max}`);

        if (array[midIndex] < inputNum) {
            min = midIndex + 1;
        }
        else if ((array[midIndex] > inputNum)) {
            max = midIndex - 1;
        }
        else {
            return midIndex;
        }
    }
    // agar number hai hi nhin
    return `Not Found ${-1}`;
}

const result = binarySearchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
// toh 7 hamara six index pe hai.
console.log(result);


// time complexity will be binary O(log(n))