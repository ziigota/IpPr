document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const topNav = document.getElementById('myTopnav');

    // Проверка на наличие элементов перед назначением обработчика события
    if (hamburger && topNav) {
        hamburger.onclick = function() {
            topNav.classList.toggle('responsive'); // Используем classList.toggle для переключения класса
        };
    }

    const menuList = document.querySelectorAll('.menu-element');

    // Добавляем обработчик клика на каждую ссылку меню
    menuList.forEach((element) => {
        element.addEventListener('click', (event) => {
            const elementLink = element.dataset.link;

            // Если атрибут data-link существует, выполняем прокрутку
            if (elementLink) {
                event.preventDefault(); // Останавливаем переход по ссылке
                const targetElement = document.getElementById(elementLink);

                // Проверка на наличие элемента перед прокруткой
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
                }
            }
            // Иначе оставляем стандартное поведение (переход на другую страницу)
        });
    });


});
