document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link') {
      e.preventDefault();
      return;
    }
    if (href.includes('projecten')) {
      document.documentElement.dataset.direction = 'forward';
    } else if (href.includes('bewijs')) {
      document.documentElement.dataset.direction = 'up';
    } else if (window.location.pathname.includes('bewijs')) {
      document.documentElement.dataset.direction = 'down';
    } else {
      document.documentElement.dataset.direction = 'back';
    }
  });
});