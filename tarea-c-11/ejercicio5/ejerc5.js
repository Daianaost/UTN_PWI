
/* 5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados 
Celsius mediante un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:

Sólido: 0 grados Celsius o menos.
Líquido: entre 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida.”
 */
//5)
let temperatura = prompt('introduzca una temperatura en grados Celsius')
//primero hay que validar . 
if (!temperatura/* o  temperatura === ''  temperatura === null */|| isNaN(temperatura)) {
    console.log('ERROR:Temperatura debe ser un dato numerico')
}
else {
    if (temperatura <= 0) {
        console.log('ESTADO SOLIDO ')
    }
    else if (temperatura >= 0 && temperatura <= 99) {
        console.log('ESTADO LIQUIDO')
    }
    else if (temperatura >= 100) {
        console.log('ESTADO GASEOSO ')
    }

}


