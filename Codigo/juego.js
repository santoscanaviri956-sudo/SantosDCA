// =========================================
// LA AVENTURA DE FACUNDO - JUEGO COMPLETO
// Usa imagenes reales de Recursos Graficos
// =========================================

// =========================================
// PREGUNTAS SOBRE FACUNDO DE SARMIENTO
// =========================================
const PREGUNTAS = [
    {
        pregunta: "¿Quién es el autor del libro 'Facundo'?",
        opciones: ["Domingo F. Sarmiento", "Juan B. Justo", "Bartolomé Mitre", "Julio A. Roca"],
        correcta: 0,
        explicacion: "Domingo Faustino Sarmiento escribió 'Facundo' en 1845."
    },
    {
        pregunta: "¿Cuál es el tema central de 'Facundo'?",
        opciones: ["La gastronomía argentina", "La civilización y la barbarie", "La independencia de Chile", "La guerra del Paraguay"],
        correcta: 1,
        explicacion: "El enfrentamiento entre civilización y barbarie es el eje central."
    },
    {
        pregunta: "¿Quién es Juan Facundo Quiroga?",
        opciones: ["Un presidente", "Un caudillo de la provincia de La Rioja", "Un escritor", "Un general unitario"],
        correcta: 1,
        explicacion: "Facundo Quiroga fue un caudillo riojano, protagonista del libro."
    },
    {
        pregunta: "¿Qué representaba la 'civilización' según Sarmiento?",
        opciones: ["La vida en el campo", "La ciudad, el progreso y la educación", "Los gauchos", "Las montoneras"],
        correcta: 1,
        explicacion: "La civilización representaba la ciudad europea, el progreso y la educación."
    },
    {
        pregunta: "¿Qué representaba la 'barbarie' según Sarmiento?",
        opciones: ["Las bibliotecas", "La campaña, el atraso y la violencia", "Los ferrocarriles", "El comercio exterior"],
        correcta: 1,
        explicacion: "La barbarie representaba la vida en la campaña y el atraso."
    },
    {
        pregunta: "¿En qué año se publicó 'Facundo'?",
        opciones: ["1810", "1853", "1845", "1880"],
        correcta: 2,
        explicacion: "Sarmiento publicó 'Facundo' en 1845 en Chile."
    },
    {
        pregunta: "¿Qué era una 'montonera'?",
        opciones: ["Un tipo de comida", "Un grupo de gauchos que seguía a un caudillo", "Un instrumento musical", "Un animal de la pampa"],
        correcta: 1,
        explicacion: "Las montoneras eran grupos armados que seguían a los caudillos."
    },
    {
        pregunta: "¿Quién fue Juan Manuel de Rosas?",
        opciones: ["Un poeta", "Un gobernador de Buenos Aires y caudillo", "Un general unitario", "Un presidente"],
        correcta: 1,
        explicacion: "Rosas fue gobernador de Buenos Aires y principal representante de la barbarie."
    },
    {
        pregunta: "¿Qué era la 'Generación del 37'?",
        opciones: ["Un grupo de militares", "Un grupo de intelectuales que buscaba la civilización", "Un grupo de gauchos", "Un ejército"],
        correcta: 1,
        explicacion: "Era un grupo de jóvenes intelectuales que se reunían en la Sociedad Literaria."
    },
    {
        pregunta: "¿Dónde se desarrolla principalmente 'Facundo'?",
        opciones: ["En Europa", "En la Argentina colonial", "En la Argentina de las guerras civiles", "En Chile moderno"],
        correcta: 2,
        explicacion: "El libro se desarrolla en la Argentina de principios del siglo XIX."
    },
    {
        pregunta: "¿Qué es el 'matadero' en el contexto de 'Facundo'?",
        opciones: ["Una escuela", "Un lugar donde se faenan vacunos, símbolo de la barbarie", "Una iglesia", "Un hospital"],
        correcta: 1,
        explicacion: "El matadero representaba la violencia y la barbarie de la epoca."
    },
    {
        pregunta: "¿Qué influencia tuvo Sarmiento en la educación argentina?",
        opciones: ["Ninguna", "Creó las escuelas públicas y promovió la educación", "Cerró todas las escuelas", "Solo escribió poesía"],
        correcta: 1,
        explicacion: "Sarmiento fue impulsor de la educación pública y fundó escuelas."
    },
    {
        pregunta: "¿Qué significa 'gobernar es educar' de Sarmiento?",
        opciones: ["Que los gobernantes deben ser profesores", "Que la educación es la base del progreso nacional", "Que solo los educados pueden gobernar", "Que las escuelas deben ser gubernamentales"],
        correcta: 1,
        explicacion: "Sarmiento creía que la educación era la clave para el desarrollo del país."
    },
    {
        pregunta: "¿Quién fue Domingo Faustino Sarmiento?",
        opciones: ["Un gaucho", "Un político, escritor y presidente argentino", "Un militar", "Un sacerdote"],
        correcta: 1,
        explicacion: "Sarmiento fue presidente de Argentina (1868-1874) y gran escritor."
    },
    {
        pregunta: "¿Qué conflicto armado menciona Sarmiento en 'Facundo'?",
        opciones: ["La Guerra de los Diez Días", "La Guerra Civil Argentina entre unitarios y federales", "La Guerra de Secesión", "La Primera Guerra Mundial"],
        correcta: 1,
        explicacion: "Las guerras civiles entre unitarios y federales son el contexto bélico."
    },
    {
        pregunta: "¿Qué son los 'gauchos' en el libro?",
        opciones: ["Políticos", "Hombres del campo, jinetes expertos", "Comerciantes", "Sacerdotes"],
        correcta: 1,
        explicacion: "Los gauchos eran hombres libres de la pampa, expertos jinetes."
    },
    {
        pregunta: "¿Qué es el 'pago' en la época de Facundo?",
        opciones: ["Un impuesto", "El territorio o zona rural", "Un tipo de caballo", "Una moneda"],
        correcta: 1,
        explicacion: "El 'pago' se refiere al territorio o zona de campo."
    },
    {
        pregunta: "¿Qué papel juega la naturaleza en 'Facundo'?",
        opciones: ["Ninguno", "Representa la fuerza de la barbarie y la pampa", "Es solo un escenario decorativo", "Representa la civilización"],
        correcta: 1,
        explicacion: "La pampa y su naturaleza representan la fuerza indomable de la barbarie."
    },
    {
        pregunta: "¿Qué es la 'Sociedad Literaria' de Sarmiento?",
        opciones: ["Una biblioteca", "Un grupo de jóvenes intelectuales que discutían ideas", "Una imprenta", "Un periódico"],
        correcta: 1,
        explicacion: "Era un grupo donde Sarmiento y otros jóvenes discutían sobre civilización."
    },
    {
        pregunta: "¿Cuál es el mensaje principal de Sarmiento?",
        opciones: ["Que la barbarie es mejor", "Que Argentina debe elegir la civilización y el progreso", "Que los caudillos son héroes", "Que la pampa es perfecta"],
        correcta: 1,
        explicacion: "Sarmiento defiende que Argentina debe caminar hacia la civilización."
    }
];

// =========================================
// ELEMENTOS DEL NIVEL
// =========================================
const NIVELES = {
    1: {
        nombre: "La Ciudad",
        fondo: 'fondo1',
        sueloY: 480,
        plataformas: [
            { x: 150, y: 380, ancho: 140, alto: 25 },
            { x: 350, y: 320, ancho: 140, alto: 25 },
            { x: 550, y: 380, ancho: 140, alto: 25 },
            { x: 750, y: 320, ancho: 140, alto: 25 }
        ],
        arboles: [
            { x: 50, y: 410 },
            { x: 450, y: 410 },
            { x: 850, y: 410 }
        ],
        arbustos: [
            { x: 250, y: 445 },
            { x: 650, y: 445 }
        ],
        enemigos: [
            { x: 300, y: 432, tipo: 'soldado' },
            { x: 700, y: 432, tipo: 'caudillo' }
        ],
        bloquesMisteriosos: [
            { x: 190, y: 340 },
            { x: 490, y: 340 },
            { x: 790, y: 280 }
        ],
        meta: { x: 910, y: 420 }
    },
    2: {
        nombre: "El Camino Rural",
        fondo: 'fondo2',
        sueloY: 480,
        plataformas: [
            { x: 120, y: 400, ancho: 130, alto: 25 },
            { x: 320, y: 350, ancho: 130, alto: 25 },
            { x: 520, y: 400, ancho: 130, alto: 25 },
            { x: 720, y: 350, ancho: 130, alto: 25 }
        ],
        arboles: [
            { x: 30, y: 410 },
            { x: 400, y: 410 },
            { x: 800, y: 410 }
        ],
        arbustos: [
            { x: 200, y: 445 },
            { x: 600, y: 445 }
        ],
        enemigos: [
            { x: 200, y: 432, tipo: 'gauche' },
            { x: 550, y: 432, tipo: 'montonero' },
            { x: 800, y: 432, tipo: 'gauche' }
        ],
        bloquesMisteriosos: [
            { x: 170, y: 360 },
            { x: 370, y: 310 },
            { x: 770, y: 310 }
        ],
        meta: { x: 910, y: 420 }
    },
    3: {
        nombre: "La Manga",
        fondo: 'fondo3',
        sueloY: 480,
        plataformas: [
            { x: 100, y: 420, ancho: 110, alto: 25 },
            { x: 270, y: 370, ancho: 110, alto: 25 },
            { x: 440, y: 420, ancho: 110, alto: 25 },
            { x: 610, y: 370, ancho: 110, alto: 25 },
            { x: 780, y: 420, ancho: 110, alto: 25 }
        ],
        arboles: [
            { x: 20, y: 410 },
            { x: 500, y: 410 }
        ],
        arbustos: [
            { x: 160, y: 445 },
            { x: 380, y: 445 },
            { x: 700, y: 445 }
        ],
        enemigos: [
            { x: 150, y: 432, tipo: 'soldado' },
            { x: 350, y: 432, tipo: 'soldado' },
            { x: 650, y: 432, tipo: 'caudillo' },
            { x: 850, y: 432, tipo: 'montonero' }
        ],
        bloquesMisteriosos: [
            { x: 140, y: 380 },
            { x: 480, y: 380 },
            { x: 820, y: 380 }
        ],
        meta: { x: 910, y: 420 }
    },
    4: {
        nombre: "El Mondonguero",
        fondo: 'fondo4',
        sueloY: 480,
        plataformas: [
            { x: 80, y: 430, ancho: 100, alto: 25 },
            { x: 220, y: 380, ancho: 100, alto: 25 },
            { x: 360, y: 430, ancho: 100, alto: 25 },
            { x: 500, y: 380, ancho: 100, alto: 25 },
            { x: 640, y: 430, ancho: 100, alto: 25 },
            { x: 780, y: 380, ancho: 100, alto: 25 }
        ],
        arboles: [
            { x: 15, y: 410 },
            { x: 430, y: 410 }
        ],
        arbustos: [
            { x: 150, y: 445 },
            { x: 290, y: 445 },
            { x: 570, y: 445 },
            { x: 710, y: 445 }
        ],
        enemigos: [
            { x: 120, y: 432, tipo: 'gauche' },
            { x: 280, y: 432, tipo: 'gauche' },
            { x: 450, y: 432, tipo: 'soldado' },
            { x: 620, y: 432, tipo: 'montonero' },
            { x: 820, y: 432, tipo: 'caudillo' }
        ],
        bloquesMisteriosos: [
            { x: 120, y: 390 },
            { x: 400, y: 390 },
            { x: 820, y: 340 }
        ],
        meta: { x: 910, y: 420 }
    },
    5: {
        nombre: "El Desenlace",
        fondo: 'fondo5',
        sueloY: 480,
        plataformas: [
            { x: 70, y: 440, ancho: 90, alto: 25 },
            { x: 200, y: 400, ancho: 90, alto: 25 },
            { x: 330, y: 440, ancho: 90, alto: 25 },
            { x: 460, y: 400, ancho: 90, alto: 25 },
            { x: 590, y: 440, ancho: 90, alto: 25 },
            { x: 720, y: 400, ancho: 90, alto: 25 }
        ],
        arboles: [],
        arbustos: [
            { x: 140, y: 445 },
            { x: 270, y: 445 },
            { x: 530, y: 445 },
            { x: 660, y: 445 }
        ],
        enemigos: [
            { x: 100, y: 432, tipo: 'soldado' },
            { x: 230, y: 432, tipo: 'soldado' },
            { x: 360, y: 432, tipo: 'caudillo' },
            { x: 490, y: 432, tipo: 'montonero' },
            { x: 620, y: 432, tipo: 'gauche' },
            { x: 750, y: 432, tipo: 'caudillo' },
            { x: 880, y: 432, tipo: 'soldado' }
        ],
        bloquesMisteriosos: [
            { x: 100, y: 400 },
            { x: 380, y: 400 },
            { x: 760, y: 360 }
        ],
        meta: { x: 910, y: 420 }
    }
};

// =========================================
// CLASE JUGADOR
// =========================================
class Jugador {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ancho = CONFIG.TAMAÑO_PERSONAJE;
        this.alto = CONFIG.TAMAÑO_PERSONAJE;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.enSuelo = false;
        this.direccion = 1;
        this.estado = 'idle';
        this.frameAnimacion = 0;
        this.tiempoAnimacion = 0;
        this.inmunidad = 0;
    }

    actualizar(teclas, plataformas, sueloY) {
        if (teclas['ArrowLeft'] || teclas['a'] || teclas['A']) {
            this.velocidadX = -CONFIG.VELOCIDAD_JUGADOR;
            this.direccion = -1;
            this.estado = 'walk';
        } else if (teclas['ArrowRight'] || teclas['d'] || teclas['D']) {
            this.velocidadX = CONFIG.VELOCIDAD_JUGADOR;
            this.direccion = 1;
            this.estado = 'walk';
        } else {
            this.velocidadX = 0;
            if (this.enSuelo) this.estado = 'idle';
        }

        if ((teclas['ArrowUp'] || teclas['w'] || teclas['W'] || teclas[' ']) && this.enSuelo) {
            this.velocidadY = CONFIG.FUERZA_SALTO;
            this.enSuelo = false;
            this.estado = 'jump';
        }

        this.velocidadY += CONFIG.GRAVEDAD;

        this.x += this.velocidadX;

        for (let plataforma of plataformas) {
            if (this.colisionaCon(plataforma)) {
                if (this.velocidadX > 0) {
                    this.x = plataforma.x - this.ancho;
                } else if (this.velocidadX < 0) {
                    this.x = plataforma.x + plataforma.ancho;
                }
                this.velocidadX = 0;
            }
        }

        this.y += this.velocidadY;
        this.enSuelo = false;

        if (this.y + this.alto >= sueloY) {
            this.y = sueloY - this.alto;
            this.enSuelo = true;
            if (this.estado === 'jump' || this.velocidadY > 0) {
                this.estado = 'idle';
            }
            this.velocidadY = 0;
        }
        for (let plataforma of plataformas) {
            if (this.colisionaCon(plataforma)) {
                if (this.velocidadY >= 0) {
                    this.y = plataforma.y - this.alto;
                    this.enSuelo = true;
                    this.estado = 'idle';
                }
                this.velocidadY = 0;
            }
        }

        if (this.x < 0) this.x = 0;
        if (this.x + this.ancho > CONFIG.ANCHO_CANVAS) {
            this.x = CONFIG.ANCHO_CANVAS - this.ancho;
        }

        if (this.y > CONFIG.ALTO_CANVAS + 50) {
            return true;
        }

        if (this.inmunidad > 0) this.inmunidad--;

        this.tiempoAnimacion++;
        if (this.tiempoAnimacion >= 8) {
            this.tiempoAnimacion = 0;
            this.frameAnimacion = (this.frameAnimacion + 1) % 4;
        }

        return false;
    }

    colisionaCon(objeto) {
        return this.x < objeto.x + objeto.ancho &&
               this.x + this.ancho > objeto.x &&
               this.y < objeto.y + objeto.alto &&
               this.y + this.alto > objeto.y;
    }

    dibujar(ctx) {
        if (this.inmunidad > 0 && Math.floor(this.inmunidad / 4) % 2 === 0) {
            return;
        }

        ctx.save();

        const imagenPersonaje = IMAGENES['personaje'];
        if (imagenPersonaje) {
            if (this.direccion === -1) {
                ctx.translate(this.x + this.ancho, this.y);
                ctx.scale(-1, 1);
            } else {
                ctx.translate(this.x, this.y);
            }

            ctx.drawImage(imagenPersonaje, 0, 0, this.ancho, this.alto);
        } else {
            this.dibujarPersonajeRespaldo(ctx);
        }

        ctx.restore();
    }

    dibujarPersonajeRespaldo(ctx) {
        ctx.save();
        if (this.direccion === -1) {
            ctx.translate(this.x + this.ancho, this.y);
            ctx.scale(-1, 1);
        } else {
            ctx.translate(this.x, this.y);
        }

        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(24, 48, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        const piernaOffset = this.estado === 'walk' ? Math.sin(this.frameAnimacion * Math.PI / 2) * 4 : 0;
        ctx.fillStyle = '#00008B';
        ctx.fillRect(14, 28 + piernaOffset, 7, 14);
        ctx.fillRect(27, 28 - piernaOffset, 7, 14);
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(13, 36 + piernaOffset, 8, 5);
        ctx.fillRect(26, 36 - piernaOffset, 8, 5);

        ctx.fillStyle = '#fff';
        ctx.fillRect(12, 6, 24, 24);

        ctx.fillStyle = '#ffdab9';
        ctx.fillRect(14, -16, 20, 20);
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(12, -20, 24, 8);
        ctx.fillStyle = '#2F4F4F';
        ctx.fillRect(10, -22, 28, 6);

        ctx.fillStyle = '#000';
        ctx.fillRect(18, -10, 4, 4);
        ctx.fillRect(28, -10, 4, 4);
        ctx.fillStyle = '#fff';
        ctx.fillRect(19, -10, 2, 2);
        ctx.fillRect(29, -10, 2, 2);

        ctx.fillStyle = '#8B4513';
        if (this.estado === 'jump') {
            ctx.fillRect(22, -2, 6, 3);
        } else {
            ctx.fillRect(20, -2, 8, 2);
        }

        ctx.restore();
    }
}

// =========================================
// CLASE ENEMIGO
// =========================================
class Enemigo {
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.ancho = 44;
        this.alto = 48;
        this.tipo = tipo;
        this.velocidadX = CONFIG.VELOCIDAD_ENEMIGO * (Math.random() > 0.5 ? 1 : -1);
        this.direccion = this.velocidadX > 0 ? 1 : -1;
        this.vivo = true;
        this.tiempoAnimacion = 0;
    }

    actualizar(plataformas, sueloY) {
        if (!this.vivo) return;

        this.x += this.velocidadX;

        if (this.x <= 10 || this.x + this.ancho >= CONFIG.ANCHO_CANVAS - 10) {
            this.velocidadX *= -1;
            this.direccion *= -1;
        }

        this.tiempoAnimacion++;
    }

    dibujar(ctx) {
        if (!this.vivo) return;

        ctx.save();

        if (this.direccion === -1) {
            ctx.translate(this.x + this.ancho, this.y);
            ctx.scale(-1, 1);
        } else {
            ctx.translate(this.x, this.y);
        }

        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(22, 48, 16, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        switch(this.tipo) {
            case 'soldado':
                ctx.fillStyle = '#2F4F4F';
                ctx.fillRect(10, 4, 24, 28);
                ctx.fillStyle = '#ffdab9';
                ctx.fillRect(14, -14, 16, 18);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(12, -16, 20, 6);
                ctx.fillStyle = '#8B0000';
                ctx.fillRect(18, -18, 8, 4);
                ctx.fillStyle = '#000';
                ctx.fillRect(17, -8, 3, 3);
                ctx.fillRect(24, -8, 3, 3);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(18, -2, 8, 2);
                ctx.fillStyle = '#2F4F4F';
                ctx.fillRect(12, 32, 8, 14);
                ctx.fillRect(24, 32, 8, 14);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(11, 40, 9, 5);
                ctx.fillRect(23, 40, 9, 5);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(34, 8, 6, 26);
                ctx.fillStyle = '#C0C0C0';
                ctx.fillRect(34, 4, 6, 6);
                break;

            case 'caudillo':
                ctx.fillStyle = '#2a2a2a';
                ctx.fillRect(10, 4, 24, 28);
                ctx.fillStyle = '#ffdab9';
                ctx.fillRect(14, -12, 16, 16);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(8, -18, 24, 8);
                ctx.fillRect(14, -26, 12, 10);
                ctx.fillStyle = '#8B0000';
                ctx.fillRect(14, -18, 12, 3);
                ctx.fillStyle = '#fff';
                ctx.fillRect(18, 4, 12, 4);
                ctx.fillStyle = '#8B0000';
                ctx.fillRect(22, 4, 4, 8);
                ctx.fillStyle = '#000';
                ctx.fillRect(18, -6, 3, 3);
                ctx.fillRect(25, -6, 3, 3);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(17, 2, 10, 3);
                ctx.fillStyle = '#2a2a2a';
                ctx.fillRect(12, 32, 8, 14);
                ctx.fillRect(24, 32, 8, 14);
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(11, 40, 9, 5);
                ctx.fillRect(23, 40, 9, 5);
                break;

            case 'gauche':
                ctx.fillStyle = '#d2691e';
                ctx.fillRect(10, 4, 24, 28);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(16, 6, 6, 24);
                ctx.fillRect(24, 6, 6, 24);
                ctx.fillStyle = '#ffdab9';
                ctx.fillRect(14, -12, 16, 16);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(10, -16, 24, 8);
                ctx.fillStyle = '#654321';
                ctx.fillRect(14, -18, 16, 4);
                ctx.fillStyle = '#000';
                ctx.fillRect(18, -6, 3, 3);
                ctx.fillRect(25, -6, 3, 3);
                ctx.fillStyle = '#654321';
                ctx.fillRect(17, 2, 10, 5);
                ctx.fillStyle = '#2F4F4F';
                ctx.fillRect(12, 32, 8, 14);
                ctx.fillRect(24, 32, 8, 14);
                ctx.fillStyle = '#654321';
                ctx.fillRect(11, 38, 9, 7);
                ctx.fillRect(23, 38, 9, 7);
                ctx.fillStyle = '#C0C0C0';
                ctx.fillRect(-2, 14, 10, 4);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(0, 18, 6, 8);
                break;

            case 'montonero':
                ctx.fillStyle = '#d2691e';
                ctx.fillRect(8, 2, 28, 30);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(14, 4, 16, 26);
                ctx.fillStyle = '#ffdab9';
                ctx.fillRect(14, -12, 16, 14);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(8, -18, 28, 8);
                ctx.fillRect(14, -22, 16, 6);
                ctx.fillStyle = '#000';
                ctx.fillRect(18, -6, 3, 3);
                ctx.fillRect(25, -6, 3, 3);
                ctx.fillStyle = '#654321';
                ctx.fillRect(19, 2, 8, 3);
                ctx.fillStyle = '#2F4F4F';
                ctx.fillRect(12, 32, 8, 14);
                ctx.fillRect(24, 32, 8, 14);
                ctx.fillStyle = '#654321';
                ctx.fillRect(11, 40, 9, 5);
                ctx.fillRect(23, 40, 9, 5);
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(36, -14, 5, 42);
                ctx.fillStyle = '#C0C0C0';
                ctx.beginPath();
                ctx.moveTo(38, -18);
                ctx.lineTo(34, -14);
                ctx.lineTo(42, -14);
                ctx.closePath();
                ctx.fill();
                break;
        }

        if (this.tipo === 'caudillo' || this.tipo === 'montonero') {
            ctx.strokeStyle = 'rgba(255, 0, 0, 0.25)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(22, 14, 26, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    colisionaCon(objeto) {
        return this.x < objeto.x + objeto.ancho &&
               this.x + this.ancho > objeto.x &&
               this.y < objeto.y + objeto.alto &&
               this.y + this.alto > objeto.y;
    }

    morir() {
        this.vivo = false;
    }
}

// =========================================
// CLASE BLOQUE MISTERIOSO
// =========================================
class BloqueMisterioso {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.yOriginal = y;
        this.ancho = 40;
        this.alto = 40;
        this.activo = true;
        this.tiempoBrillo = 0;
    }

    actualizar() {
        if (!this.activo) return;
        this.tiempoBrillo++;
        if (this.tiempoBrillo >= 60) this.tiempoBrillo = 0;
        this.y = this.yOriginal + Math.sin(this.tiempoBrillo * 0.08) * 4;
    }

    dibujar(ctx) {
        if (!this.activo) return;

        const imagenCubo = IMAGENES['cuboPreguntas'] || IMAGENES['cuboPreguntas2'];
        if (imagenCubo) {
            ctx.drawImage(imagenCubo, this.x, this.y, this.ancho, this.alto);
        } else {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(this.x + 4, this.y + 4, this.ancho, this.alto);

            const brillo = Math.sin(this.tiempoBrillo * 0.15) * 30 + 225;
            ctx.fillStyle = `rgb(${brillo}, ${brillo * 0.85}, 50)`;
            ctx.fillRect(this.x, this.y, this.ancho, this.alto);

            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x, this.y, this.ancho, this.alto);

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 26px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('?', this.x + this.ancho/2, this.y + this.alto/2);
        }
    }

    colisionaCon(objeto) {
        return this.x < objeto.x + objeto.ancho &&
               this.x + this.ancho > objeto.x &&
               this.y < objeto.y + objeto.alto &&
               this.y + this.alto > objeto.y;
    }

    desactivar() {
        this.activo = false;
    }
}

// =========================================
// CLASE META
// =========================================
class Meta {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ancho = 50;
        this.alto = 60;
        this.tiempoAnimacion = 0;
    }

    actualizar() {
        this.tiempoAnimacion++;
    }

    dibujar(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(this.x + 25, this.y + this.alto + 5, 18, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#8B4513';
        ctx.fillRect(this.x + 22, this.y, 6, this.alto);
        ctx.fillStyle = '#A0522D';
        ctx.fillRect(this.x + 23, this.y, 2, this.alto);

        const ondeo = Math.sin(this.tiempoAnimacion * 0.08) * 6;

        ctx.fillStyle = '#87CEEB';
        ctx.beginPath();
        ctx.moveTo(this.x + 28, this.y + 2);
        ctx.quadraticCurveTo(this.x + 48 + ondeo/2, this.y + 10, this.x + 65 + ondeo, this.y + 18);
        ctx.quadraticCurveTo(this.x + 48 + ondeo/2, this.y + 26, this.x + 28, this.y + 32);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(this.x + 28, this.y + 12);
        ctx.quadraticCurveTo(this.x + 48 + ondeo/2, this.y + 16, this.x + 65 + ondeo, this.y + 18);
        ctx.quadraticCurveTo(this.x + 48 + ondeo/2, this.y + 20, this.x + 28, this.y + 22);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.x + 46 + ondeo/3, this.y + 17, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('META', this.x + 25, this.y - 8);
    }

    colisionaCon(objeto) {
        return this.x < objeto.x + objeto.ancho &&
               this.x + this.ancho > objeto.x &&
               this.y < objeto.y + objeto.alto &&
               this.y + this.alto > objeto.y;
    }
}

// =========================================
// VARIABLES GLOBALES
// =========================================
let canvas, ctx;
let canvasParkour, ctxParkour;
let jugador;
let enemigos = [];
let bloquesMisteriosos = [];
let meta;
let teclas = {};
let animacionJuego;
let animacionParkour;

// =========================================
// FUNCIONES DE PANTALLA
// =========================================
function mostrarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(p => {
        p.classList.remove('activa');
    });
    const pantalla = document.getElementById(idPantalla);
    if (pantalla) {
        pantalla.classList.add('activa');
        estadoJuego.pantallaActual = idPantalla;
    }
}

// =========================================
// FUNCIONES DEL MENU
// =========================================
function iniciarJuego() {
    estadoJuego.vidas = CONFIG.VIDAS_INICIALES;
    estadoJuego.puntaje = 0;
    estadoJuego.parkourCompletado = false;
    mostrarPantalla('pantalla-niveles');
}

function toggleSonido() {
    estadoJuego.sonidoActivo = !estadoJuego.sonidoActivo;
    const btn = document.getElementById('btn-sonido');
    btn.textContent = estadoJuego.sonidoActivo ? 'ON' : 'OFF';
    btn.classList.toggle('off', !estadoJuego.sonidoActivo);
}

function toggleMusica() {
    estadoJuego.musicaActiva = !estadoJuego.musicaActiva;
    const btn = document.getElementById('btn-musica');
    btn.textContent = estadoJuego.musicaActiva ? 'ON' : 'OFF';
    btn.classList.toggle('off', !estadoJuego.musicaActiva);
}

function volverAlMenu() {
    estadoJuego.juegoActivo = false;
    if (animacionJuego) cancelAnimationFrame(animacionJuego);
    if (animacionParkour) cancelAnimationFrame(animacionParkour);
    mostrarPantalla('pantalla-menu');
}

// =========================================
// FUNCIONES DEL JUEGO
// =========================================
function cargarNivel(numeroNivel) {
    estadoJuego.nivelActual = numeroNivel;
    estadoJuego.enParkour = false;

    const nivel = NIVELES[numeroNivel];
    if (!nivel) return;

    canvas = document.getElementById('canvas-juego');
    ctx = canvas.getContext('2d');
    canvas.width = CONFIG.ANCHO_CANVAS;
    canvas.height = CONFIG.ALTO_CANVAS;

    jugador = new Jugador(50, nivel.sueloY - CONFIG.TAMAÑO_PERSONAJE);
    enemigos = nivel.enemigos.map(e => new Enemigo(e.x, e.y, e.tipo));
    bloquesMisteriosos = nivel.bloquesMisteriosos.map(b => new BloqueMisterioso(b.x, b.y));
    meta = new Meta(nivel.meta.x, nivel.meta.y);

    estadoJuego.tiempoRestante = CONFIG.TIEMPO_NIVEL;
    estadoJuego.preguntasRespondidas = 0;
    estadoJuego.preguntasCorrectas = 0;
    estadoJuego.juegoActivo = true;
    estadoJuego.juegoPausado = false;

    actualizarHUD();
    mostrarPantalla('pantalla-juego');

    if (animacionJuego) cancelAnimationFrame(animacionJuego);
    bucleDelJuego();
}

function bucleDelJuego() {
    if (!estadoJuego.juegoActivo || estadoJuego.juegoPausado) return;

    estadoJuego.tiempoRestante -= 1/60;
    if (estadoJuego.tiempoRestante <= 0) {
        estadoJuego.tiempoRestante = 0;
        mostrarGameOver();
        return;
    }

    const nivel = NIVELES[estadoJuego.nivelActual];

    if (jugador.actualizar(teclas, nivel.plataformas, nivel.sueloY)) {
        perderVida();
        return;
    }

    enemigos.forEach(enemigo => {
        enemigo.actualizar(nivel.plataformas, nivel.sueloY);
    });

    bloquesMisteriosos.forEach(bloque => {
        bloque.actualizar();
    });

    meta.actualizar();

    enemigos.forEach(enemigo => {
        if (enemigo.vivo && jugador.colisionaCon(enemigo)) {
            if (jugador.velocidadY > 0 && jugador.y + jugador.alto - 10 < enemigo.y + enemigo.alto/2) {
                enemigo.morir();
                estadoJuego.puntaje += CONFIG.PUNTOS_ENEMIGO;
                jugador.velocidadY = CONFIG.FUERZA_SALTO / 2;
                crearEfectoEliminacion(enemigo.x + enemigo.ancho/2, enemigo.y);
            } else if (jugador.inmunidad === 0) {
                perderVida();
            }
        }
    });

    bloquesMisteriosos.forEach(bloque => {
        if (bloque.activo && jugador.colisionaCon(bloque)) {
            if (jugador.velocidadY < 0 && jugador.y + jugador.alto > bloque.y + bloque.alto/2) {
                bloque.desactivar();
                mostrarPregunta();
            }
        }
    });

    if (jugador.colisionaCon(meta)) {
        completarNivel();
        return;
    }

    dibujarNivel(nivel);
    actualizarHUD();

    animacionJuego = requestAnimationFrame(bucleDelJuego);
}

function dibujarNivel(nivel) {
    ctx.clearRect(0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);

    const imagenFondo = IMAGENES[nivel.fondo];
    if (imagenFondo) {
        ctx.drawImage(imagenFondo, 0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);
    } else {
        const gradiente = ctx.createLinearGradient(0, 0, 0, CONFIG.ALTO_CANVAS);
        gradiente.addColorStop(0, '#87CEEB');
        gradiente.addColorStop(1, '#4682B4');
        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);
    }

    const imagenNubes = IMAGENES['nubes'];
    if (imagenNubes) {
        const tiempo = Date.now() * 0.0005;
        for (let i = 0; i < 3; i++) {
            const x = (i * 350 + tiempo * 30) % (CONFIG.ANCHO_CANVAS + 200) - 100;
            ctx.globalAlpha = 0.7;
            ctx.drawImage(imagenNubes, x, 30 + i * 40, 180, 60);
            ctx.globalAlpha = 1;
        }
    }

    nivel.arboles.forEach(arbol => {
        const imagenArbol = IMAGENES['arbol'];
        if (imagenArbol) {
            ctx.drawImage(imagenArbol, arbol.x, arbol.y, 50, 70);
        } else {
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(arbol.x + 18, arbol.y + 30, 14, 40);
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.arc(arbol.x + 25, arbol.y + 15, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#006400';
            ctx.beginPath();
            ctx.arc(arbol.x + 25, arbol.y + 22, 25, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    nivel.arbustos.forEach(arbusto => {
        const imagenArbusto = IMAGENES['arbusto'];
        if (imagenArbusto) {
            ctx.drawImage(imagenArbusto, arbusto.x, arbusto.y, 40, 35);
        } else {
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.arc(arbusto.x + 20, arbusto.y + 18, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#006400';
            ctx.beginPath();
            ctx.arc(arbusto.x + 20, arbusto.y + 22, 14, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    const imagenSuelo = IMAGENES['suelo'];
    if (imagenSuelo) {
        for (let x = 0; x < CONFIG.ANCHO_CANVAS; x += imagenSuelo.width) {
            ctx.drawImage(imagenSuelo, x, nivel.sueloY, imagenSuelo.width, CONFIG.ALTO_CANVAS - nivel.sueloY);
        }
    } else {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, nivel.sueloY, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS - nivel.sueloY);
        ctx.fillStyle = '#228B22';
        ctx.fillRect(0, nivel.sueloY, CONFIG.ANCHO_CANVAS, 8);
    }

    nivel.plataformas.forEach(plataforma => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(plataforma.x + 3, plataforma.y + 3, plataforma.ancho, plataforma.alto);

        ctx.fillStyle = '#8B4513';
        ctx.fillRect(plataforma.x, plataforma.y, plataforma.ancho, plataforma.alto);
        ctx.fillStyle = '#A0522D';
        ctx.fillRect(plataforma.x, plataforma.y, plataforma.ancho, 5);
        ctx.fillStyle = '#654321';
        ctx.fillRect(plataforma.x, plataforma.y + plataforma.alto - 3, plataforma.ancho, 3);

        for (let i = 20; i < plataforma.ancho; i += 40) {
            ctx.fillStyle = '#C0C0C0';
            ctx.beginPath();
            ctx.arc(plataforma.x + i, plataforma.y + 3, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    bloquesMisteriosos.forEach(bloque => {
        bloque.dibujar(ctx);
    });

    meta.dibujar(ctx);

    enemigos.forEach(enemigo => {
        enemigo.dibujar(ctx);
    });

    jugador.dibujar(ctx);

    if (jugador.estado === 'walk' && jugador.enSuelo) {
        ctx.fillStyle = 'rgba(139, 69, 19, 0.35)';
        for (let i = 0; i < 5; i++) {
            const x = jugador.x + jugador.ancho/2 + (Math.random() - 0.5) * 20;
            const y = jugador.y + jugador.alto - 2;
            const tamano = Math.random() * 4 + 1;
            ctx.beginPath();
            ctx.arc(x, y, tamano, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillRect(CONFIG.ANCHO_CANVAS/2 - 65, 8, 130, 32);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.strokeRect(CONFIG.ANCHO_CANVAS/2 - 65, 8, 130, 32);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('NIVEL ' + estadoJuego.nivelActual + ' - ' + NIVELES[estadoJuego.nivelActual].nombre.toUpperCase(), CONFIG.ANCHO_CANVAS/2, 24);
}

// =========================================
// FUNCIONES DE PREGUNTAS
// =========================================
function mostrarPregunta() {
    estadoJuego.juegoPausado = true;

    let preguntaIndex;
    do {
        preguntaIndex = Math.floor(Math.random() * PREGUNTAS.length);
    } while (estadoJuego.ultimasPreguntas.includes(preguntaIndex) && PREGUNTAS.length > 3);

    estadoJuego.ultimasPreguntas.push(preguntaIndex);
    if (estadoJuego.ultimasPreguntas.length > 2) {
        estadoJuego.ultimasPreguntas.shift();
    }

    const pregunta = PREGUNTAS[preguntaIndex];

    document.getElementById('pregunta-texto').textContent = pregunta.pregunta;

    const opcionesContainer = document.getElementById('pregunta-opciones');
    opcionesContainer.innerHTML = '';

    const imagenesRespuesta = ['respuestaA', 'respuestaB', 'respuestaC', 'respuestaD'];

    pregunta.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.style.animationDelay = (index * 0.1) + 's';

        const imagenBtn = IMAGENES[imagenesRespuesta[index]];
        if (imagenBtn) {
            const img = document.createElement('img');
            img.src = imagenBtn.src;
            img.className = 'imagen-opcion';
            btn.appendChild(img);

            const textoOpcion = document.createElement('span');
            textoOpcion.className = 'texto-opcion';
            textoOpcion.textContent = opcion;
            btn.appendChild(textoOpcion);
        } else {
            btn.innerHTML = '<span class="opcion-letra">' + String.fromCharCode(65 + index) + '</span> ' + opcion;
        }

        btn.onclick = () => verificarRespuesta(index, pregunta.correcta, pregunta.explicacion, pregunta.opciones);
        opcionesContainer.appendChild(btn);
    });

    document.getElementById('pregunta-resultado').classList.add('oculto');

    const titulo = document.querySelector('.pregunta-titulo');
    const imagenSistemaPregunta = IMAGENES['botonSistemaPregunta'];
    if (imagenSistemaPregunta) {
        titulo.innerHTML = '';
        const img = document.createElement('img');
        img.src = imagenSistemaPregunta.src;
        img.style.height = '40px';
        img.style.objectFit = 'contain';
        titulo.appendChild(img);
    } else {
        titulo.textContent = '¡BLOQUE MISTERIOSO!';
    }

    mostrarPantalla('pantalla-pregunta');
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta, explicacion, opciones) {
    const botones = document.querySelectorAll('.btn-opcion');
    const resultadoDiv = document.getElementById('pregunta-resultado');
    const resultadoTexto = document.getElementById('resultado-texto');

    botones.forEach((btn, index) => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';

        if (index === respuestaCorrecta) {
            btn.classList.add('correcta');
        }
        if (index === respuestaSeleccionada && respuestaSeleccionada !== respuestaCorrecta) {
            btn.classList.add('incorrecta');
        }
    });

    resultadoDiv.classList.remove('oculto');
    resultadoDiv.className = 'pregunta-resultado';

    if (respuestaSeleccionada === respuestaCorrecta) {
        resultadoDiv.classList.add('correcta');
        resultadoTexto.innerHTML = '¡CORRECTO! +' + CONFIG.PUNTOS_PREGUNTA + ' puntos<br><small>' + explicacion + '</small>';
        estadoJuego.puntaje += CONFIG.PUNTOS_PREGUNTA;
        estadoJuego.preguntasCorrectas++;
        document.querySelector('.pregunta-contenedor').style.borderColor = '#4caf50';
    } else {
        resultadoDiv.classList.add('incorrecta');
        resultadoTexto.innerHTML = 'INCORRECTO<br>' + explicacion + '<br><small>Respuesta correcta: ' + opciones[respuestaCorrecta] + '</small>';
        document.querySelector('.pregunta-contenedor').style.borderColor = '#f44336';
    }

    estadoJuego.preguntasRespondidas++;

    setTimeout(() => {
        document.querySelector('.pregunta-contenedor').style.borderColor = '#ffd700';
        mostrarPantalla('pantalla-juego');
        estadoJuego.juegoPausado = false;
        bucleDelJuego();
    }, 3500);
}

// =========================================
// FUNCIONES DE VIDAS Y GAME OVER
// =========================================
function perderVida() {
    estadoJuego.vidas--;
    jugador.inmunidad = 120;

    const pantallaJuego = document.getElementById('pantalla-juego');
    pantallaJuego.style.filter = 'brightness(0.5) saturate(2)';
    setTimeout(() => {
        pantallaJuego.style.filter = 'brightness(1.2)';
        setTimeout(() => {
            pantallaJuego.style.filter = 'brightness(1)';
        }, 100);
    }, 100);

    if (estadoJuego.vidas <= 0) {
        mostrarGameOver();
    }
}

function mostrarGameOver() {
    estadoJuego.juegoActivo = false;
    document.getElementById('gameover-puntaje').textContent = estadoJuego.puntaje;

    const opcionesParkour = document.getElementById('gameover-opciones-especiales');
    if (!estadoJuego.parkourCompletado) {
        opcionesParkour.classList.remove('oculto');
    } else {
        opcionesParkour.classList.add('oculto');
    }

    mostrarPantalla('pantalla-gameover');
}

function reiniciarNivel() {
    estadoJuego.vidas = CONFIG.VIDAS_INICIALES;
    estadoJuego.puntaje = 0;
    cargarNivel(estadoJuego.nivelActual);
}

// =========================================
// PARKOUR
// =========================================
function iniciarNivelParkour() {
    estadoJuego.enParkour = true;
    estadoJuego.vidas = CONFIG.VIDAS_INICIALES;

    canvasParkour = document.getElementById('canvas-parkour');
    ctxParkour = canvasParkour.getContext('2d');
    canvasParkour.width = CONFIG.ANCHO_CANVAS;
    canvasParkour.height = CONFIG.ALTO_CANVAS;

    const nivel = NIVELES[estadoJuego.nivelActual];
    jugador = new Jugador(50, 430);

    const plataformasParkour = [
        { x: 0, y: 480, ancho: 200, alto: 60 },
        { x: 260, y: 430, ancho: 90, alto: 25 },
        { x: 380, y: 380, ancho: 90, alto: 25 },
        { x: 500, y: 330, ancho: 90, alto: 25 },
        { x: 620, y: 380, ancho: 90, alto: 25 },
        { x: 740, y: 430, ancho: 90, alto: 25 },
        { x: 860, y: 480, ancho: 100, alto: 60 }
    ];

    meta = new Meta(900, 420);

    estadoJuego.tiempoRestante = CONFIG.TIEMPO_PARKOUR;
    estadoJuego.juegoActivo = true;

    mostrarPantalla('pantalla-parkour');

    if (animacionParkour) cancelAnimationFrame(animacionParkour);
    bucleDelParkour(plataformasParkour);
}

function bucleDelParkour(plataformas) {
    if (!estadoJuego.juegoActivo) return;

    estadoJuego.tiempoRestante -= 1/60;
    if (estadoJuego.tiempoRestante <= 0) {
        estadoJuego.tiempoRestante = 0;
        mostrarGameOver();
        return;
    }

    if (jugador.actualizar(teclas, plataformas, 480)) {
        mostrarGameOver();
        return;
    }

    if (jugador.colisionaCon(meta)) {
        estadoJuego.parkourCompletado = true;
        estadoJuego.vidas = CONFIG.VIDAS_INICIALES;
        estadoJuego.puntaje += 200;
        mostrarVictoria();
        return;
    }

    dibujarParkour(plataformas);

    document.getElementById('hud-vidas-parkour').textContent = estadoJuego.vidas;
    document.getElementById('hud-puntaje-parkour').textContent = estadoJuego.puntaje;
    document.getElementById('hud-tiempo-parkour').textContent = formatearTiempo(estadoJuego.tiempoRestante);

    animacionParkour = requestAnimationFrame(() => bucleDelParkour(plataformas));
}

function dibujarParkour(plataformas) {
    ctxParkour.clearRect(0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);

    const imagenFondoParkour = IMAGENES['fondo5'];
    if (imagenFondoParkour) {
        ctxParkour.globalAlpha = 0.4;
        ctxParkour.drawImage(imagenFondoParkour, 0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);
        ctxParkour.globalAlpha = 1;
    }

    const gradiente = ctxParkour.createLinearGradient(0, 0, 0, CONFIG.ALTO_CANVAS);
    gradiente.addColorStop(0, 'rgba(74, 0, 0, 0.5)');
    gradiente.addColorStop(1, 'rgba(139, 0, 0, 0.3)');
    ctxParkour.fillStyle = gradiente;
    ctxParkour.fillRect(0, 0, CONFIG.ANCHO_CANVAS, CONFIG.ALTO_CANVAS);

    const tiempo = Date.now() * 0.003;
    ctxParkour.fillStyle = '#FF4500';
    for (let x = 0; x < CONFIG.ANCHO_CANVAS; x += 25) {
        const h = 25 + Math.sin(x * 0.05 + tiempo) * 8;
        ctxParkour.fillRect(x, CONFIG.ALTO_CANVAS - h, 25, h);
    }

    plataformas.forEach(plataforma => {
        ctxParkour.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctxParkour.fillRect(plataforma.x + 3, plataforma.y + 3, plataforma.ancho, plataforma.alto);

        ctxParkour.fillStyle = '#4a4a4a';
        ctxParkour.fillRect(plataforma.x, plataforma.y, plataforma.ancho, plataforma.alto);
        ctxParkour.fillStyle = '#666';
        ctxParkour.fillRect(plataforma.x, plataforma.y, plataforma.ancho, 5);
        ctxParkour.fillStyle = '#333';
        ctxParkour.fillRect(plataforma.x, plataforma.y + plataforma.alto - 3, plataforma.ancho, 3);
    });

    meta.dibujar(ctxParkour);
    jugador.dibujar(ctxParkour);

    ctxParkour.fillStyle = 'rgba(139, 0, 0, 0.85)';
    ctxParkour.fillRect(CONFIG.ANCHO_CANVAS/2 - 100, 48, 200, 35);
    ctxParkour.strokeStyle = '#FFD700';
    ctxParkour.lineWidth = 2;
    ctxParkour.strokeRect(CONFIG.ANCHO_CANVAS/2 - 100, 48, 200, 35);
    ctxParkour.fillStyle = '#FFD700';
    ctxParkour.font = 'bold 15px Arial';
    ctxParkour.textAlign = 'center';
    ctxParkour.textBaseline = 'middle';
    ctxParkour.fillText('¡PARKOUR - RECUPERA UNA VIDA!', CONFIG.ANCHO_CANVAS/2, 66);
}

// =========================================
// FUNCIONES DE VICTORIA
// =========================================
function completarNivel() {
    estadoJuego.juegoActivo = false;
    estadoJuego.puntaje += CONFIG.PUNTOS_NIVEL;

    const bonusTiempo = Math.floor(estadoJuego.tiempoRestante * 10);
    estadoJuego.puntaje += bonusTiempo;
    const bonusVidas = estadoJuego.vidas * 50;
    estadoJuego.puntaje += bonusVidas;

    document.getElementById('victoria-puntaje').textContent = estadoJuego.puntaje;
    document.getElementById('victoria-tiempo').textContent = formatearTiempo(CONFIG.TIEMPO_NIVEL - estadoJuego.tiempoRestante);
    document.getElementById('victoria-preguntas').textContent =
        estadoJuego.preguntasCorrectas + '/' + estadoJuego.preguntasRespondidas;

    const tituloVictoria = document.querySelector('.victoria-titulo');
    if (estadoJuego.nivelActual === 5) {
        tituloVictoria.textContent = '¡FELICITACIONES! HAS COMPLETADO EL JUEGO';
    } else {
        tituloVictoria.textContent = '¡NIVEL ' + estadoJuego.nivelActual + ' COMPLETADO!';
    }

    mostrarPantalla('pantalla-victoria');
}

function mostrarVictoria() {
    estadoJuego.juegoActivo = false;
    document.getElementById('victoria-puntaje').textContent = estadoJuego.puntaje;
    document.getElementById('victoria-tiempo').textContent = '01:00';
    document.getElementById('victoria-preguntas').textContent = '¡Parkour Completado!';
    mostrarPantalla('pantalla-victoria');
}

function siguienteNivel() {
    const siguienteNivelNum = estadoJuego.nivelActual + 1;
    if (siguienteNivelNum <= 5) {
        estadoJuego.vidas = Math.min(estadoJuego.vidas + 1, CONFIG.VIDAS_INICIALES);
        cargarNivel(siguienteNivelNum);
    } else {
        alert('¡Felicitaciones! Has completado todos los niveles de La Aventura de Facundo');
        volverAlMenu();
    }
}

// =========================================
// PAUSA
// =========================================
function pausarJuego() {
    estadoJuego.juegoPausado = true;
    mostrarPantalla('pantalla-pausa');
}

function reanudarJuego() {
    estadoJuego.juegoPausado = false;
    mostrarPantalla('pantalla-juego');
    if (estadoJuego.enParkour) {
        bucleDelParkour([]);
    } else {
        bucleDelJuego();
    }
}

// =========================================
// UTILIDADES
// =========================================
function formatearTiempo(segundos) {
    const mins = Math.floor(segundos / 60);
    const secs = Math.floor(segundos % 60);
    return mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
}

function actualizarHUD() {
    document.getElementById('hud-vidas-texto').textContent = estadoJuego.vidas;
    document.getElementById('hud-puntaje-texto').textContent = estadoJuego.puntaje;
    document.getElementById('hud-tiempo-texto').textContent = formatearTiempo(estadoJuego.tiempoRestante);
}

function crearEfectoEliminacion(x, y) {
    const particulas = [];
    for (let i = 0; i < 10; i++) {
        particulas.push({
            x: x,
            y: y,
            velocidadX: (Math.random() - 0.5) * 12,
            velocidadY: (Math.random() - 0.5) * 12,
            vida: 30,
            color: ['#ffd700', '#ff6b6b', '#4ecdc4', '#fff'][Math.floor(Math.random() * 4)]
        });
    }

    function animar() {
        particulas.forEach((p, index) => {
            p.x += p.velocidadX;
            p.y += p.velocidadY;
            p.vida--;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.vida / 30;
            ctx.fillRect(p.x, p.y, 5, 5);
            ctx.globalAlpha = 1;
            if (p.vida <= 0) particulas.splice(index, 1);
        });
        if (particulas.length > 0) requestAnimationFrame(animar);
    }
    animar();
}

// =========================================
// INICIALIZACION
// =========================================
document.addEventListener('DOMContentLoaded', async () => {
    configurarControles(teclas, {
        estaActivo: () => estadoJuego.juegoActivo,
        estaPausado: () => estadoJuego.juegoPausado,
        pausar: pausarJuego,
        reanudar: reanudarJuego
    });
    await cargarTodasLasImagenes();
    mostrarPantalla('pantalla-menu');
});
