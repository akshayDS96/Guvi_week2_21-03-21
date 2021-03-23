// Anonymus Function
var findPrimes = function(inputArray){
    const primes = [];
    
        for(let i = 0; i<inputArray.length;i++){
            let isPrime = true;
            if(inputArray[i] === 2 || inputArray[i] === 3){
                primes.push(inputArray[i]);
                continue;
            }
            for(let j = 2; j*j<=inputArray[i];j++){
                if(inputArray[i]%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(inputArray[i]);
            }
        }
 
    return(primes);
}
console.log(findPrimes([9,3,7,11,21,31]));


// IIFE
(function(inputArray){
    const primes = [];
    
        for(let i = 0; i<inputArray.length;i++){
            let isPrime = true;
            if(inputArray[i] <= 1){
                continue;
            }
            if(inputArray[i] === 2 || inputArray[i] === 3){
                primes.push(inputArray[i]);
                continue;
            }
            for(let j = 2; j*j<=inputArray[i];j++){
                if(inputArray[i]%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(inputArray[i]);
            }
        }
 
    console.log(primes);
})([1,2,3,4,7,8]);