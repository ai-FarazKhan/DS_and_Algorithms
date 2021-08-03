// Find the Largest Sum of Consecutive Digits.
// Sabsay phele hum input laingain user se, ke usko kitnay numbers ka largest sum chahiye.
// Lets say ke yeh array hai [1,2,3,4,3,5,4,6,7,8]
// Ab user agar kehta hai ke 4 numbers ka largest sum bataoe. 
// Largest sum kaisai dekhaingain, (1+2+3+4) phele iska, phir loop doobara chalay ga (2+3+4+3) phir again (3+4+3+5) phir again (4+3+5+4) phir again (3+5+4+6) phir again (5+4+6+7) phir again (4+6+7+8). Toh is tarhan hamara loop 7 times chalay ga.
// Toh sabsay phele kuch Conditions rakhaingain.

// Jin pairs ka max sum ho woh miljai hamain. Toh last pair ka sum sabsay bara hai. 

// Conditions:
// 1: Jo input number hai, jo end user dalay ga, uski length array ki length se zaida na ho. Yeh check karna hai sabsay phele.
// 2: Ab loop kitni baar chalay ga uska formulae:  total no of array elements - endUserInputNumber +1 

// first argument main array recieve hoga, aur second argument main woh number jo user input karayga woh recieve hoga.

function findLargestSum(array, inputNum) {
    if (inputNum > array.length) {
        throw new Error("Your input number should not be greate than array");
    }
    else {
        let max = 0; // here i will gonna store max sum value.
        let countIterations = 0;
        for (let i = 0; i < array.length - inputNum + 1; i++) {
            // console.log(array[i]);
            let temp = 0;
            // ab main jo second loop hai usko sirf 4 times chalana chata hoon. kunke user jo 4 largest ka sum chahiye.
            for (let j = 0; j < inputNum; j++) {
                // console.log(`i ${array[i]} + j ${array[j]} = ${array[i] + array[j]}`);
                temp += array[i + j];
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max; // jo bhi max number hoga last main woh ajaiga.
    }
}



const result = findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(`Result ${result}`);