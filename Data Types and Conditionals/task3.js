if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

///////////////

let a = 3;
let b = 2;
let result;

result = (a + b < 4) ? 'Below' : 'Over';
////////////////////////////////
(a + b < 4) ? result = 'Below' : result = 'Over';

console.log(result); // Output: 'Over'
