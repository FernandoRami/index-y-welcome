const btnAgregar= document.getElementById("btnAgregar")
const txtNombre = document.getElementById("Name");


btnAgregar.addEventListener("click",function(event){
    
    if(txtNombre.value.length>3){
        let nombre =txtNombre.value

        localStorage.setItem("nombre",nombre)

        txtNombre.value=""
    }
})




txtNombre.addEventListener("blur",function(event){
    txtNombre.value= txtNombre.value.trim();
}); 

let myVariable = nombre; 
localStorage.setItem('myVariable', myVariable); 
window.location.href = 'welcome.html'; 