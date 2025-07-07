// function Anagram(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     let sorted1 = str1.split('').sort().join('');
//     let sorted2 = str2.split('').sort().join('');
//     return sorted1 === sorted2;
// }

// console.log(Anagram("alma", "amal")); 


function mergeee(a, b) {
    let data = [], i = 0, j = 0;
    while (i < a.length && j < b.length)
        data.push(a[i] < b[j] ? a[i++] : b[j++]);
    return data.concat(a.slice(i)).concat(b.slice(j));
}

let a = [2, 7, 13, 24, 47];
let b = [27, 31, 37, 44, 57, 123, 432];
console.log(mergeee(a, b));