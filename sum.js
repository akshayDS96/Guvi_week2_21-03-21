// Anonymus Function
var findSum = function(inputArray){
    let sum = 0;
    inputArray.forEach(element => {
        sum = sum + +element;
    });
    console.log(sum)
}
findSum([1,2,3,4]);

// IIFE
(function(inputArray){
    let sum = 0;
    inputArray.forEach(element => {
        sum = sum + +element;
    });
    console.log(sum)
})([1,2,3,4]);