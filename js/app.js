console.log("Hola Mundo")
/* console.log("Hola")

let nombre = "Nodo Tecnologico";

let edad = 18 

console.log("Hola soy " + nombre + "y tengo" + edad + "años")

// Definicion de una función 
function suma(numero1 , numero2){
    return numero1 + numero2
}

//Llamado a la función

let resultado = suma("5","8")

console.log(resultado) */

const persona = {
    nombre: "Nodo Tecnologico",
    edad: 5,
    anioDeNacimiento: 2020
    
 }
 
 console.log(" hola soy el " + persona.edad)
 
 
 const textoHeader = document.querySelector('#heading')
 
 console.log(textoHeader)
 
textoHeader.textContent = "Nuevo Texto"
 
 textoHeader.classList.add('nueva-clase')
 
 const enlaces= document.querySelectorAll('.navegacion a')
 
 console.log(enlaces)
 
 enlaces[2].textContent= "Nuevo enlace"

 const nuevoEnlace = document.createElement('A')
 nuevoEnlace.textContent= "Ver más"
 nuevoEnlace.href ="https://paletadecolores.com.ar/"
 nuevoEnlace.classList.add("nueva-clase")

 const navegacion = document.querySelector('.navegacion')

 navegacion.appendChild(nuevoEnlace)
 const nuevoParrafo = document.createElement('P')
 nuevoParrafo.textContent= "En este Blog de Café, aprenderas nuevos estilos de café y como hacerlos!"
 nuevoParrafo.classList.add("nueva-clase")
 const header_texto = document.querySelector(".header__texto")
 header_texto.appendChild(nuevoParrafo)
 
 const btnForm= document.querySelector('.formulario input[type=submit]')
 console.log(btnForm)

 /*btnForm.addEventListener('click', funcion(){

 })*/

 btnForm.addEventListener('click', imprimirClick)

 function imprimirClick(e){
    e.preventDefault()
    console.log("click")
 }

 const btnNuevo= document.querySelector('h3')
 console.log(btnNuevo)
 btnNuevo.addEventListener('click', nuevoContacto)

 function nuevoContacto(e){
    btnNuevo.classList.toggle("nueva-clase")
    contacto.textContent="Error"
 }