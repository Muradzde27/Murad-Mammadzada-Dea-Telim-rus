// function Anagram(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     let sorted1 = str1.split('').sort().join('');
//     let sorted2 = str2.split('').sort().join('');
//     return sorted1 === sorted2;
// }

// console.log(Anagram("alma", "amal")); 


function slova(words) {
    if (words.length == 0) {
        return "";
    }

    let result = "";
    let i = 0;

    while (true) {
        let currentWords;
        if (i < words[0].length) {
            currentWords = words[0][i];
        } else {
           break;
        }

        for (let j = 1; j < words.length; j++) {
            if (i >= words[j].length || words[j][i] != currentWords) {
                return result;
            }
        }
        result = result + currentWords;
        i = i + 1;
    }
    return result;
}

let myWords = ["fllllllower", "fllllllsfdfdow", "fll33333llllight"];
let answer = slova(myWords);
console.log(answer);