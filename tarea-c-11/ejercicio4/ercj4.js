/* 4)
Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt. 
El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:

1: Lunes
2: Martes
3: Miércoles
4: Jueves
5: Viernes
6: Sábado
7: Domingo
Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido."
 */
// 4)introduzca un número del 1 al 7 mediante un prompt. El programa debe mostrar en la consola el día de la semana
let numero = Number((prompt('introduzca un número del 1 al 7 ' )));
if (numero === 1) {
    console.log("Lunes");
} else if (numero === 2) {
    console.log("Martes");
} else if (numero === 3) {
    console.log("Miércoles");
} else if (numero === 4) {
    console.log("Jueves");
} else if (numero === 5) {
    console.log("Viernes");
} else if (numero === 6) {
    console.log("Sábado");
} else if (numero === 7) {
    console.log("Domingo");
    } else if( numero < 1 || numero > 7 ) {
    console.log("Número no válido.");
}