let arr:string[]=["Ayaan","kazi","munawar","extended"];
// console.log(arr);
console.log(arr[1]);
// arr.push("Hello world")
// arr.push(123) ///error
console.log(arr);
// let a="Ayaan kazi";
// console.log(a);


// let arr1:[string,number,boolean]=["Extended",123,true]
let arr1:any[]=["Extended",123,true]

console.log(arr1);

//////////////////tuple//////////////////

let role_number:[string,number,boolean?]=['Aamer',1234]

role_number.push(true)
role_number[1]=234;
console.log(role_number);

enum role{
    admin,manager,read_only
}
console.log(role)
console.log(role.manager);