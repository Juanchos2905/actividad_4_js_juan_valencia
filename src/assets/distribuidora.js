let tipoHuevo = parseInt(prompt(' Ingrese 1 si desea llevar huevos A \n Ingrese 2 si desea llevar huevos doble AA')),
cantidad = parseInt(prompt('Ingrese cuántos huevos desea llevar:')),
precioHuevoA = 220,
precioHuevoAA = 250

if (tipoHuevo == 1){
    if(cantidad >= 1 && cantidad <= 100){
        alert(`Tuvo un descuento de: 0% \n Usted debe pagar: ${cantidad*precioHuevoA}`)
    }else if(cantidad >= 101 && cantidad <= 200){
        alert(`Tuvo un descuento de: 5% (${((cantidad*precioHuevoA)*0.05)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoA} \n Total a pagar con descuento: ${(cantidad*precioHuevoA)-((cantidad*precioHuevoA)*0.05)}`)
    }else if(cantidad >= 201 && cantidad <= 300){
        alert(`Tuvo un descuento de: 8% (${((cantidad*precioHuevoA)*0.08)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoA} \n Total a pagar con descuento: ${(cantidad*precioHuevoA)-((cantidad*precioHuevoA)*0.08)}`)
    }else if(cantidad >= 301){
        alert(`Tuvo un descuento de: 10% (${((cantidad*precioHuevoA)*0.1)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoA} \n Total a pagar con descuento: ${(cantidad*precioHuevoA)-((cantidad*precioHuevoA)*0.1)}`)
    }
}else if(tipoHuevo == 2){
    if(cantidad >= 1 && cantidad <= 100){
        alert(`Tuvo un descuento de: 0% \n Usted debe pagar: ${cantidad*precioHuevoAA}`)
    }else if(cantidad >= 101 && cantidad <= 200){
        alert(`Tuvo un descuento de: 5% (${((cantidad*precioHuevoAA)*0.05)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoAA} \n Total a pagar con descuento: ${(cantidad*precioHuevoAA)-((cantidad*precioHuevoAA)*0.05)}`)
    }else if(cantidad >= 201 && cantidad <= 300){
        alert(`Tuvo un descuento de: 8% (${((cantidad*precioHuevoAA)*0.08)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoAA} \n Total a pagar con descuento: ${(cantidad*precioHuevoAA)-((cantidad*precioHuevoAA)*0.08)}`)
    }else if(cantidad >= 301){
        alert(`Tuvo un descuento de: 10% (${((cantidad*precioHuevoAA)*0.1)}) \n Total a pagar sin descuento: ${cantidad*precioHuevoAA} \n Total a pagar con descuento: ${(cantidad*precioHuevoAA)-((cantidad*precioHuevoAA)*0.1)}`)
    }
}else{
    alert(`Error. Usted ingresó un número fuera del rango`)
}