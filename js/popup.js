$(document).ready(() => {
    // Сохраняем элементы .control-item в переменную
    const controlItems = $('.control-item');

    // Навешиваем событие клика на элементы портфолио
    $('.portfolio-item').on('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        createPopup(e.currentTarget); // Передаем кликнутый элемент
    });

    // Функция создания модального окна для портфолио
    function createPopup(item) {
        const clicked = $(item); // Преобразуем элемент в jQuery объект
        const imageSrc = clicked.data('src'); // Получаем путь из data-src

        // Создаём структуру модального окна
        const container = $('<div>', {'class': 'popup-container'});
        const img = $('<img>', {'class': 'popup', 'src': imageSrc});

        // Добавляем картинку в контейнер
        container.append(img);

        // Добавляем контейнер в DOM
        $('body').append(container);

        // Добавляем класс для анимации через некоторое время
        setTimeout(() => {
            container.addClass('ready');
        }, 10); // Небольшая задержка для плавного добавления класса

        // Обработчик клика по картинке для закрытия модального окна
        img.on('click', () => {
            container.removeClass('ready'); // Убираем класс готовности
            setTimeout(() => {
                container.remove(); // Удаляем контейнер после завершения анимации
            }, 250); // Время на завершение анимации
        });
    }

    // Добавляем обработчик клика на кнопки отзывов
    controlItems.on('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        slideTestimonials(e.currentTarget); // Передаем кликнутую кнопку
    });

    // Функция, выполняющаяся по клику на неактивный элемент
    function slideTestimonials(item) {
        // Преобразуем элемент в jQuery объект
        const clicked = $(item);

        // Проверяем, что кнопка неактивна
        if (clicked.hasClass('active')) {
            return; // Если уже активна, ничего не делаем
        }

        // Получаем индекс кнопки
        const index = controlItems.index(clicked);
        console.log(index); // Выводим индекс для проверки

        // Получаем ширину карточки, включая margin
        const width = $('.testimonials-card').outerWidth(true);

        // Вычисляем расстояние для прокрутки
        const scroll = width * 2 * index;

        // Прокручиваем контейнер с отзывами
        $('.testimonials-inner').css('transform', 'translateX(-' + scroll + 'px)');

        // Убираем класс active у всех кнопок
        controlItems.removeClass('active');

        // Добавляем класс active кнопке с текущим индексом
        controlItems.eq(index).addClass('active');
    }
});