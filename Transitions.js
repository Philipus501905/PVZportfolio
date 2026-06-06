document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link')  {
      e.preventDefault();
      return;
    }
    const currentPage = window.location.pathname;
    if (href.includes('Projecten')) {
      sessionStorage.setItem('direction', 'forward');
    } else if (href.includes('bewijs')) {
      sessionStorage.setItem('direction', 'up');
    } else if (href.includes('index')) {
      if (currentPage.includes('bewijs')) {
        sessionStorage.setItem('direction', 'down');
      } else {
        sessionStorage.setItem('direction', 'back');
      }
    }
  });
});

const direction = sessionStorage.getItem('direction');
if (direction) {
  document.documentElement.dataset.direction = direction;
  sessionStorage.removeItem('direction');
}