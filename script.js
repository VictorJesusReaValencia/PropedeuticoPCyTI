// Espera a que el documento HTML se haya cargado completamente antes de ejecutar JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Array de fórmulas en LaTeX
    var formulas = [
        // Las fórmulas en LaTeX comienzan aquí
        '\\frac{1}{2} \\cdot (x + y)^2',          // Ejemplo 1
        '\\sum_{n=1}^{\\infty} \\frac{1}{n^2}',   // Ejemplo 2
        'e^{i\\pi} + 1 = 0',                      // Ejemplo 3
        '\\int_{a}^{b} x^2 dx',                   // Ejemplo 4
        '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x'  // Ejemplo 5
        // Las fórmulas en LaTeX terminan aquí
    ];

    // Obtener el elemento HTML donde se mostrarán las fórmulas
    var container = document.getElementById('formula-container');

    // Recorrer cada fórmula en LaTeX y mostrarla en la página web
    formulas.forEach(function(formula) {
        var div = document.createElement('div');  // Crear un nuevo elemento <div>
        div.innerHTML = '\\(' + formula + '\\)';  // Establecer la fórmula LaTeX dentro del <div>
        container.appendChild(div);               // Adjuntar el <div> al contenedor
    });

    // Renderizar las fórmulas en LaTeX utilizando MathJax
    MathJax.typeset();
});

// Función para inicializar el reproductor de video de YouTube
function onYouTubeIframeAPIReady() {
    // Crear un nuevo reproductor de video
    var player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'VIDEO_ID', // ID del video de YouTube
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Función que se ejecuta cuando el reproductor está listo
function onPlayerReady(event) {
    // Mostrar el reproductor de video
    event.target.playVideo();
}

