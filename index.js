console.log("hola")

// ELEMENTOS DEL HTML

const botonNav = document.getElementById("button-nav")
const formLogin = document.getElementById("form-modal-login")
const botonCerrarModalDeLogin = document.getElementById("close-modal")
const inputUsuario = document.getElementById("email")
const inputContraseña = document.getElementById("password")
const botonEnviarLogin = document.getElementById("button-login")

// FUNCIONES REUTILIZABLES (OBJETO A JSON // JSON A OBJETO )

const conversionAJSON = (objeto) =>{
    const objetoAJSON = JSON.stringify(objeto)
}

const conversionDeJSONAObjeto = (objetoJSON) =>{
    const nuevoObjetoDesdeJSON = JSON.parse(objetoJSON)
}

// FUNCION PARA GUARDAR EN LOCALSTORAGE Y TOMAR UN DATO DE LOCALSTORAGE

const guardarJSONEnLocalStorage = (objeto, clave) =>{
    const objetoJSON = conversionAJSON(objeto)
    localStorage.setItem(clave, objetoJSON)
}

const objetoObtenidoDeLStorage = (clave) =>{
    const JSONAObjeto = localStorage.getItem(clave)
    const objetoNuevo = JSON.parse(JSONAObjeto)

}

// FUNCIONES DE BOTONES

botonNav.onclick = () =>{
    formLogin.style.display ="flex"
}

botonCerrarModalDeLogin.onclick = () => {
    formLogin.style.display ="none"
}



// LOGIN OBJETO/JSON

const usuario = {
    email: "carola@gmail.com",
    contraseña: "Botcarola27"
}

let  sesionIniciada = false


botonEnviarLogin.onclick = () =>{
    if (usuario.email === inputUsuario.value && usuario.contraseña === inputContraseña.value){
        sesionIniciada = true
                
    }
    else{
        inputUsuario.style.border = "1px solid red"
        inputContraseña.style.border = "1px solid red"
        sesionIniciada = false      

    }


}