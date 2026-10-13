    document.addEventListener("DOMContentLoaded", function() {

        const menuResponsivo = document.getElementById("menuResponsivo");
        const navMenu = document.getElementById("nav-menu");
        menuResponsivo.addEventListener("click", function () {
            navMenu.classList.toggle ("active");
        }); //Menu responssivo

        const navLinks = document.querySelectorAll(".nav-menu a");
        navLinks.forEach(function(Link) {
            Link.addEventListener("click", function() {
                navMenu.classList.remove("active");
            });
        });

    }); //Fechamento do evento carregar página
