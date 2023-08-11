const div = document.getElementById("divbton")
const boton = document.getElementById("bton")

div.addEventListener("click",function()  {
    alert("Hola! Soy el div.");
});

boton.addEventListener("click",function(){
    alert("Hola!");
    event.stopPropagation();
})