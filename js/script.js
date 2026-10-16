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
        function nextSlide() {
            showSlide(slideAtual + 1);
        }
        function prevSlide() {
            showSlide(slideAtual - 1);
        }
        function startSlide() {
            slideIntervalo = setInterval(nextSlide, "5000");
        }
        function stopSlide() {
            clearInterval(slideIntervalo);
        }
        nextBtn.addEventListener("click", function() {
            nextSlide();
            stopSlide();
            startSlide();
        });
        prevBtn.addEventListener("click", function() {
            prevSlide();
            stopSlide();
            startSlide();
        });

        dots.forEach((dot) => {
            dot.addEventListener("click", function(e) {
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
                stopSlide();
                startSlide();
            });
        });

        showSlide(slideAtual);
        startSlide();

        //Validação campos formulário
        const contatoForm = document.getElementById("contatoForm");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        contatoForm.addEventListener("submit",(event) => {
            event.preventDefault();

            let isValid = true;
            //validação do campo nome (min 3 caract.)
            if (name.value.trim().length() < 3) {
                showError(name, "O nome deve ter no mínimo 3 caracteres");
                isValid = false;
            }

            //Validar campo email
            if(!isEmailValid(email.value.trim())) {
                showError(email, "Insira um email válido");
                isValid = false;
            }

            //Validação do campo mensagem
            if (mensagem.value.trim().length() < 10) {
                showError(mensagem, "No minimo 10 caracteres")
                isValid = false;
            }

            if (isValid) {
                clearError();
                alert("Mensagem enviada com sucesso");
                contatoForm.reset();
            }

            function isEmailValid(email) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(email);
            }

            function showError(inputElement, mensagem) {
                const formGroup = inputElement.parentElement;
                clearFieldError(inputElement);
                const erroMensagem = document.createElement("small");
                erroMensagem.className = "error-text";
                erroMensagem.innerText = mensagem;
                formGroup.appendChild(erroMensagem);

            }
        });
    }); //Fechamento do evento carregar página
