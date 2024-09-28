// Obtener la ruta actual de la página
const currentPagePath = window.location.pathname;

// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Iterar sobre los enlaces y quitar la clase 'active' de todos
navLinks.forEach(link => {
    link.classList.remove('active');
    link.classList.remove('active-galeria'); // También eliminamos 'active-galeria'
});

// Activar el enlace correspondiente a la página actual
navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (currentPagePath === linkPath || currentPagePath.endsWith(linkPath)) {
        link.classList.add('active');
        if (linkPath === '/galeria.html') {
            link.classList.add('active-galeria'); // Agrega la clase 'active-galeria' al enlace de la galería
        }
    }
});
