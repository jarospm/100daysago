// two-character string has length 2, and its characters have positions 0 and 1.

// function countBs (string) {
//     let counterB = 0;
//     for (let i = 0; i < string.length; i++) 
//         if (string[i] == "B") counterB++;
//     console.log(counterB)
// }

function countChar (string,char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++)
        if (string[i] == char) counter++;
    return counter;
}

function countBs(string) {
    return countChar(string,"B");
}