let numero1 = parseInt(prompt('Ingrese un número.')),
numero2 = parseInt(prompt('Ingrese otro número.')),
operation = prompt('Escriba que operación desea hacer: \n-sumar. \n-restar. \n-multiplicar. \n-dividir.')


if ((operation.toLowerCase()) === ('sumar')) {
    alert(`El resultado es: ${numero1 + numero2}`)

} else if ((operation.toLowerCase()) === ('restar')){
    alert(`El resultado es: ${numero1 - numero2}`)
    
} else if ((operation.toLowerCase()) === ('multiplicar')){
    alert(`El resultado es: ${numero1 * numero2}`)

} else if ((operation.toLowerCase()) === ('dividir')){
    if (numero2 === 0){
        alert(`No se puede dividir entre 0.`)
    } else{
        alert(`El resultado es: ${numero1 / numero2}`)
    }
} else {
    alert(`Ingrese un número valido para realizar la operación.`)
}

/*Plus: Cuando el programa pregunta por la operación que se desea realizar, usted como usuario puede ingresar
las palabras de la siguiente manera (Sumar, RESTAR, MULtiplicar, DiViDir), puesto que cuenta con un metodo
que convierte toda la palabra en minusculas para evitar errores. */