// Закрытие выпадающего меню при клике вне его
document.addEventListener('click', function (event) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(event.target) && !event.target.classList.contains('dropbtn')) {
      dropdown.style.display = 'none';
    }
  });
});

// Показать выпадающее меню при наведении
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  dropdown.addEventListener('mouseenter', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
  });
});




/* Основной контент */
.container {
  max-width: 1200px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Центрирование */
  padding: 0 20px; /* Горизонтальные отступы для маленьких экранов */
}

/* Блок с кнопками контактов */
.contact-buttons {
  display: flex;
  flex-wrap: wrap; /* Перенос строк на маленьких экранах */
  gap: 10px; /* Отступ между кнопками */
  justify-content: center; /* Центрирование кнопок */
  margin: 20px 0; /* Отступы вокруг блока */
}

.contact-buttons button {
  background-color: var(--secondary-color); /* Темно-темно серый */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.contact-buttons button:hover {
  background-color: var(--hover-color); /* Темнее при наведении */
}
.contact-buttons i {
  margin-right: 5px; /* Отступ между иконкой и текстом */
}

/* iframe */
.iframe-container {
  width: 100%;
  height: 400px; /* Высота iframe */
  margin: 20px 0; /* Отступы между iframe */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.iframe-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Заголовки и параграфы */
main h2 {
  text-align: center;
  margin-bottom: 20px;
}
main p {
  text-align: center;
  margin-bottom: 20px;
}

/* Медиа-запросы для адаптивности */
@media (max-width: 768px) {
  .contact-buttons button {
    font-size: 0.9em; /* Уменьшаем размер текста на маленьких экранах */
    padding: 8px 15px; /* Уменьшаем подушку кнопок */
  }

  .iframe-container {
    height: 300px; /* Уменьшаем высоту iframe */
  }
}