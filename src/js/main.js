import { Select } from "./module/filter/filter-select.js";
import { toggleDropdown } from "./module/aside-dropdown.js";
import { filterByDate } from "./module/filter/index.js";
import { vars } from "./module/vars.js";

import { ExpensesAnim } from "./module/payment_schedule/index.js";

window.addEventListener("DOMContentLoaded", () => {

  const { sidebarLinks } = vars;

  const optionsWithCanvas = (CN, COLOR) => {
    if (!String(CN)) return;
    return {
      className: CN,
      color: COLOR
    }
  }

  toggleDropdown(sidebarLinks);
  filterByDate()
  Select()

  new ExpensesAnim(optionsWithCanvas('income', '31, 202, 69'))
  new ExpensesAnim(optionsWithCanvas('expenses', '202, 31, 41'))

})