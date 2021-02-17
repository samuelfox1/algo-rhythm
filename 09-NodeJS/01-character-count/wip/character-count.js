// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {

    //declare an object to use
    var obj = {}

    //loop through the string 
    for (let i = 0; i < str.length; i++) {

        //grab a  character
        let char = str[i];

        //if the character is already in the object increment the count
        //if not in the object, store it with a value of one
        if (char in obj) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    };

    return obj
};