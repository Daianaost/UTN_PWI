c
/* operadores logicos
!not> negacion (devuelve el valor opuesto del booleano del dato )
and &&   y  logico 
or ||  > o logico 

ejemplo de ! NOT
!(0*null) = como da 0 por el null y cero es falsy da true 
!('' - 1) = false
!NaN = 
con OR
SELECCIONA ENTRE DOS VALORES 
SI EL PRIMER VALOR ES UN TRUTHLY DEVUELVE EL PRIMER VALOR SINO DEVUELVE EL SEGUNDO VALOR  

AND 
SI EL PRIMER VALOR ES thruly devuelve el segundo cvalor sino devuelve el segundo 
se tienen que cumplir ambas condiciones 
tablas de la verdad
or :    true || true  es true 
        false || true  es true 
        true || false es true
        false ||jkgf6 false  es false 
        
        AND
        TRUE AND TRUE es true 
        FALSE AND TRUE es false
        TRUE AND FALSE es false
        false and false es false 
        


        ejercicio ver en git
     */


/* variables 
tipo var 
hacen una referncia a un dato especifico 
tiene hoisting

declaro una variable - inicializo implicito es decir q no le asigne un valor
tipo_variable (var) identificador(nombre) = dato
var - el valor por defecto implicito es undefined  
incio explicitamente es que ya le asigne un  valor
*/

/* var nombre = 'pepe'
console.log("hola mi nombre es" + nombre);

var edad = 90 */
//hoisting
/*sube la declaracion  / esto lo hace js por detras
var  apellido = u ndefinded
console.log (apellido)
apellido='suarez'
console.log(apellido)*/
/* VARIABLE TIPO LET

LET (de ES6+) declaro e inicializo la variable explicita :*/
//let nombre ='pepe'

/*NO NO  tiene hoisting
tiene valor implicito en undefined
se puede reasignar
NO se puede REdeclarar en el mismo block-scoped 
los datos primitivos se declaran con let*/

/* variable CONST (constante) se declaran con datos objeto  
NO tiene hoisting
NO tiene valor implicito en undefined, es implicitio
NO se puede reasignar
NO se puede redeclarar
*/

/* 
scope y block (bloque y alcance)
que es un bloque de codigo todo lo que esta por ej dentreo de unas {
    crea un bloque de codigo 
}
lo escribimos fuera de esas esta drento del bloque globas /principal y 
podemos crear otros bloques mediante {}
la variable de tipo var tiene un alcance global /scope global se puede escribir por fuera de los {}


la variable tipo LET tiene un alcance local , se tiene que llamar dentro del bloque donde se declaro 
se puede redelclarar cuadno sea de bloques distintos 
practicas en github
 */

/* IF STAMENT / CONDICIONA
if(condicion){
    bloque de codigo
}
if verifica que la condicion sea un thruly
else{se ejecuta cuando la condicion del if se falsy}

ej si el usuario se llama pepe lo dejo pasar 
let nombre = pepe
if(nombre==='pepe')´{
    console.log('te dejo pasar')
}
else{}
 

let email =prompt me permite solicitar un dato 


validacion : if (email){
    console.log('correcto')
}
else {
    console.log('ERROR')
}

*/
/* 
solicitar al usuario una edad y un lenguaje favorito
Si su edad es mayor a 16 y su lenguaje favortio es 'JS' 
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/
/* let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')
if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}else{
    console.log('No se puede ser perfecto en todo')
} */

/* ELSE IF  */
