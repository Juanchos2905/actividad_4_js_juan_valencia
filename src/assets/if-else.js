console.log("Conectado a if-else");

console.warn("Construyebdi un if - else");

let a = 9;

if (a > 10) {
  console.log(`${a} es mayor a 10`);
} else {
  console.log(`${a} es menor que 10`);
}

console.log("Fin del programa");

//---------------------------------------------

console.warn("Días de la semana");

 const hoy = new Date();
 let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else {
  console.log("No es ni domingo ni lunes");
}

// const hoy = new Date();
// let dia = hoy.getDay();


/*actividad #1 sacar el dia de hoy usando array, pero sin usar  sin if o switch*/
const diasDeLaSemana = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

console.log(diasDeLaSemana[dia]);
//----------------------------------

/*actividad #2 sacar el dia de hoy usando objeto, pero sin usar  sin if o switch*/
const diasSemana = {0: "domingo", 1: "lunes", 2: "martes", 3: "miercoles", 4: "jueves", 5: "viernes", 6: "sabado"}
  
  console.log(diasSemana[dia]);
  
