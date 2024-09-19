document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuContent = document.getElementById('menu-content');
  
    hamburgerMenu.addEventListener('click', (event) => {
      event.preventDefault();
      menuContent.classList.toggle('hidden');
    });
  
    document.addEventListener('click', (event) => {
      if (!hamburgerMenu.contains(event.target)) {
        menuContent.classList.add('hidden');
      }
    });
  });
  