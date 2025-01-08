function minDeclaration(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function minTenary(a,b) {
    return a < b ? a : b;
}

const minExpression = function(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//Arrow function + Implicit return
const minArrow = (a,b) => a < b ? a : b

// Even works with more complex expressions
const greet = name => `Hello, ${name}!`