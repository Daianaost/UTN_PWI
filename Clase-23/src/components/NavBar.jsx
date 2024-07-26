import React from 'react'

/* 
Van a crear un componente llamado Navbar y van a 
pasarle por props el objeto userData
Si isLogged es false entonces mostraran un button que diga 'login'
Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
OPCIONAL:
Si lang esta en 'en' todos los textos deben ser en ingles
Si lang esta en 'es' todos los textos deben ser en español
  */

const NavBar = (props) => {
    const userData = {
        isLogged: false,
        isAdmin: true,
        lang: 'en'
    }
    return (
        <div>

            {props.userData}
            {!userData.isLogged ? (
                <button>Login</button>
            ) : (
                userData.isAdmin && <button>Crear Producto</button>
            )}


        </div>
    )
}

export default NavBar