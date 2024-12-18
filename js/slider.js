const slides = [
    'img/blog/1.webp',
    'img/blog/2.jpg',
    'img/blog/3.jpg',
    'img/blog/4.jpg',
    'img/blog/5.png',
    'img/blog/6.jpg',
    'img/blog/7.jpg',
];

$(document).ready(() => {
    let currentSlide = 0; // Текущий слайд
    let isBusy = false; // Флаг занятости (анимации)
    const slidesCount = slides.length - 1; // Количество слайдов (индекс последнего)

    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);

        if (!isBusy) {
            if (that.hasClass('right')) {
                currentSlide += 1;
                if (currentSlide > slidesCount) currentSlide = 0;
            } else {
                currentSlide -= 1;
                if (currentSlide < 0) currentSlide = slidesCount;
            }

            isBusy = true;
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
            });
            $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
        }
    });
});


