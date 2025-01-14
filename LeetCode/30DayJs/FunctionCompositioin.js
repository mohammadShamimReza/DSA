 function compose(functions,) {
   console.log(functions.length);

   
     
   return function (x) {
       console.log(x);
       let parem = x
       for (let i = functions.length - 1; i >= 0; i--) {
           console.log(i);
           
           parem =  functions[i](parem)
           console.log(parem);
           
       }
     return parem;
   };
 };


const res = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4);

console.log(res);
