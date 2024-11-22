export const filterByDate = () => {
  const table = document.querySelector('.result__table')

  const filter = document.querySelector('.filter')
  const filterButtons = document.querySelectorAll('.filter-buttons > button')

  const itemsTable = table.querySelectorAll('.row')
  // itemsTable

  // 1. Найти дату, по полю в таблице дайт
  // 2. Повесить обработчик событий на кнопки в хедере
  // 3. Каждой кнопки добавить дата-атрибут, для сравнения даты
  // 4. Сравнивать нажатую кнопку с полем дайт в таблице 
  // 5. Выводить только элементы, которые совпадают. 


  const changeDate = () => {
    const datePicker = document.getElementById("day");

    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());

    updateDisplayedDate(currentDate);

    datePicker.querySelector('.prev').addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDisplayedDate(currentDate);
    });

    datePicker.querySelector('.next').addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDisplayedDate(currentDate);
    });

    function updateDisplayedDate(date) {
      const formattedDate = formatDate(date);
      datePicker.querySelector('input').value = formattedDate;
    }

    function formatDate(date) {
      const day = date.getDate();
      const month = date.toLocaleString('ru', { month: 'long' });
      // const year = date.getFullYear();
      return `${day} ${month}`;
    }
  }

  changeDate()

}
