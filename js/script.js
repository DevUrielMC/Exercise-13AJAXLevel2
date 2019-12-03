let xhr= new XMLHttpRequest(),
    method= "GET",
    url="json/file3.json";

window.onload = function ()
{
    alert("Testo");
    //this.document.getElementById("resultado").addEventListener("click", this.mostrarMensaje);
    this.document.querySelector("#btnBring").addEventListener("click",MostrarMensaje);
}

function MostrarMensaje()
{
    xhr.open(method,url);
    xhr.onload = functionCallBack;
    xhr.send(null);
    console.log("Estamos en la funcion mostrar mensaje");
    //alert("testo");
}

function functionCallBack(){
    console.log("Estamos en la funcion call back");
    
    //document.querySelector("#resultado").innerHTML =xhr.responseText;
    let miJson= xhr.responseText;
    let miObjJson = JSON.parse(miJson);

    document.querySelector("#resultado").innerHTML = miObjJson.nombre;
    
    
    console.log(miJson);
}