// Count Unique Numbers.

// input: [1,1,2,2,3,4,4,5,6,7,8,8]

// Har number aik aik bar count hoga. 
// Output -> 8. output 8 ana chahiye.


// Agar main yeh logic use karoonga, toh mera loop 2 baar chalay ga.
// Let's say phela first element aya, then usko maine array main daal diya. [1], phir dosray element ki taraf hum agay bharay, Toh 1 doobara agaya. Toh maine usko apna array main rakhay gai element se compare kiya. agar match hogaya toh add nhin karoonga. 
// Toh aisay main Loop 2 baar chalay ga. aur no of comparasion bhar jaiga.
// So i will not apply this solution. kunke issay time complexity o n square. We need o(n). Sirf aik loop laga paray bas hamain.


// What i will do is that.
// Conditions that we wanna apply in our code are:
//  1: i=0 yeh hamara fisrt index hogaya, And j=1 yeh second index hogaya. 
//  2: Agar i aur j ki value match karti hain, toh Loop hamara chalta rhai ga. toh j main increment hojaiga, J ki next value ajaiga.
//  3: Ab jab i aur j ki value match nhin karay, then we will increment the value of i++. and jo J ki value jo hai usko hum i main daal daingain. Toh Last jo value hogi i ki woh 8 hogi. Aur wohi output chahiye mujhey.



function countUniqueNumbers(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                // aur saath main jo J ki value hogi woh I main daal doonga.
                array[i] = array[j];
            }
        }
        // console.log(i) 
        return i + 1; // array ka index zero se shuru hota hai jabhi +1 lagaya hai.
    }
    // if our array is empty
    else {
        throw new Error("Your array is empty");
    }
}


const results = countUniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9, 10]);

console.log(results);


// o(n) linear time complexity kunke loop aik baar chala hai.