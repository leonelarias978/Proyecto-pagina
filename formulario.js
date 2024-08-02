let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("tel");
let textarea = document.getElementById("text");
let btn= document.getElementById("descargar");
let informacion = [];

telefono.addEventListener("keypress", (e) => {
    const expre =/[0-9]/;
    if(!expre.test(e.key)) e.preventDefault();

})

btn.addEventListener("click", (e) => {
    e.preventDefault(); // previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = tel.value;
    informacion[4] = text.value;

    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}`);

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"}); // navegador

    //Libreria FileSaver.js
       saveAs(blob, "contact.txt");

       console.log(blob);
})