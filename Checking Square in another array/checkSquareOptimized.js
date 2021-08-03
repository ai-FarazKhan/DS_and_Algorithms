// arrayOne=[1,2,4,2], arrayTwo=[1,4,4,16]
// Ab main map bana loonga donon arrays ka, key value pair main. Aur yeh identify karloonga ke konsa element kitni baar a rha hai.
// Like this. object1= {1:1,2:2,4:2}, object2={1:1,4:2,16:1}. Toh sab se phele yeh karna hoga, map bana hoga donon ka, ke konsa element kitni baar a rha hai. Its like key value pair
// Ab jo hamaray map1 main jo key hai 1 ya kuch bhi, toh uska square jo kay mere map 2 ki key hai, woh barabar hoga.



function checkSquareOptimized(arrayOne, arrayTwo) {
    let objOne = {};
    let objTwo = {};

    for (let itemsOne of arrayOne) {
        objOne[itemsOne] = (objOne[itemsOne] || 0) + 1     // toh  isEqualTo ke left side pe key aur right side pe value. key value pair.
        // console.log(objOne);
    }
    console.log('Object 1 = ', objOne);
    for (let itemsTwo of arrayTwo) {
        objTwo[itemsTwo] = (objTwo[itemsTwo] || 0) + 1
        // console.log(objTwo);
    }
    console.log('Object 2 = ', objTwo);

    // ab nikalni hai key. ab main objectOne se key nikalna chata hoon. as we know ke ObjectOne main key 1,2,4 hai.
    // objectOne se key nikal kar main check karoonga ke uska square object 2 main hai ya nhin.

    for (let keys in objOne) {
        // console.log("Keys = ", keys);
        // object 1 main jo keys hain, kiya unka square object2 main hai ?
        // comparing keys of an object in terms of square.
        if (!objTwo[keys * keys]) {
            return false;
        }

        // key ki jo value hai woh bhi same honi chahiye. Matching values of an object.
        if (objOne[keys] !== objTwo[keys * keys]) {
            return false
        }
    }

    return true;

}
const result = checkSquareOptimized([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);