//  <!-- JS to toggle mobile menu -->
  
    const menuBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    const toggle = document.getElementById("MenuToggle");
  const Menu = document.getElementById("dashboardMenu");
  toggle.addEventListener("click", () => {
    Menu.classList.toggle("hidden");
  });
            
    