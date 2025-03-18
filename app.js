// @ts-nocheck
let NombreAmigos= [];

function validarTexto(texto) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function agregarAmigo(){
    const BtnAmigos=document.getElementById("amigo");
    const NombrePar=BtnAmigos.value.trim();

    if(!validarTexto(NombrePar) || NombrePar===""){
        alert("El nombre no es valido por usar numeros o caracteres especiales, intentelo de nuevo");
        BtnAmigos.value="";
        return;
    }

    if (NombreAmigos.includes(NombrePar)) {
        alert("Este nombre ya está en la lista, intenta con otro.");
        BtnAmigos.value = "";
        return;
    }

    NombreAmigos.push(NombrePar);
    nuevaListaAmigos();
    BtnAmigos.value="";
    console.log(NombreAmigos);
}

function nuevaListaAmigos() {
    const LisAmigos = document.getElementById("listaAmigos");
    LisAmigos.innerHTML = "";

    for (let i = 0; i < NombreAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = NombreAmigos[i];
        LisAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    if (NombreAmigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const indice = Math.floor(Math.random() * NombreAmigos.length);
    const amigoSorteado = NombreAmigos[indice];
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSorteado}`;

    NombreAmigos.splice(indice, 1);
    nuevaListaAmigos();
}

function Reinicio(){
    NombreAmigos=[];
    document.getElementById("resultado").textContent="";
    nuevaListaAmigos();
}