import { Select } from "./module/select.js";
import { toggleDropdown } from "./module/dropdown.js";

const sidebarLink = document.querySelectorAll('.sidebar__item[data-dropdown] > .sidebar__link');
toggleDropdown(sidebarLink);


const selectOptions = {
  placeholder: 'Фильтры',
  selectedId: '1',
  data: [
    { id: '1', value: 'Услуги' },
    { id: '2', value: 'Продажи' },
    { id: '3', value: 'Расходники' },
    { id: '4', value: 'Покупки' },
  ],
  onSelect(item) {
    // console.log('Выбранный элемент: ', item)
  }
}

const select = new Select('#select', selectOptions);