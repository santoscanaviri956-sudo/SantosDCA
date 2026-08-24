const CONFIG = {
    ANCHO_CANVAS: 960,
    ALTO_CANVAS: 540,
    GRAVEDAD: 0.6,
    FUERZA_SALTO: -17,
    VELOCIDAD_JUGADOR: 4.5,
    VELOCIDAD_ENEMIGO: 1.8,
    VIDAS_INICIALES: 3,
    TIEMPO_NIVEL: 180,
    TIEMPO_PARKOUR: 60,
    PUNTOS_PREGUNTA: 100,
    PUNTOS_ENEMIGO: 50,
    PUNTOS_NIVEL: 500,
    TAMAÑO_PERSONAJE: 48
};

let estadoJuego = {
    pantallaActual: 'pantalla-menu',
    nivelActual: 1,
    vidas: CONFIG.VIDAS_INICIALES,
    puntaje: 0,
    tiempoRestante: CONFIG.TIEMPO_NIVEL,
    juegoActivo: false,
    juegoPausado: false,
    enParkour: false,
    parkourCompletado: false,
    preguntasRespondidas: 0,
    preguntasCorrectas: 0,
    ultimasPreguntas: [],
    sonidoActivo: true,
    musicaActiva: true,
    volumen: 70
};
