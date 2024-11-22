document.addEventListener('DOMContentLoaded', () => {
    const dateSwitcher = document.querySelector('.date-switcher');
    const contentSections = document.querySelectorAll('.content-section');

    // Скрываем все секции контента по умолчанию
    Array.from(contentSections).forEach((section) => section.style.display = 'none');

    // Добавляем обработчики событий для кнопок переключения
    dateSwitcher.addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;

        const targetSectionId = event.target.getAttribute('data-target');
        const selectedSection = document.getElementById(targetSectionId);

        // Показать выбранную секцию контента
        selectedSection.style.display = 'block';

        // Скрыть остальные секции
        contentSections.forEach((section) => {
            if (section !== selectedSection) {
                section.style.display = 'none';
            }
        });
    });
});