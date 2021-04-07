
const validAnagram = (str1, str2) => {
    console.log(str1, str2)
    if (str1 === '' && str2 === '' || str1 === str2) return true

    if (str1.length != str2.length) { // check to see if length is the same
        return false;
    }

    const str1Map = wordMap(str1); // create charMap for each str
    const str2Map = wordMap(str2);
    // loop over one charMap
    for (let key in str1Map) {
        // check to see properties exist in both
        if (!(key in str2Map)) {
            // console.log(false);
            return false;
        }
        if (str2Map[key] != str1Map[key]) {
            // console.log(false);
            return false;
        }
    }
    // check to see if the values match up in both
    return true;
};

const wordMap = str => {
    const charMap = {};
    for (let char of str.toLowerCase()) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
};



// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false)
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

module.exports = validAnagram