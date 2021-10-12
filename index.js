console.log("hola")

// ELEMENTOS DEL HTML

const botonNav = document.getElementById("button-nav")
const formLogin = document.getElementById("form-modal-login")
const botonCerrarModalDeLogin = document.getElementById("close-modal")
const inputUsuario = document.getElementById("email")
const inputContraseña = document.getElementById("password")
const botonEnviarLogin = document.getElementById("button-login")

// FUNCION PARA (OBJETO A JSON GUARDAR EN LOCALSTORAGE && TOMAR UN DATO DE LOCALSTORAGE // JSON A OBJETO )

const convertirYGuardarJSONEnLocalStorage = (objeto, clave) =>{
const objetoJSON = JSON.stringify(objeto)
localStorage.setItem(clave, objetoJSON)
return objetoJSON
}

const deLStorageAObjeto = (clave) =>{
const JSONAObjeto = localStorage.getItem(clave)
const objetoNuevo = JSON.parse(JSONAObjeto)
return objetoNuevo
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
    window.location.href="pagina.html"
    convertirYGuardarJSONEnLocalStorage({sesionIniciada : true}, "Sesion")
    estaIniciada("Sesion")            
}
else{
    inputUsuario.style.border = "1px solid red"
    inputContraseña.style.border = "1px solid red"
    console.log("datos incorrectos")   
}
}

const estaIniciada = (id) =>{
deLStorageAObjeto(id)
if(objetoNuevo === true){
    window.location.replace= "pagina.html"
}
} 