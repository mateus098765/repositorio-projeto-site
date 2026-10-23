document.addEventListener("DOMContentLoaded", function () {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    }); // Menu responsivo

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(function (Link) {
        Link.addEventListener("click", function () {
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

    nextBtn.addEventListener("click", function () {
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        stopSlide();
        startSlide();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", function (e) {
            const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopSlide();
            startSlide();
        });
    });

    showSlide(slideAtual);
    startSlide();

    // Validação campos formulário
    const contatoForm = document.getElementById("contatoForm");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    
    contatoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        clearError();
    
        let isValid = true;
    
        // Validar nome
        if (nome.value.trim().length < 3) {
            showError(nome, "O nome deve ter no mínimo 3 caracteres");
            isValid = false;
        }
    
        // Validar email
        if (!isEmailValid(email.value.trim())) {
            showError(email, "Insira um email válido");
            isValid = false;
        }
    
        // Validar mensagem
        if (mensagem.value.trim().length < 10) {
            showError(mensagem, "A mensagem deve ter no mínimo 10 caracteres");
            isValid = false;
        }
    
        // Enviar se todos os campos forem válidos
        if (isValid) {
            showToast("Mensagem enviada com sucesso!");
            contatoForm.reset();
        }
    });

    // Funções auxiliares
    function showToast(mensagemCadastro) {
        const toast = document.getElementById("toast");
        const toastMensagem = document.getElementById("toastMensagem");
        toastMensagem.textContent = mensagemCadastro;
        toast.classList.add("show");
        setTimeout(function () {
            toast.classList.remove("show");
        }, 10000);
    }

    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function showError(inputElement, mensagem) {
        const formGroup = inputElement.parentElement;
        clearFieldError(inputElement);
        inputElement.classList.add("input-error");

        const erroMensagem = document.createElement("small");
        erroMensagem.className = "error-text";
        erroMensagem.innerText = mensagem;
        formGroup.appendChild(erroMensagem);
    }

    function clearFieldError(inputElement) {
        const formGroup = inputElement.parentElement;
        const removeErro = formGroup.querySelector(".error-text");
        if (removeErro) {
            removeErro.remove();
        }
        inputElement.classList.remove("input-error");
    }

    function clearError() {
        const errorMessages = document.querySelectorAll(".error-text");
        errorMessages.forEach((errorMessages) => errorMessages.remove());
        const inputErrors = document.querySelectorAll(".input-error");
        inputErrors.forEach((inputError) => inputError.classList.remove("input-error"));
    }

    // Remover a borda vermelha nos inputs ao digitar
    [nome, email, mensagem].forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            clearFieldError(inputElement);
        });
    });
});