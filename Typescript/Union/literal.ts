 

        function combine(a:number|string,b:number|string){


            if(typeof a==="number" && typeof b==="number"){

                return a+b
            }else if(typeof a==="string" && typeof b==="string"){
                return a+b
            }
        }

        let result=combine("munawarkazi"," Ayan kazi");
         result=combine(250,2500);
        console.log(result);

        function combine1(a:number|string,b:number|string, type:"as-number"|"as-string"){


             if(type==="as-number"){
                 return (+a)+(+b);

             }else{
                 return a.toString()+b.toString()
             }
        }
         let myresult=(combine1(255,255,"as-number"))


         ////////////////as-string///////////
          myresult=(combine1("world222"," hello","as-string"))
         console.log(myresult);

    