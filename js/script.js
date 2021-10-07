window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".offer__slide"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        // width = getComputedStyle(slidesWrapper).width,
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        current = document.querySelector("#current"),
        slidesNumber = document.querySelector('.slides_number'),
        total = document.querySelector("#total");

    let slidesnumber = 1;
    let active = 0;
    current.innerHTML = active;
    total.innerHTML = slides.length - 1;
    slidesField.style.display = "flex";
    slidesWrapper.style.overflow = "hidden";
    const ofAll = () => {
        slides.forEach((item) => {
            console.log(item);
            item.classList.remove('show', 'fade')
            item.classList.add('hide');
        });
    }
    ofAll();
    const activeSlides = () => {
        switch (active) {
            case active :
                slides[active].classList.remove("hide"),
                    slides[active].classList.add('show', 'fade');
        }
    }
    activeSlides();
    const slideNum = () => {
        slidesNumber.innerHTML = "";
        for (let i = 0; i < slides.length; i++) {
            const element = document.createElement('span');
            element.className = "number";
            element.innerHTML = i;
            slidesNumber.appendChild(element);
        }
        slidesNumber.children[active].classList.add('fw__Bold');
    }
    slideNum();
    const slideNumber = document.querySelectorAll('.number');
    const activeNumSlide = () => {
        for (let i = 0; i < slideNumber.length; i++) {
            slideNumber[i].classList.remove('fw__Bold');
        }
        slideNumber[active].classList.add('fw__Bold');
    }
    activeNumSlide();
    next.addEventListener('click', () => {
        if (active < slides.length - 1) active++;
        current.innerHTML = active;
        ofAll();
        activeSlides();
        activeNumSlide();
    })
    prev.addEventListener('click', () => {
        if (active <= slides.length - 1) active--;
        if (active === -1) active = 0;
        current.innerHTML = active;
        ofAll();
        activeSlides();
        activeNumSlide();
    });
    slideNumber.forEach((item, i) => {
        item.addEventListener('click', () => {
            active = i;
            current.innerHTML = active;
            activeNumSlide();
            ofAll();
            activeSlides();
        })
    })
});
