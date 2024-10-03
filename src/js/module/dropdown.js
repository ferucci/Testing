
export const toggleDropdown = (currentLink) => {
  currentLink.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdownId = this.parentElement.getAttribute('data-dropdown');
      const dropdown = document.getElementById(dropdownId);

      const isActive = this.getAttribute('data-active') === 'true';

      document.querySelectorAll('.dropdown__list').forEach(list => {
        link.classList.remove('active');
        list.parentElement.setAttribute('data-active', 'false');
      });

      if (!isActive) {
        this.setAttribute('data-active', 'true');
        this.classList.add('active');
      } else {
        this.setAttribute('data-active', 'false');
        this.classList.remove('active');
      }

      // Toggle the active class
      dropdown.classList.toggle('show');
    });
  });
}