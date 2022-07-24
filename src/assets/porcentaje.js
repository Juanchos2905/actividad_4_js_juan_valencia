/* Un maestro desea saber qué porcentaje de hombres y qué porcentaje
de mujeres hay en un grupo de estudiantes.*/

let cantHombres = parseInt(prompt("Ingrese la cantidad de hombres", "0")),
  cantMujeres = parseInt(prompt("Ingrese la cantidad de mujeres", "0"))
  
const canTotal = cantHombres + cantMujeres;

alert(`Total de estudiamtes en el grupo: ${canTotal}.`);

alert(
  `El porcentaje de hombres (${cantHombres}) es ${(cantHombres / canTotal)*100}%`
);

alert(
  `El porcentaje de mujeres (${cantMujeres}) es ${(cantMujeres / canTotal)*100}%`
);

/*Tip para entender los porcentajes: Si ponemos que hay 3 hombres y 3 mujeres nos debe de salir que hay 
50% (la mitad del 100%) hombres y 50% (la otra mitad) mujeres.*/