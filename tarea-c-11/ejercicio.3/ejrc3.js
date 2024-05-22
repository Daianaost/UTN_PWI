/* Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:

Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas."
 */
//3
let lado1 =prompt('introduzca la primer longitud')
let lado2= prompt('introduzca la segunda longitud')
let lado3= prompt('introduzca la tercera longitud')

if(lado1==lado2 && lado1 == lado3 && lado2== lado3){
    console.log('equilatero')
}
if( lado1=lado2 && lado1!== lado3 ){
    console.log('Isosceles')
}
if(lado1 !== lado2 && lado1!==lado3 && lado2 !== lado3){
    console.log('Escaleno')
}
if( lado1 , lado2 , lado3 <= 0)
    {console.log('longitud no valida')}