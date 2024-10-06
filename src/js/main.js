import { Select } from "./module/select.js";
import { toggleDropdown } from "./module/dropdown.js";

const sidebarLink = document.querySelectorAll('.sidebar__item[data-dropdown] > .sidebar__link');
toggleDropdown(sidebarLink);

Select()