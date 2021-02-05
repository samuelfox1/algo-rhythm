// Denis Molloy solution
const validAnagram = (str1, str2) => {
    // check to see if length is the same
    if (str1.length != str2.length) {
        return false;
    }
    // create charMap for each str
    const str1Map = wordMap(str1);
    // console.log(str1Map);
    const str2Map = wordMap(str2);
    // console.log(str2Map);
    // loop over one charMap
    for (let key in str1Map) {
        // check to see properties exist in both
        if (!(key in str2Map)) {
            console.log(false);
            return false;
        }

        if (str2Map[key] != str1Map[key]) {
            console.log(false);
            return false;
        }
    }

    // check to see if the values match up in both
    console.log(true);
    return true;
};

const wordMap = str => {
    const charMap = {};
    for (let char of str.toLowerCase()) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
};

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false)
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true