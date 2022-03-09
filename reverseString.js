// we need to reverse a string.
// for example: reverse('hello') --> olleh

// Solution 1.

// function reverse(str){
//     // jab hum split function call kartay hain, aur usmain '' empty string pass kartay hain toh, it takes the provided string and turn it into array.
//     // const arr=str.split('');
//     // arr.reverse();
//     // return arr.join();

//     // we can right above code shorter as well.
//     return str.split('').reverse().join();

// }

// Solution 2.

// function reverse(str){
//     let reversed='';

//     for(let character of str){
//         reversed=character+reversed;
//     }
//     return reversed;
// }
// This is how this solution is working behind the scenes.
// f + '' = f
// a + 'f' = af
// r + 'af' = raf
// a + 'raf' = araf
// z + 'araf' =zaraf

// Solution 3.

// function reverse(str){
//     // reduce is use to take all the different value from array and condence them all to one singular value/single string value.
//     // reduce takes 2 arguments, 1: arrow function. 2: starting intial value for a function, is argument main woh current value hogi jo STR main hai, jo array se pheli value niklay gi. and we recieved that as an argument called character.
//     // so whenever reduce run, its going to take the starting argument(second argument jo hai), its going to pass it into this arrow function as the first argument, and then whatever get return from that function, will be then used as the starting argument for every successive run of the function.
//     // in total function run 1 time for every element within the array.
//     return str.split('').reduce((reversed,character)=>{
//         return character+reversed;
//     },'');
// }

const result = reverse("faraz");
console.log(result);
