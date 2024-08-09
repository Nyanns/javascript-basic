let a;
let b;

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function min(a, b) {
    if (a < b) {
        return a;
    }
    else if (a > b) {
        return b;
    }
}

function min2(a, b) {
    return (a < b) ? a : b;
}

