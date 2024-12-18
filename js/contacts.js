$(document).ready(() => {

    $('.countup').each(function() {    // Находим все элементы с классом .countup и выполняем анимацию
        const that = $(this);  // Сохраняем текущий элемент jQuery для дальнейшего использования
        const countTo = that.attr('data-end');  // Получаем конечное значение из атрибута data-end


        $({countNum: 0}).animate(   // Инициализируем объект с начальным числом countNum = 0 и запускаем анимацию до countTo
            { countNum: countTo },
            {
                duration: 8000,
                easing: 'linear',          // Анимация происходит с постоянной скоростью
                step: function() {

                    that.text(Math.floor(this.countNum));  // Обновляем текст элемента на каждом шаге анимации с округлением вниз
                },
                complete: function() {

                    that.text(this.countNum);
                }
            }
        );
    });
});
