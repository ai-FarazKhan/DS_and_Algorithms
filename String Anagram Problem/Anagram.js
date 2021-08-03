// Anagram matlab jo words hotay hain unko agay pichay karke new word bana na.

// Phele condition hamain length check karni hoti hai woh yeh hai ke. Jo string 1 hai aur jo string 2 hai, unkay letters unki length barabar honi chahiye.
// Agar woh barabar nhin hai toh hum anagram nikal hi nhin saktay. Agar length brabar hai toh hum agay check karaingain. warna hum False return kardaingain. 
// Length check for both Strings.


// Hum kisi string ko jab anagram boltay hain, jab no of letters same rhain gain but unka jo arrangement hai woh badal jaiga. If this is true, and woh brabar length ke saath hai. Then we call this anagram. 
// 'hello' -> 'llleo' yeh anagram nhin hai. kunke l 3 dafa aya hai second string main.
// 'hello' -> 'llheo' yeh anagram kehlaiga, kunke string ki length aur letters donon same hain.

// Conditions:
// 1: Check the length for both Strings.
// 2: jo meri first string hai, jo kay hai 'hello'. Main ismain se identify karloonga, aik map bana loonga ke mere yeh H kitni time hai, Main check karloonga ke H kitni baar a rha hai. 
//    {h:1, e:1, l:2, o:1} toh mujhey apni pheli string se yeh pata lag gaya ke jo letters hain meri pheli string main woh kitni kitni baar hain
//    Ab main check karoonga apni dosri ko fisrt string se. ke l hai yahan aur wahan. Agar hum khali dekhaingain. ke yaha aur wahan L wagera hain toh issay kaam nhin bannay ga. kunke lets say ke agar second main L 3 dafa hai aur fisrt string main L 2 dafa hai toh yeh anagram nhin hoga. 
//    Toh ab main yeh karoonga ke. jaisai hi main dekhoonga ke String 1 aur String 2 main L hai, agar hai toh phir main String 1 main L ki length aik kam kardoonga. Toh is tarhan jab string 1 main se L ki value 0 hojaigi compare kar karke toh phir jab hum compare karaingain, toh return false hojaiga. Toh phir woh anagram nhin hoga.



function checkingIsAnagram(stringOne, StringTwo) {
    if (stringOne.length !== StringTwo.length) {
        return false;
    }

    let count = {}

    for (let letter of stringOne) {
        // Ab mujhey letter count karnay hain, ke aik letter kitni baar a rha hai, aik map create karna hai, key and value ki form main letter ko usmain dalna hai. 
        count[letter] = (count[letter] || 0) + 1; // Jab hum letter ko dalaingain count ke andar toh by default undefined dega. Toh main yeh kiya ke usko phele 0 kardiya. But mujhey abhi pata nhin chal rha ke mere kitnay letters hain. Toh is main hum +1 kardaingain.
        // console.log(count[letter]);
    }

    // console.log(count);  Ab hamain pata lag gaya hai ke jo hamara stringOne hai usmain konsay letters kitni baar ai hain. output kuch aisa aiga { h: 1, e: 1, l: 2, o: 1 }

    for (let items of StringTwo) {
        // Phele main yeh check karoonga ke mere count ke andar stringTwo ke items hain ya nhin.
        if (!count[items]) {
            // console.log('For third L'); Jab Third ki bari ai toh condition false hojai, kunke string 1 main se L value 0 hochuki hai.
            return false;
        }
        count[items] -= 1;
    }
    return true;
}


const checkAnagramOrNot = checkingIsAnagram('hello', 'llheo');

console.log(checkAnagramOrNot);
