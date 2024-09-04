const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const btnEliminar= document.getElementById("btnEliminar")



if(this.localStorage.getItem("nombre")!=null){
    alertValidaciones.innerHTML=`hola, ${this.localStorage.getItem("nombre")} bienvenido de nuevo`
    alertValidaciones.style.display="block";
}

btnEliminar.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.removeItem("nombre")
    location.href="welcome.html"
})
