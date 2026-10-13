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

        const slides = document.querySelectorAll(".carousel-slide");
        const dots = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        let slideAtual = 0;
        let slideIntervalo;

        function showSlide(index) {
            slides.forEach((slide) => {
                slide.classList.remove("active");
                dots.forEach((dot) => dot.classList.remove("active"));
            });
            slideAtual = (index + slides.length) % slides.length;
            slides[slideAtual].classList.add("active");
            dots[slideAtual].classList.add("active");
        }
    }); //Fechamento do evento carregar página
