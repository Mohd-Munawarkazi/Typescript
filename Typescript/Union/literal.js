function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
}
var result = combine("munawarkazi", " Ayan kazi");
result = combine(250, 2500);
console.log(result);
function combine1(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
var myresult = (combine1(255, 255, "as-number"));
myresult = (combine1("world222", " hello", "as-string"));
console.log(myresult);
