// [9,4,1,2,3,5,8,7,6]  sort this array by recursion.
// array main jo element hain unko apas main compare karaingain, ke kon sa element kis se bara ya chota hai, is behalf pe swapping kardaingain.

let i = 0;
let j = 1;
let myArray = [9, 4, 1, 2, 3, 5, 8, 7, 6];
let myNewList = [];
// let myArray = [1,2,3,4];


// now this function will gonna tell us that whether our array is sorted or not.
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}



function sortRecursively(array) {

    if (isSorted(array)) {
        myNewList = array;
        return;
    }

    else if (array[i] < array[j]) {
        i++;
        j++;

        sortRecursively(array); // toh yeh function doobara call kardaingain. toh phir i aur j ki jo value hogi, toh uskay hisaab se next move karayga.
    }
    else {
        // ab agar array[i] bara hai array[j] se toh is case main we want to swap.
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        sortRecursively(array);
    }
}



sortRecursively(myArray);

console.log(myNewList);