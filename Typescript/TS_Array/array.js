var arr = ["Ayaan", "kazi", "munawar", "extended"];
// console.log(arr);
console.log(arr[1]);
// arr.push("Hello world")
// arr.push(123) ///error
console.log(arr);
// let a="Ayaan kazi";
// console.log(a);
// let arr1:[string,number,boolean]=["Extended",123,true]
var arr1 = ["Extended", 123, true];
console.log(arr1);
//////////////////tuple//////////////////
var role_number = ['Aamer', 1234];
role_number.push(true);
role_number[1] = 234;
console.log(role_number);
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["manager"] = 1] = "manager";
    role[role["read_only"] = 2] = "read_only";
})(role || (role = {}));
console.log(role);
console.log(role.manager);
