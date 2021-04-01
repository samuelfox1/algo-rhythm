/*
    WHEN given a string
    RETURN the length of the longest uniqe substring

Example: 
    given: "abcabbca"
    return: 3
    reason: "abc","bca","cab", are the longest unique options, none are longer then 3

*/

let mystring1 = "cabbca"
let mystring2 = "asdkfjnasdkljvnasldj"
let mystring3 = "abcdefghijklmnopqrstuvwxyz"

function longestSubstring(string) {

    let longest = 1
    let substring = string[0]

    for (let i = 1; i < string.length; i++) { // parent - loop through string
        if (substring.indexOf(string[i]) === -1) {
            substring += string[i]
            if (substring.length > longest) {
                longest = substring.length
                console.log(substring, longest)
            }
        } else { substring = string[i] }
    }

    return longest

}

longestSubstring(mystring1)
longestSubstring(mystring2)
longestSubstring(mystring3)
