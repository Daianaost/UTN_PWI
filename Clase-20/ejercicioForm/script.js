/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active
el evento submit

Cuando se envie el formulario se debera capturar titulo y body ,
se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/

/* async: Declara que la función es asincrónica, lo que permite el uso de await dentro de ella.
la función handleSubmit se encarga de manejar los datos enviados a través del formulario*/
const handleSubmit = async (evento) => {
    //previene el comportamiento por defecto del form:
    evento.preventDefault()
    //captura los valores del form : 
    /* Obtiene el valor actual del campo de entrada con el ID title /body y lo asigna a la variable titulo. */
    const titulo = document.getElementById('title').value
    const body = document.getElementById('body').value
    //Imprime en la consola los datos capturados del formulario
    console.log('Datos enviados', { title: titulo, body: body });
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: ' post',
        body: JSON.stringify({
            title: titulo,
            body : body,
            id: 1,
        })
    })
}