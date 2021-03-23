// Anonymus Function
var findPalindrome = function(inputArray){
    let palindromes = [];
    inputArray.forEach(element => {
       let  str = element.toString();
    let charArray = [...str];
    let reversedStr = charArray.reverse().join('');
    console.log(reversedStr)
    if(str === reversedStr){
        palindromes.push(str);
    }
    });
    console.log(palindromes);
}
findPalindrome([121,234,3,4]);

// IIFE
(function(inputArray){
    let palindromes = [];
    inputArray.forEach(element => {
       let  str = element.toString();
    let charArray = [...str];
    let reversedStr = charArray.reverse().join('');
    console.log(reversedStr)
    if(str === reversedStr){
        palindromes.push(str);
    }
    });
    console.log(palindromes);
})([121,2,33,4]);