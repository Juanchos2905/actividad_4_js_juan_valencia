/* console.log("Conectado a funciones-2");

console.warn("Función tradicional con clave valor reptida");

function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPersona("Juan", "Valencia");
console.log({ persona });

//--------------------------------------------------------

console.warn("Función tradicional con clave sin repetir");

function crearPersona2(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

const persona2 = crearPersona2("Valentina", "Montoya");
console.log({ persona2 });

//-----------------------------------------------------
console.warn("Función flecha con llaves- tercera");

const crearPersona3 = (nombre, apellido) => {
  return {
    nombre,
    apellido,
  };
};

const persona3 = crearPersona3("Marisol", "Murillo");
console.log({ persona3 });

//-----------------------------------------------------
console.warn("Función flecha sin llaves - cuarta");

const crearPersona4 = (nombre, apellido) => ({ nombre, apellido });

const persona4 = crearPersona4("Sandra", "Zúñiga");
console.log({ persona4 });

//-----------------------------------------------------
console.warn("Pasando argumentos");

const argumentos = (...args) =>{
    return args
}

const datos = argumentos(10, true, false, 'Juan', 'Manuel')

console.log({datos}); */

//-----------------------------------------------------
console.warn("Desestructurando");

const args = [25, "Quinta de U", "Kardashian", true, function () {console.log('cantar');}];

const [edad, apellido, nombre, cantante, cantar] = args;

const integranteBTS = {
  edad,
  apellido,
  nombre,
  cantante,
  cantar,
};


console.log(integranteBTS);


