
// nombrar id como const

// Declarar la variable de input message html- guarda el valor
  const message = document.getElementById("message");
// Declarar la variable de input number html- guarda el valor
  const number= document.getElementById("number");
// BOTON---------Declarar la variable de button button html
// ejecutar funcion encode
  const button=document.getElementById("button");


  //usar addEventListener para el boton y guardar el dato evento/funcion
  // mandar a llamar que lo va a detonar (boton) Evento- funcion anonima
  // funcion- ejecutar (window.ruta.encode)---rutas de objeto

  // con el click trae el valor que contienen los inputs  c/ . value

   button.addEventListener("click",() => {
  //declarar valor mensaje.v y ponerlo en nueva variable menssageV - mayusculas
    let messageValue= message.value.toUpperCase();
  //declarar valor opcion lugar.v y ponerlo en nueva variable offsetV
    let offsetValue= number.value;


      window.cipher.encode(messageValue,offsetValue);
});



// Ejecutar funcion encode
