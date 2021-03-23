// Anonymus Function
var rotateArray = function(inputArray,k){
    let i = 0;
    while(i<k){
        let endValue = inputArray.pop();
        inputArray.unshift(endValue);
        i++;
    }
    return inputArray;
}
console.log(rotateArray([1,2,3,4],2));

// IIFE
(function(inputArray){
    let i = 0;
    while(i<k){
        let endValue = inputArray.pop();
        inputArray.unshift(endValue);
        i++;
    }
    console.log(inputArray);
})([1,2,3,4]);