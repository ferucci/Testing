import { Select } from "./module/filter-select.js";
import { toggleDropdown } from "./module/aside-dropdown.js";
import { changeDate } from "./module/filter-date.js";
import { vars } from "./module/vars.js";

window.addEventListener("DOMContentLoaded", () => {

  const { sidebarLinks } = vars;

  toggleDropdown(sidebarLinks);
  changeDate()
  Select()

})