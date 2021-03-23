// Anonymus Function
var stringToCaps = function(stringArray){
    let result = [];
    stringArray.forEach(element => {
        if(element){
            result.push('caps');
        }
    });
    console.log(result);
}
stringToCaps(['sad','2','3','4']);

// IIFE
(function(stringArray){
    let result = [];
    stringArray.forEach(element => {
        if(element){
            result.push('caps');
        }
    });
    console.log(result);
})([1,2,3,4]);