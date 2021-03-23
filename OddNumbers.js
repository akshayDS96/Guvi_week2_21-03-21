// Anonymus Function
var findOddNumber = function(inputArray){
    inputArray.forEach(element => {
        if(element % 2 !== 0){
            console.log(element);
        }
    });
}
findOddNumber([1,2,3,4]);

// IIFE
(function(inputArray){
    inputArray.forEach(element => {
        if(element % 2 !== 0){
            console.log(element);
        }
    });
})([1,2,3,4]);