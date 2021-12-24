var a = 20;
var b = "hello extended";
//function return it's type
function add() {
    return a;
}
console.log(add());
/////////void///////////
////a function without any return called void///////////
var today = "monday";
var myNumber = 5;
function addme() {
    //.log("hello world")
    console.log(today);
    console.log(myNumber * 5 * 5);
}
addme();
// console.log(    addme())
////////unknowm//////////////////
var data;
data = 20;
data = "hello";
var item;
//replcae value
if (typeof data === 'string') {
    item = data;
}
console.log(item);
////////never///////////
// TypeScript introduced a new type never, which indicates the values that will never occur.
//The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.  
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("hello");
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
keepProcessing();
