const jsonData = [
     {
        image: "img/blog/1.webp",
        title: "Трейлер золотого эпоса: «Сказания о героях Амфореуса»",
        text: "Амфореус! Я не называю твоё имя всуе.Я здесь, чтобы рассказать историю.",
        date: "22.11.2024",
        tags: ["hsr", "трейлер", "Амфореус"]
    },
    {
        image: "img/blog/2.jpg",
        title: "Специальный стрим «Область непознанного» | «Ближе к звёздам»",
        text: "Незваный гость? Кто-то пытается сорвать выпуск? Почему эта полярная сова продолжает смеяться?",
        date: "22.10.2024",
        tags: ["hsr", "стрим", "сова"]
    },
    {
        image: "img/blog/3.jpg",
        title: "Описание игрового режима Виртуальная вселенная: Область непознанного",
        text: "Описание нового дополнения Виртуальной вселенной версии 2.6 уже доступно, ознакомьтесь с ним",
        date: "12.10.2024",
        tags: ["Виртуальная вселенная", "дополнение", "hsr"]
    },
    {
        image: "img/blog/4.jpg",
        title: "Трейлер путешествия тысячи звёзд: «Стрела в погоне за звездой»",
        text: "У тех, у кого нет ни хвоста, ни жизни, ни девяти смертей, нет выбора, остаётся только идти вперёд.",
        date: "3.9.2024",
        tags: ["трейлер", "Фэйсяо", "hsr"]
    },
    {
        image: "img/blog/5.png",
        title: "Обновление версии 2.3 «Прощай, Пенакония»",
        text: "Первопроходческая экспедиция на Пенаконии подошла к прекрасному концу. Пора двигаться к следующей остановке. Но сначала... попрощайтесь с белой ночью.",
        date: "19.6.2024",
        tags: ["Обновление", "Пенакония", "hsr"]
    },
    {
        image: "img/blog/6.jpg",
        title: "Короткометражный анимационный фильм Honkai: Star Rail | «Прах Глатирамера»",
        text: "«Статья 22 воинского устава Глатирамера: Рыцари должны отдать всё, что у них есть, её величеству королеве. В том числе и свои жизни».",
        date: "14.6.2024",
        tags: ["анимация", "фильм", "Светлячок", "hsr"]
    },
    {
        image: "img/blog/7.jpg",
        title: "Короткометражный анимационный фильм «Рондо на протяжении бесчисленных кальп»",
        text: "Две планеты вплелись в трагичные судьбы друг друга, бесконечно вращаясь вокруг огромного солнца, чёрного как смоль.",
        date: "19.3.2024",
        tags: ["анимация", "фильм", "Ахерон", "Чёрный лебедь","hsr"]
    }
];
// Функция для отображения карточек блога
function drawCards(data) {
    // Находим контейнер для статей
    const container = document.querySelector(".blog-container");

    // Очищаем контейнер, чтобы обновить список статей
    container.innerHTML = "";

    // Проходим по всем объектам массива данных
    data.forEach((item) => {
        // Создаём карточку статьи
        const card = document.createElement("div");
        card.className = "blog-card";

        // Заполняем карточку HTML-контентом
        card.innerHTML = `
      <div class="blog-header">
        <div class="blog-cover" style="background-image: url('${item.image}')"></div>
      </div>
      <div class="blog-body">
        <div class="blog-title">
          <h2>${item.title}</h2>
        </div>
        <div class="blog-text">
          <p>${item.text}</p>
        </div>
        <div class="blog-tags">
          <ul>
            ${item.tags.map((tag) => `<li><a href="#">${tag}</a></li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="blog-footer">
        <div class="blog-published-date">${item.date}</div>
      </div>
    `;

        // Добавляем карточку в контейнер
        container.appendChild(card);
    });

    // Инициализируем обработчики тегов для фильтрации
    initTagsHandler(data);
}

// Функция фильтрации статей по запросу
function filter(value, data) {
    // Преобразуем запрос в нижний регистр для сравнения
    const lowerValue = value.toLowerCase();

    // Фильтруем данные на основе совпадений в полях объекта
    const filteredData = data.filter((item) => {
        return (
            item.image.toLowerCase().includes(lowerValue) ||
            item.title.toLowerCase().includes(lowerValue) ||
            item.text.toLowerCase().includes(lowerValue) ||
            item.date.toLowerCase().includes(lowerValue) ||
            item.tags.some((tag) => tag.toLowerCase().includes(lowerValue))
        );
    });

    // Отрисовываем отфильтрованные данные
    drawCards(filteredData);
}

// Функция инициализации обработчика поиска
function initSearchHandler(data) {
    // Находим кнопку поиска и поле ввода текста
    const searchButton = document.querySelector(".search-do");
    const searchInput = document.querySelector(".search-text");

    // Добавляем обработчик события на кнопку поиска
    searchButton.addEventListener("click", () => {
        // Получаем текст из поля поиска, убираем пробелы
        const query = searchInput.value.trim();

        // Фильтруем статьи по введённому запросу
        filter(query, data);
    });
}

// Функция инициализации кликов по тегам
function initTagsHandler(data) {
    // Находим все ссылки тегов внутри карточек
    const tags = document.querySelectorAll(".blog-tags a");

    // Добавляем обработчик клика для каждого тега
    tags.forEach((tag) => {
        tag.addEventListener("click", (event) => {
            event.preventDefault(); // Отменяем стандартное действие ссылки

            // Получаем текст тега
            const query = event.target.textContent.trim();

            // Фильтруем статьи по этому тегу
            filter(query, data);
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    // Отрисовываем все статьи
    drawCards(jsonData);

    // Настраиваем обработчик поиска
    initSearchHandler(jsonData);
});

