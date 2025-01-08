//FIBONACCI

//via Loop
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
}

//via Recursion
function fiboncci(n) {
    // base case
    if (n === 0) return 0;
    else if (n === 1) return 1;

    //recursive case
    return fiboncci(n - 1) + fiboncci(n - 2);
}


//EVEN NUMBERS

//via Modulo
function isEvenMod(n) {
    if (n % 2 === 0) return true;
    return false;
}

//via Recursion
function isEven(n) {
    // base case
    if (n === 1) return false;
    if (n === 0) return true;
    if (n < 0) return isEven(-n);

    //recursive case
    return isEven(n - 2);
}


// FACTORIAL

// n! = n x (n-1) x (n-2) x ... x 2 x 1
// 3! = 6
// 4! = 24

function factorial(n) {
    //base case
    if (n === 0) {
        return 1;
    }

    //recursive case
    return n * factorial(n-1);
}


// SUMMATION

// via Loop
function sumLoop (n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
        console.log(sum);
    }
}

//via Recursion
function sumRec (n) {
    // base case
    if (n === 0) {
        return 0;
    }
    //recursive case
    return n + sumRec(n-1);
}

// COUNTDOWNS

// via Loop
function countDownLoop(n) {
    for (let i = n; i > 0; i--) {
            console.log(i);
        }
    console.log("Done");
}

//via Recursion
function countDown(n) {
    // base case
    if (n <= 0) {
        console.log("Done");
        return;
    }
    
    // recursive case
    console.log(n);
    countDown(n-1);
}

function countDownReturn(n) {
    // base case
    if (n <= 0) {
        return "Done";
    }
    
    // recursive case
    return n + ", " + countDownReturn(n-1);
}



/*
function countDown(4) {
    
    console.log(4); // 4
    countDown(3);
    
        console.log(3); // 3
        countDown(2);
            
            console.log(2); // 2
            countDown(1);
                
                console.log(1); // 1
                countDown(0);
                    if (n <= 0) {
                        console.log("Done"); // Done
                        return;              // STOP FUNCTION   
                    }
                    
}
*/
