function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field,
}) {
    const slides = document.querySelectorAll(slide),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        sliderWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(sliderWrapper).width,
        slider = document.querySelector(container);

    let slideIndex = 1;
    let offset = 0;

    //*******************carusel slider********************************** */

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s ease all';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach((slides) => {
        slides.style.width = width;
    });

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('carousel-dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (
            offset ==
            Math.floor(+width.slice(0, width.length - 2) * (slides.length - 1))
        ) {
            offset = 0;
        } else {
            offset += Math.floor(+width.slice(0, width.length - 2));
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = Math.floor(
                +width.slice(0, width.length - 2) * (slides.length - 1)
            );
        } else {
            offset -= Math.floor(+width.slice(0, width.length - 2));
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach((dot) => {
        console.log(dot);
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = Math.floor(
                +width.slice(0, width.length - 2) * (slideTo - 1)
            );
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach((dot) => {
                dot.style.opacity = '.5';
            });
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
    //*******************************Easy slider********************* */

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(idx) {
    //     if (idx > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (idx < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((item) => (item.style.display = ' none'));
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(idx) {
    //     showSlides((slideIndex += idx));
    // }

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
}

export default slider;
