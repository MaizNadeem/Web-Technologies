document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const navbar = document.getElementById("navbar");

    let slideIndex = 0;
    const maxIndex = slider.children.length - 1;
    const slideWidth = slider.children[0].offsetWidth;

    function moveSlide(n) {
        slideIndex += n;

        if (slideIndex < 0) {
            slideIndex = maxIndex;
        } else if (slideIndex > maxIndex) {
            slideIndex = 0;
        }

        slider.style.transition = "transform 0.5s ease";
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    slider.addEventListener("transitionend", () => {
        slider.style.transition = "";
    });

    prevBtn.addEventListener("click", () => moveSlide(-1));
    nextBtn.addEventListener("click", () => moveSlide(1));

    moveSlide(0);

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('with-shadow');
        } else {
            navbar.classList.remove('with-shadow');
        }
    });

    const logo = document.querySelector(".logo-container img");
    logo.addEventListener("click", () => {
        navbar.classList.toggle("hide-menu");
    });
});
