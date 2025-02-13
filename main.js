// onload = () =>{
//     document.body.classList.remove("container");
// };

// Función para cargar el JSON
async function cargarDatos() {
    const respuesta = await fetch('data.json');
    const datos = await respuesta.json();
    return datos;
}

// Función para mostrar los datos en la página
function mostrarDatos(datos) {
    // Personalizar el mensaje
    document.getElementById('nombre').textContent = datos.nombre;
    document.getElementById('textoMensaje').textContent = datos.mensaje;

    // Cambiar colores
    //document.body.style.backgroundColor = datos.colorFondo;
    document.getElementById('mensaje').style.color = datos.colorTexto;
    document.getElementById('mensaje').style.backgroundColor = datos.colorFondo;

    // Mostrar imágenes
    const galeria = document.getElementById('galeria');
    datos.imagenes.forEach((imagen) => {
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = "Imagen personalizada";
        img.classList.add('imagen-galeria');
        galeria.appendChild(img);
        const audio = document.getElementById('audio');
        audio.src = datos.audio;
    });

}

// Función principal
async function iniciar() {
    const datos = await cargarDatos();
    mostrarDatos(datos);
    document.body.classList.remove("container"); // Eliminar la clase container
}

// Iniciar cuando la página cargue
window.onload = iniciar;