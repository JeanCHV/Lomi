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
    //obtener el json segun el id del sessionstorage 
    const id = sessionStorage.getItem('id');
    const data = datos.find((element) => element.id == id);
    console.log(data);
    // Personalizar el mensaje
    document.getElementById('nombre').textContent = data.nombre;
    document.getElementById('textoMensaje').textContent = data.mensaje;

    // Cambiar colores
    //document.body.style.backgroundColor = datos.colorFondo;
    document.getElementById('mensaje').style.color = data.colorTexto;
    document.getElementById('mensaje').style.backgroundColor = data.colorFondo;
    //cambiar el titulo de la pagina 
    document.title = 'Flores para '+data.nombre;

    // Mostrar imágenes
    const galeria = document.getElementById('galeria');
    data.imagenes.forEach((imagen) => {
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = "Imagen personalizada";
        img.classList.add('imagen-galeria');
        galeria.appendChild(img);
        const audio = document.getElementById('audio');
        audio.src = data.audio;
        audio.load();
    });

}
function playAudio() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        document.getElementById('playaudio').textContent = '⏸️';
    } else {
        audio.pause();
        document.getElementById('playaudio').textContent = '▶️';
    }
}
// Función principal
async function iniciar() {
    const datos = await cargarDatos();
    mostrarDatos(datos);
    document.body.classList.remove("container"); // Eliminar la clase container
}

// Iniciar cuando la página cargue
window.onload = iniciar;