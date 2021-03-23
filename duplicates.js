// Anonymus Function
var findSum = function(inputArray){
    let map = {};
    inputArray.forEach(element => {
        map[element] = 1;
    });
  console.log(Object.keys(map));
}
findSum([1,2,3,3,1,4]);

// IIFE
(function(inputArray){
  let map = {};
    inputArray.forEach(element => {
        map[element] = 1;
    });
  console.log(Object.keys(map));
})([1,2,3,4]);