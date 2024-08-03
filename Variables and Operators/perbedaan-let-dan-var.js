function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}
exampleVar();

console.log("===========================");

function exampleLet() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10
}
exampleLet();

