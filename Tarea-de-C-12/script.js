/* )Crea una función llamada decirNombre(nombre) y nos ejecute 
una alerta “Hola “ + nombre */

/* function decirNombre(nombre) {
    alert( 'hola ' + nombre)

}
decirNombre( 'Dai') */


/* Crea una función llamada saludar(nombre) y nos devuelva un 
 string  “Hola “ + nombre y luego invoca la función dentro de una alerta */


/* function saludar(nombre) {
    return 'hola ' + nombre
}
alert(saludar('dai')) */


/* 3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b */
/* function sumar(a, b) {

    return a + b;

}
alert(sumar(35,5)) */

/* Crea una función llamada restar(a,b) y nos devuelva la resta de a y b */
/* function resta(a,b){
    return a - b;

}
alert(resta(55,6)) */

/* 5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” 
invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null */

/* function sumar(a, b) {
    return a + b
}
function restar(a, b) {
    return a - b
}
function calcular(operacion, a, b) {
    if (operacion === '+') {
        return (a, b)
    }
    else if (operacion === '-') {
        return (a, b)
    } else {
        return null
    }

}
console.log(calcular('+', 50, 50));
console.log(calcular('-', 50, 30)) */



/* Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola */
/* function contarHasta(numero){
    for(let iteracion=1;iteracion <= numero; iteracion = iteracion +1){
        console.log( iteracion)
    }
}
contarHasta(100) */