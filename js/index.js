const btnAgregar= document.getElementById("btnAgregar")
const txtNombre = document.getElementById("Name");


btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
   
    if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="el nombre no es correcto";
        alertValidaciones.style.display="block"
    }
    let nombre =txtNombre.value
    localStorage.setItem("nombre",nombre)
    txtNombre.value=""
})




txtNombre.addEventListener("blur",function(event){
    txtNombre.value= txtNombre.value.trim();
}); 

