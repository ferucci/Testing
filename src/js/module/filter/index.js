export const filterByDate = () => {
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