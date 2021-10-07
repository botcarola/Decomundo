console.log("hola")

// ELEMENTOS DEL HTML

const botonNav = document.getElementById("button-nav")
console.log(botonNav)
const formLogin = document.getElementById("form-modal-login")
const botonCerrarModalDeLogin = document.getElementById("close-modal")


// FUNCIONES DE BOTONES

botonNav.onclick = () =>{
    formLogin.style.display ="flex"
}

botonCerrarModalDeLogin.onclick = () => {
    formLogin.style.display ="none"
}

