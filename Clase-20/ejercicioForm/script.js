/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/

const loginHTML = document.getElementById('login')
const handleFormSubmit = (evento) => {
    evento.preventDefault();
    console.log('Formulario enviado');
    console.dir(loginHTML.title.name);
    console.dir(loginHTML.body.value);
};

loginHTML.addEventListener('submit', handleFormSubmit);