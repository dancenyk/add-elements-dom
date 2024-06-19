 // Aquí tu código

 const btnAgregar = document.getElementById("agregar");
 const contenedorLista = document.getElementById("lista");

 function addList () {
   const ciudad = prompt("Introduce el nombre del país o ciudad");  
   if (ciudad){
      const li = document.createElement ("li");
      li.textContent = ciudad;
      contenedorLista.appendChild(li)
   }else{
      alert("Por favor ingrese un elemento válido")
   }
   
   
   /*
   const destino = document.createElement("li");
   destino.innerText = ciudad; 
   contenedorLista.appendChild(destino);
   */
 }
 
 
 btnAgregar.addEventListener("click", addList)





