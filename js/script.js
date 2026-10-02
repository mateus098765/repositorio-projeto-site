document.addEventListener("DOMContentLoaded", function() {

    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", function () {
        navMenu.classList.toggle ("active");
    });

}); //Fechamento do evento carregar página
