

/* async await */
const solicitarUsuarios = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}
solicitarUsuarios()

/* ejecutar una peticion http 
con metodo get a esta direccion https://jsonplaceholder.typicode.com/posts
una vez obtenido el json de esa direccion deberas renderizar todos los posteos 
en html un div con
la siguiente estructura : 
<div>
h3: post.title
p: post..body
button: ♥
 </div> */



const solicitarPost = async () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    
    const resultado = await respuesta.json()
    console.log(resultado)

    let plantillaHtml = ''
    for(const post of resultado){
        plantillaHtml = plantillaHtml + `
        <div>
        <h3>${post.title}</h3>
        <p>${past.body}</p>
        <button>:♥</button>
        `
    }
    contenedorDePosteos.innerHtml = plantillaHtml
}
solicitarPost()

/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}) */






