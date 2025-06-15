const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('navbar');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
  });