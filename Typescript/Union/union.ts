let data:number|string|boolean=240;
// let myData:any=10.1065845

console.log(data);


function add(a:number|string,b:number|string){
    if(typeof a==="number" && typeof b==="number"){

        return a+b
    }else{
        return a.toString()+b.toString()
    }
}
let result=add("Ayaan"," muawar")
console.log(result);