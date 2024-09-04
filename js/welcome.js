const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

const myVariable = localStorage.getItem('myVariable'); 
// Outputs: HelloWorld 


    if(myVariable.value.length<3){
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML=`el <strong> Nombre</strong> no es correcto.<a href=/welcome.html>regresar</a><br/>`;
        alertValidaciones.style.display="block";
        isValid = false
    }//if length


 // Outputs: HelloWorld 