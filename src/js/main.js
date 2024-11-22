import { Select } from "./module/filter/filter-select.js";
import { toggleDropdown } from "./module/aside-dropdown.js";
import { changeDate } from "./module/filter/index.js";
import { vars } from "./module/vars.js";

window.addEventListener("DOMContentLoaded", () => {

  const { sidebarLinks } = vars;

  toggleDropdown(sidebarLinks);
  changeDate()
  Select()

})