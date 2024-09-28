// Función para verificar si es la primera vez que se carga la página
function isFirstLoad() {
    return !performance.navigation.type || performance.navigation.type === 1;
}

// Si es la primera vez que se carga la página, ejecutar la animación
if (isFirstLoad()) {
    // Redireccionar al usuario al contenido principal después de 3 segundos
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
} else {
    // Si es una recarga, redirigir inmediatamente al contenido principal
    window.location.href = "index.html";
}
