const IMAGENES = {};
let imagenesCargadas = 0;
let totalImagenes = 0;

function cargarImagen(nombre, src) {
    return new Promise((resolve) => {
        const imagen = new Image();
        imagen.onload = () => {
            IMAGENES[nombre] = imagen;
            imagenesCargadas++;
            resolve(imagen);
        };
        imagen.onerror = () => {
            console.warn('No se pudo cargar: ' + src);
            imagenesCargadas++;
            resolve(null);
        };
        imagen.src = src;
        totalImagenes++;
    });
}

async function cargarTodasLasImagenes() {
    await cargarImagen('personaje', 'Recursos Graficos/personaje principal.png');

    await cargarImagen('fondo1', 'Recursos Graficos/Nivel 1 - La Ciudad (Civilización).jpg');
    await cargarImagen('fondo2', 'Recursos Graficos/Nivel 2 - El Camino Rural.jpg');
    await cargarImagen('fondo3', 'Recursos Graficos/Nivel 3 - La Manga (Operaciones Militares).jpg');
    await cargarImagen('fondo4', 'Recursos Graficos/Nivel 4 - El Mondonguero (Vida Gaucha).jpg');
    await cargarImagen('fondo5', 'Recursos Graficos/Nivel 5 - La Civilización Final.jpg');
    await cargarImagen('fondoMenu', 'Recursos Graficos/fondo de prototipo.png');

    await cargarImagen('arbol', 'Recursos Graficos/arbol.png');
    await cargarImagen('arbusto', 'Recursos Graficos/arbusto del video juego.png');
    await cargarImagen('nubes', 'Recursos Graficos/nubes del video juego.png');
    await cargarImagen('suelo', 'Recursos Graficos/suelo de videojuego.png');

    await cargarImagen('cuboPreguntas', 'Recursos Graficos/cubo de preguntas.png');
    await cargarImagen('cuboPreguntas2', 'Recursos Graficos/cubodepregunta.png');

    await cargarImagen('vidas', 'Recursos Graficos/sistema de tres vidas.png');
    await cargarImagen('puntaje', 'Recursos Graficos/sistema de puntaje.png');
    await cargarImagen('tiempo', 'Recursos Graficos/sistema de tiempo.png');

    await cargarImagen('respuestaA', 'Recursos Graficos/boton de respuesta a.png');
    await cargarImagen('respuestaB', 'Recursos Graficos/boton de respuesta b.png');
    await cargarImagen('respuestaC', 'Recursos Graficos/boton de respuesta c.png');
    await cargarImagen('respuestaD', 'Recursos Graficos/boton de respuesta d.png');
    await cargarImagen('respuestaCorrecta', 'Recursos Graficos/boton de respuesta correcta.png');
    await cargarImagen('opcionIncorrectaB', 'Recursos Graficos/boton de opcion B incorrecta.png');
    await cargarImagen('opcionIncorrectaC', 'Recursos Graficos/boton de opcion C incorrecta.png');
    await cargarImagen('opcionIncorrectaD', 'Recursos Graficos/boton de opcion D incorrecta.png');
    await cargarImagen('botonSistemaPregunta', 'Recursos Graficos/boton de sistema de pregunta.png');

    await cargarImagen('resultadoFinal', 'Recursos Graficos/pantalla de resultado final.png');
    await cargarImagen('informacion', 'Recursos Graficos/informacion.png');

    console.log('Imagenes cargadas: ' + imagenesCargadas + '/' + totalImagenes);
}
