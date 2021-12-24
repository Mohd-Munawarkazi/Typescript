var data = 240;
// let myData:any=10.1065845
console.log(data);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
var result = add("Ayaan", " muawar");
console.log(result);
