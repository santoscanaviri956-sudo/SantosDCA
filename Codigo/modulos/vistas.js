document.getElementById('app').innerHTML = 
`<!-- =============================================
         PANTALLA DE MEN&Uacute; PRINCIPAL
         ============================================= -->
    <div id="pantalla-menu" class="pantalla activa">
        <div class="pantalla-contenido">
            <img src="Recursos Graficos/logo la aventura de facundo.png" alt="Logo" class="logo-principal">
            <div class="menu-botones">
                <button class="btn-menu" onclick="iniciarJuego()">
                    <img src="Recursos Graficos/boton jugar.png" alt="Jugar">
                </button>
                <button class="btn-menu" onclick="mostrarPantalla('pantalla-opciones')">
                    <img src="Recursos Graficos/boton opciones.png" alt="Opciones">
                </button>
                <button class="btn-menu" onclick="mostrarPantalla('pantalla-creditos')">
                    <img src="Recursos Graficos/boton creditos.png" alt="Creditos">
                </button>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE OPCIONES
         ============================================= -->
    <div id="pantalla-opciones" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla">OPCIONES</h2>
            <div class="opciones-contenedor">
                <div class="opcion-fila">
                    <span class="opcion-label">Sonido</span>
                    <button id="btn-sonido" class="btn-toggle" onclick="toggleSonido()">ON</button>
                </div>
                <div class="opcion-fila">
                    <span class="opcion-label">Musica</span>
                    <button id="btn-musica" class="btn-toggle" onclick="toggleMusica()">ON</button>
                </div>
                <div class="opcion-fila">
                    <span class="opcion-label">Volumen</span>
                    <input type="range" id="volumen" min="0" max="100" value="70" class="slider-volumen">
                </div>
            </div>
            <button class="btn-volver" onclick="mostrarPantalla('pantalla-menu')">
                <img src="Recursos Graficos/boton de volver.png" alt="Volver">
            </button>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE CREDITOS
         ============================================= -->
    <div id="pantalla-creditos" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla">CREDITOS</h2>
            <div class="creditos-contenido">
                <p class="creditos-texto">La Aventura de Facundo</p>
                <p class="creditos-subtitulo">Videojuego Educativo</p>
                <div class="creditos-separador"></div>
                <p class="creditos-info">Basado en "Facundo" de Domingo F. Sarmiento</p>
                <p class="creditos-info">Generacion del 37 - Civilizacion vs Barbarie</p>
                <div class="creditos-separador"></div>
                <p class="creditos-equipo">Equipo de Desarrollo</p>
                <p class="creditos-info">Dise&ntilde;o y Programacion</p>
            </div>
            <button class="btn-volver" onclick="mostrarPantalla('pantalla-menu')">
                <img src="Recursos Graficos/boton de volver.png" alt="Volver">
            </button>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE SELECCION DE NIVEL
         ============================================= -->
    <div id="pantalla-niveles" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla">SELECCIONA UN NIVEL</h2>
            <div class="niveles-grid">
                <button class="btn-nivel" onclick="cargarNivel(1)">
                    <div class="nivel-icono">I</div>
                    <span class="nivel-nombre">La Ciudad</span>
                </button>
                <button class="btn-nivel" onclick="cargarNivel(2)">
                    <div class="nivel-icono">II</div>
                    <span class="nivel-nombre">El Camino</span>
                </button>
                <button class="btn-nivel" onclick="cargarNivel(3)">
                    <div class="nivel-icono">III</div>
                    <span class="nivel-nombre">La Manga</span>
                </button>
                <button class="btn-nivel" onclick="cargarNivel(4)">
                    <div class="nivel-icono">IV</div>
                    <span class="nivel-nombre">El Mondonguero</span>
                </button>
                <button class="btn-nivel" onclick="cargarNivel(5)">
                    <div class="nivel-icono">V</div>
                    <span class="nivel-nombre">El Desenlace</span>
                </button>
            </div>
            <button class="btn-volver" onclick="mostrarPantalla('pantalla-menu')">
                <img src="Recursos Graficos/boton de volver.png" alt="Volver">
            </button>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DEL JUEGO
         ============================================= -->
    <div id="pantalla-juego" class="pantalla">
        <div class="juego-contenedor">
            <!-- HUD - Interfaz del juego -->
            <div class="hud">
                <div class="hud-izquierda">
                    <div class="hud-vida">
                        <img src="Recursos Graficos/sistema de tres vidas.png" alt="Vidas" class="hud-icono">
                        <span id="hud-vidas-texto">3</span>
                    </div>
                    <div class="hud-puntaje">
                        <img src="Recursos Graficos/sistema de puntaje.png" alt="Puntaje" class="hud-icono">
                        <span id="hud-puntaje-texto">0</span>
                    </div>
                </div>
                <div class="hud-derecha">
                    <div class="hud-tiempo">
                        <img src="Recursos Graficos/sistema de tiempo.png" alt="Tiempo" class="hud-icono">
                        <span id="hud-tiempo-texto">03:00</span>
                    </div>
                    <button class="btn-pausa" onclick="pausarJuego()">||</button>
                </div>
            </div>

            <!-- Canvas del juego -->
            <canvas id="canvas-juego"></canvas>

            <!-- Controles moviles -->
            <div class="controles-moviles">
                <div class="controles-moviles-izquierda">
                    <button class="btn-control" id="btn-izquierda" data-direccion="izquierda">
                        <img src="Recursos Graficos/boton de movimiento.png" alt="Izquierda" class="btn-control-img btn-izq-img">
                    </button>
                    <button class="btn-control" id="btn-derecha" data-direccion="derecha">
                        <img src="Recursos Graficos/boton de movimiento.png" alt="Derecha" class="btn-control-img btn-der-img">
                    </button>
                </div>
                <div class="controles-moviles-derecha">
                    <button class="btn-control btn-saltar" id="btn-saltar">
                        <img src="Recursos Graficos/boton movimiento.png" alt="Saltar" class="btn-control-img">
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE PREGUNTA (3 BLOQUES MISTERIOSOS)
         ============================================= -->
    <div id="pantalla-pregunta" class="pantalla">
        <div class="pantalla-contenido">
            <div class="pregunta-contenedor">
                <h2 class="pregunta-titulo">&iexcl;BLOQUE MISTERIOSO!</h2>
                <p id="pregunta-texto" class="pregunta-texto"></p>
                <div id="pregunta-opciones" class="pregunta-opciones">
                    <!-- Se llena dinamicamente -->
                </div>
                <div id="pregunta-resultado" class="pregunta-resultado oculto">
                    <p id="resultado-texto"></p>
                </div>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE PAUSA
         ============================================= -->
    <div id="pantalla-pausa" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla">PAUSA</h2>
            <div class="menu-botones">
                <button class="btn-menu" onclick="reanudarJuego()">
                    <img src="Recursos Graficos/boton jugar.png" alt="Reanudar">
                </button>
                <button class="btn-menu" onclick="volverAlMenu()">
                    <img src="Recursos Graficos/boton de volver.png" alt="Menu">
                </button>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE GAME OVER
         ============================================= -->
    <div id="pantalla-gameover" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla gameover-titulo">GAME OVER</h2>
            <div class="gameover-contenido">
                <p class="gameover-texto">&iexcl;Se han acabado las vidas!</p>
                <p class="gameover-puntaje">Puntaje final: <span id="gameover-puntaje">0</span></p>
                <div id="gameover-opciones-especiales" class="gameover-opciones oculto">
                    <p class="gameover-texto">Tienes una oportunidad especial</p>
                    <button class="btn-menu" onclick="iniciarNivelParkour()">
                        <img src="Recursos Graficos/boton jugar.png" alt="Parkour">
                    </button>
                </div>
            </div>
            <div class="menu-botones">
                <button class="btn-menu" onclick="reiniciarNivel()">
                    <img src="Recursos Graficos/boton jugar.png" alt="Reintentar">
                </button>
                <button class="btn-menu" onclick="volverAlMenu()">
                    <img src="Recursos Graficos/boton de volver.png" alt="Menu">
                </button>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE VICTORIA
         ============================================= -->
    <div id="pantalla-victoria" class="pantalla">
        <div class="pantalla-contenido">
            <h2 class="titulo-pantalla victoria-titulo">&iexcl;NIVEL COMPLETADO!</h2>
            <div class="victoria-contenido">
                <img src="Recursos Graficos/pantalla de resultado final.png" alt="Victoria" class="victoria-imagen">
                <div class="victoria-estadisticas">
                    <div class="estadistica">
                        <span class="estadistica-label">Puntaje</span>
                        <span id="victoria-puntaje" class="estadistica-valor">0</span>
                    </div>
                    <div class="estadistica">
                        <span class="estadistica-label">Tiempo</span>
                        <span id="victoria-tiempo" class="estadistica-valor">00:00</span>
                    </div>
                    <div class="estadistica">
                        <span class="estadistica-label">Preguntas</span>
                        <span id="victoria-preguntas" class="estadistica-valor">0/3</span>
                    </div>
                </div>
            </div>
            <div class="menu-botones">
                <button class="btn-menu" onclick="siguienteNivel()">
                    <img src="Recursos Graficos/boton jugar.png" alt="Siguiente">
                </button>
                <button class="btn-menu" onclick="volverAlMenu()">
                    <img src="Recursos Graficos/boton de volver.png" alt="Menu">
                </button>
            </div>
        </div>
    </div>

    <!-- =============================================
         PANTALLA DE PARKOUR (RECUPERAR VIDA)
         ============================================= -->
    <div id="pantalla-parkour" class="pantalla">
        <div class="juego-contenedor">
            <div class="hud">
                <div class="hud-izquierda">
                    <div class="hud-vida">
                        <img src="Recursos Graficos/sistema de tres vidas.png" alt="Vidas" class="hud-icono">
                        <span id="hud-vidas-parkour">0</span>
                    </div>
                    <div class="hud-puntaje">
                        <img src="Recursos Graficos/sistema de puntaje.png" alt="Puntaje" class="hud-icono">
                        <span id="hud-puntaje-parkour">0</span>
                    </div>
                </div>
                <div class="hud-derecha">
                    <div class="hud-tiempo">
                        <img src="Recursos Graficos/sistema de tiempo.png" alt="Tiempo" class="hud-icono">
                        <span id="hud-tiempo-parkour">01:00</span>
                    </div>
                </div>
            </div>
            <canvas id="canvas-parkour"></canvas>
            <div class="controles-moviles">
                <div class="controles-moviles-izquierda">
                    <button class="btn-control" id="btn-izquierda-parkour" data-direccion="izquierda">
                        <img src="Recursos Graficos/boton de movimiento.png" alt="Izquierda" class="btn-control-img btn-izq-img">
                    </button>
                    <button class="btn-control" id="btn-derecha-parkour" data-direccion="derecha">
                        <img src="Recursos Graficos/boton de movimiento.png" alt="Derecha" class="btn-control-img btn-der-img">
                    </button>
                </div>
                <div class="controles-moviles-derecha">
                    <button class="btn-control btn-saltar" id="btn-saltar-parkour">
                        <img src="Recursos Graficos/boton movimiento.png" alt="Saltar" class="btn-control-img">
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript -->



`;

