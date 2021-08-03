// Checking sum zero. 
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> imput
// [-4, 4] -> output

// Improved Solution to this problem. 
// Another Solution

// Hamaain aik aisa first pair nikaalna hai jiska sum zero ho.

// 1: Hum last number ko right aur starting number ko left assume karlete hain.
// 2: Ab hum left jo number hai woh, aur phir jo right number hai woh. Unko sum karaingain aur check karaingain ke unka Sum kiya zero a rha hai ke nhin.
// 3: Agar mera number zero se bara aiga, toh phir jo right hai hamara usko hum shift kardaingain agay. matlab right ko -- kardaingain. For example jaisai abhi right 8 hai starting, toh -5 + 8 = 3. 3 zero se bara hai. ab hum next move kardaingain 8 se 6 pe ajaingain. -- kardaingain. Phir hum -5 + 6 ko dekhaingain.
// 4: -5 + 4 = -1. Ab agar yeh -1 dega, jo kay zero se chota hai. Jaisai hi hamain Zero se chota number milay ga toh toh main agay loop chalaonga hi nhi. aur left side se ++ kardoonga. Matlab jo bhi index hoga hamara woh next shift hojaiga. Phir hum again -4 ko compare karaingain 8 se. Toh -4 + 8 = 4. Toh phir hum right shift karaingain. Right shift matlab right --.


// Issay faida yeh hua ke hum utni hi iteration kar rhai hain jitni need hai. Aur phir uskay baad next number pe move ho rhai hain, ke usmain koi asa pair hai jokay zero ke equal ho.
// Yeh logic sirf sorted array main kaam karaiga.

function sum_zero_problem_improved(array) {
    let left = 0; // array zero index se start hota hai, isiliye left = 0. 0 index ko indicate kar rha hai.
    let right = array.length - 1; // toh jo bhi max length hogi ussay hum -1 kardaingain. toh ussay hamain right index miljaiga. kunke index 0 se start hota hai, isiliye -1 lagadiya.

    // ab yahan mujhey aik hi loop se solve karna hai. ta kay time complexity linear ai. Mujhey 2 loops use nhin karnay.

    // ab kunke hamara array sorted hai toh left hamaisha less than hoga right se.

    while (left < right) {
        total = array[left] + array[right];
        if (total === 0) {
            return [array[left], array[right]];
        }
        else if (total > 0) {
            right--;
        }
        else{
            left++;
        }
    }
}


const result = sum_zero_problem_improved([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(result);


// yahan complexity o(n) linear hojaigi. kunke loop aik baar hi chal rha hai.