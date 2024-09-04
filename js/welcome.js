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

//  rtMensaje = document-getElementById("alertMensaje");
// Eliminar = document-getElementById ("btnEliminar");
// dEventListener ("load", function(event){
// JS welcome.js U X
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// I ..
// his.localStorage.getItem ("nombre")!=null)(
// lertMensaje. innerHTML
// = Hola,
// «strong> ${this.localstorage-getItem"nombre")}</strong>,
// bienvenido/a de nuevo*;
// nombre!=null
// Mensajestyle.display="block";
// 1.
// ar .addEventListener("click", function (event)(
// • preventDefault();
// Storage. removeItem ("nombre"); ion. href="welcome.html";