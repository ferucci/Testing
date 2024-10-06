export const Select = () => {

  const checkList = document.getElementById('filter');
  const items = document.getElementById('items');
  const anchor = checkList.querySelector('.anchor');

  anchor.addEventListener('click', () => {
    if (items.classList.contains('visible')) {
      items.classList.remove('visible');
      items.style.display = "none";
    } else {
      items.classList.add('visible');
      items.style.display = "block";
    }
  })
}