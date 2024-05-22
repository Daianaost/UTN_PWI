/*


fuera no valida */
let calificacion = prompt('introduzca una calificacion numerica entre 0 y 100')
if(calificacion >= 90 && calificacion <= 100){
    console.log('A')
}
if(calificacion>=80 && calificacion<=89){
    console.log('B')
}
if(calificacion >= 70 && calificacion <= 79){
    console.log('C')
}
if(calificacion>= 60 && calificacion<= 69){
    console.log('D')
}
if(calificacion>= 0 && calificacion<= 59){
    console.log('E')
}
else{
    console.log('calificacion no valida')
}