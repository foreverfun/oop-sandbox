// Write a function palindrome that takes a single 
// string parameter and returns true if the parameter 
// is a palindrome (the string is the same forward as 
//     it is backward), otherwise returns false. For 
// example: palindrome("racecar") should return true 
// because "racecar" is also "racecar" backwards.
var palindrome = function (str) {
    var str2Array = str.split('');
    var strReverse = str2Array.reverse().join('');
    //console.log(strReverse); 
    if (str === strReverse) {
        return true;
    }
    else {
        return false;
    }
}

console.log("palindrome racecar: ", palindrome("racecar"));
console.log("palindrome test: ", palindrome("test"));

//Write a function dashInsert that takes a single num 
// parameter and returns the num with inserted dashes ('-') 
// etween adjacent odd digits. For example: if num is 454793 
// the output should be "4547-9-3".
var dashInsert = function(num) {
    //console.log(num.toString());
    var num2String = num.toString();
    var str2Array = num2String.split('');
    //console.log(str2Array)
    str2Array.map(function(currentValue, index, array) {
        // odd #, add - at the end
        if (parseInt(currentValue)%2) {
            if (parseInt(array[index+1])%2) {
            array[index] += "-";
            //console.log("array element:", array[index]);
            }
        }
    });
    //console.log(str2Array);
    return str2Array.join('');
}

console.log("dashInsert 454793: ", dashInsert(454793));
console.log("dashInsert 3547831: ", dashInsert(3547813));

//Bonus:
// Write a function caesarCipher that takes a string and 
// number parameter and performs a Caesar Cipher shift on 
// it using the num parameter as the shifting number. 
// A Caesar Cipher works by shifting each letter in the 
// string N places down in the alphabet (in this case N 
//     will be num). Punctuation, spaces, and 
// capitalization should remain intact. For example 
// if the string is "Caesar Cipher" and num is 2 the 
// output should be "Ecguct Ekrjgt".