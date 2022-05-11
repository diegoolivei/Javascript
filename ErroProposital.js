function validaArray(arr, num) {
   try {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !=='object') throw new TypeError("Array precisa ser do tipo Obeject");

    if(typeof num !=='number') throw new TypeError("O nunero precisa ser do tipo Number");

    if (arr.lenght !== num) throw new RangeError("O tamanho do array tem que ser igual a Number");

    return arr;
   }

   catch(e){

if ( e instanceof ReferenceError){
    console.log("Esse é um ReferenceErro");
    console.log(e.message);
}
else if ( e instanceof TypeError){
    console.log("Esse éum TypeError");
    console.log(e.message);
}
else if ( e instanceof RangeError){
    console.log("Esse éum RangeError");
    console.log(e.message);
   }
   else ("Tipo de erro não esperado:" + e);
   
   }
}

console.log(validaArray([], 'a'));
