//debería ser un objeto
// window.objeto --- contiene encode
window.cipher= {
//debería ser una función
// funcion encode contiene los inputs
//(:) funcion dentro de un objeto (.)
encode: (messageValue,offsetValue) => {

   let offset= parseInt(offsetValue)

 
  let parrafoA = " ";

  for (let i=0; i < messageValue.length; i++){

  let numeroAscii= messageValue[i].charCodeAt();
 
  // (i-65+n)% 26+65 = desplazamiento abc/hij
  let desplazamientoCsr= ((numeroAscii-65+offset)% 26+65);
  // devolver cadena creada con valores unicode
  let cifrado=String.fromCharCode(desplazamientoCsr);
  
  parrafoA += cifrado
  }
  return parrafoA ;
  
 }


}

    //debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33
// decode:()=> { }



//debería ser una función
//debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33
