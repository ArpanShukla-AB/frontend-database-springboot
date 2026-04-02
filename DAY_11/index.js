let random = Math.random();

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = prompt("Enter operation (+, -, *, /):");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random < 0.1) {
    // ✅ Perform correct calculation (10% cases)

    if (c === "+") {
        alert(a + b);
    } else if (c === "*") {
        alert(a * b);
    } else if (c === "-") {
        alert(a - b);
    } else if (c === "/") {
        alert(a / b);
    } else {
        alert("Invalid Operation");
    }

} else {
    // ❌ Perform WRONG calculation (90% cases)

    let wrongOp = obj[c];

    if (wrongOp === "+") {
        alert(a + b);
    } else if (wrongOp === "*") {
        alert(a * b);
    } else if (wrongOp === "-") {
        alert(a - b);
    } else if (wrongOp === "/") {
        alert(a / b);
    } else if (wrongOp === "**") {
        alert(a ** b);
    } else {
        alert("Invalid Operation");
    }
}