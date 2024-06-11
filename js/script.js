 // Aquí tu código

 const btnAgregar = document.getElementById("agregar");
 const contenedorLista = document.getElementById("lista");

 btnAgregar.addEventListener("click", function(){
    const elementoListado = prompt("Introduce el nombre del país o ciudad");  
    const destino = document.createElement("li");
    destino.innerText = elementoListado; 
    contenedorLista.appendChild(destino);
 })





