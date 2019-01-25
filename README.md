# Generador de códigos

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


## (#ME HashtagMe) 

 _#ME_ Es una aplicación y herramienta para _Influencers_, conductores de medios de comunicación y usuarios en general.

 Siempre hemos visto en television, radio y ahora en internet actividades para ganar premios y ¿Qué tal si esos premios ahora se ganan con algun cifrado por internet? 

 Los usuarios ( Influencers, conductores, público en general) lanzan un offset al inicio de un _live Stream_ /evento o en sus redes sociales y al terminar el stream/evento otorgan el código para descifrar el mensaje.

 Este mensaje puede ser desde alguna marca la cual patrocina al influencer o alguna actividad que el mismo este realizando sobre alguna campaña publicitaria o personal.
 El mensaje descifrado sera el brand de la marca o la misma marca y la compartiran por twitter o alguna red social. Esta se comparte con un # y etiquetas.
 Los primeros en publicarlo de manera correcta serán ganadores de productos de la marca, boletos, eventos o aquello que decida el usuario-ifluencer.


La interfaz permite al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.


## Detalles y consideraciones técnicas


1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/), 
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programa que interpreta líneas de comando (command-line
   interpreter) así como tener [git]instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/DanySquirrel/cdmx-2019-01-bc-core-am-cipher) 
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
7. A codear se ha dicho! :rocket:

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.




##Test


Los tests unitarios deben cubren un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

Los test comprueban:

* Cipher

Debería ser un objeto

* Encode: Debería ser una función y debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33

* Decode: Debería ser una función y debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33

#### Pruebas de estilo de codificacion 

* eslint
* htmlhint
* mocha
* nyc
* opener


#### Deployment 📦

visita el proyecto en github pages : https://danysquirrel.github.io/cdmx-2019-01-bc-core-am-cipher/src/

##Construido con 🛠️

Las herramientas que se utilizaron para crear este proyecto fueron: El editor de texto [Visual Code](https://www.sublimetext.com) o cualquier otro de su preferencia.
La lógica del proyecto esta implementada completamente en JavaScript (ES6) [vanilla JavaScript].
Contiene _markup_ (HTML) e incluir el CSS y JavaScript
Se usaron fuentes tipográficas de https://fonts.google.com


##Contribuciones🖇️

Por favor lee el CONTRIBUTING.md para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests o a través del correo electrónico.


##Autores ✒️

Base de proyecto

* diegovelezg
* shirley-startary
* developerVilchez
* lupomontero
* gaposx

(#ME)

* Daniela Sierra danysquirrel


## Expresiones de Gratitud 🎁

* Al equipo de Coaches por apoyarme durante este proyecto. 📢
* Al Squad #Memexicode y compañeras en general por su trabajo de equipo e inspiración 🤓.

# Generador de códigos

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


## (#ME HashtagMe) 

 _#ME_ Es una aplicación y herramienta para _Influencers_, conductores de medios de comunicación y usuarios en general.

 Siempre hemos visto en television, radio y ahora en internet actividades para ganar premios y ¿Qué tal si esos premios ahora se ganan con algun cifrado por internet? 

 Los usuarios ( Influencers, conductores, público en general) lanzan un offset al inicio de un _live Stream_ /evento o en sus redes sociales y al terminar el stream/evento otorgan el código para descifrar el mensaje.

 Este mensaje puede ser desde alguna marca la cual patrocina al influencer o alguna actividad que el mismo este realizando sobre alguna campaña publicitaria o personal.
 El mensaje descifrado sera el brand de la marca o la misma marca y la compartiran por twitter o alguna red social. Esta se comparte con un # y etiquetas.
 Los primeros en publicarlo de manera correcta serán ganadores de productos de la marca, boletos, eventos o aquello que decida el usuario-ifluencer.


La interfaz permite al usuario:

- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.


## Detalles y consideraciones técnicas


1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/), 
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programa que interpreta líneas de comando (command-line
   interpreter) así como tener [git]instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/DanySquirrel/cdmx-2019-01-bc-core-am-cipher) 
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
7. A codear se ha dicho! :rocket:

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.




##Test


Los tests unitarios deben cubren un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

Los test comprueban:

* Cipher

Debería ser un objeto

* Encode: Debería ser una función y debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33

* Decode: Debería ser una función y debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33

#### Pruebas de estilo de codificacion 

* eslint
* htmlhint
* mocha
* nyc
* opener


#### Deployment 📦

visita el proyecto en github pages : https://danysquirrel.github.io/cdmx-2019-01-bc-core-am-cipher/src/

##Construido con 🛠️

Las herramientas que se utilizaron para crear este proyecto fueron: El editor de texto [Visual Code](https://www.sublimetext.com) o cualquier otro de su preferencia.
La lógica del proyecto esta implementada completamente en JavaScript (ES6) [vanilla JavaScript].
Contiene _markup_ (HTML) e incluir el CSS y JavaScript
Se usaron fuentes tipográficas de https://fonts.google.com


##Contribuciones🖇️

Por favor lee el CONTRIBUTING.md para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests o a través del correo electrónico.


##Autores ✒️

Base de proyecto

* diegovelezg
* shirley-startary
* developerVilchez
* lupomontero
* gaposx

(#ME)

* Daniela Sierra danysquirrel


## Expresiones de Gratitud 🎁

* Al equipo de Coaches por apoyarme durante este proyecto. 📢
* Al Squad #Memexicode y compañeras en general por su trabajo de equipo e inspiración 🤓.

