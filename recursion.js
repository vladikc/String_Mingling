function fibonacci(n) {
    //find where you want it to stop
    if (n <= 2) { return 1 }


    console.log("N is currently: " + n)

    return fibonacci(n - 1) + fibonacci(n - 2)



    //recreate the formula by calling the function again recursively
    //f of n= (f of n-1)+ (f of n-2)

}


// console.log(fibonacci(5))

function sum(n) {
    // if (n <= 1) { return 1 }
    // return n + sum(n - 1)

    return (n<=1) ? 1 : n + sum(n-1)

}


function multiplyOf3(n) {
    if (n <= 0) return 0

    //modify n so that it is a multiple of 3 
    if (n % 3 !== 0) {
        n = n - (n % 3)
    }
    return n + multiplyOf3(n - 3)

    
}


console.log(sum(4))
