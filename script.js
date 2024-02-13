window.addEventListener('load', function() {
    var navbar = document.getElementById('customNavbar');
    var logoImage = document.getElementById('logoImage');

    // Ajusta la altura del navbar según la altura de la imagen del logo
    navbar.style.height = logoImage.offsetHeight + 'px';
});