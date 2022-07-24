console.warn('Parametro por valor y por referencia')
console.warn('Parametro por valor')

let a = 10 
let b = a
// b = b + 12
b += 12

console.log({ a, b })

console.warn('Parametro por referencia')

let manuel = { edad: 20 }
let carolina = manuel
carolina.edad = 30

console.log({ manuel, carolina })



console.warn('Rompiendo la referencia')

let jordan = { edad: 20}
let anderson = {...jordan}
anderson.edad = 30

console.log({jordan, anderson});