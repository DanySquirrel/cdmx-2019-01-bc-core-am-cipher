//debería ser un objeto
// window.objeto --- contiene encode
window.cipher = {
//debería ser una función
// funcion encode contiene los inputs
//(:) funcion dentro de un objeto (.)

 //debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33
encode: (offsetValue,messageValue) => {

  let offset= parseInt(offsetValue)

  let parrafoA = "";




  for (let i=0; i < messageValue.length; i++){

  let numeroAscii= messageValue.charCodeAt(i);
 
  // (i-65+n)% 26+65 = desplazamiento abc/hij
  let desplazamientoCsr= (numeroAscii-65+offset)% 26+65;
  // devolver cadena creada con valores unicode
  let cifrado=String.fromCharCode(desplazamientoCsr);
   
  parrafoA += cifrado
  }
 
  return parrafoA;
 },



//DECODE

//debería ser una función
//debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33

 decode:(offsetValue,messageValue) => {

   let offset= parseInt(offsetValue)
 
  
   let parrafoB = "";
 
   for (let i=0; i < messageValue.length; i++){
 
   let numeroAscii= messageValue.charCodeAt(i);
  
   // (i+65-n)% 26+65 = desplazamiento abc/hij
   let desplazamientoCsr= (numeroAscii+65-offset)% 26+65;
   // devolver cadena creada con valores unicode
   let descifrado=String.fromCharCode(desplazamientoCsr);
   
   parrafoB += descifrado
   }
   
   return parrafoB;
   
  }



}

   





