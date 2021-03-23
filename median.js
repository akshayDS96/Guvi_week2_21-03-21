// Anonymus Function
var findMedian = function(array1,array2){
let mergedArrayMiddle = (array1.length+array2.length)/2
let mergedArray = [];
let array1Item = array1[0];
let array2Item = array2[0];
let i=1;
let j=1
while(array1Item || array2Item){
 
    if(array1Item<array2Item){
        mergedArray.push(array1Item)
        array1Item = array1[i];
        i++;
    }else{
        mergedArray.push(array2Item)
        array2Item = array2[j]
        j++;
    }
    if(mergedArray.length === (mergedArrayMiddle+1)){
        let a  = mergedArray.pop();
        let b = mergedArray.pop();
        let median = (a+b)/2;
        return median;
    }
}
}
console.log(findMedian([1,3,5,7],[2,4,6,8]));


// IIFE
(function(array1,array2){
    let mergedArrayMiddle = (array1.length+array2.length)/2
    let mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1
    while(array1Item || array2Item){
     
        if(array1Item<array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        }else{
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++;
        }
        if(mergedArray.length === (mergedArrayMiddle+1)){
            let a  = mergedArray.pop();
            let b = mergedArray.pop();
            let median = (a+b)/2;
            console.log(median);  /////Result
        }
    }
})([1,3,5,7],[2,4,6,8]);