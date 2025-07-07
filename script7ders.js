function Anagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let length = {};

    for (let char of str1) {
        length[char] = (length[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!length[char]) return false;
        length[char]--;
    }

    return true;
}

console.log(Anagram("alma", "amal"));