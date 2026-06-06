document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link') {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    let direction;
    if (href.includes('projecten')) {
      direction = 'forward';
    } else if (href.includes('bewijs')) {
      direction = 'up';
    } else if (window.location.pathname.includes('bewijs')) {
      direction = 'down';
    } else {
      direction = 'back';
    }
    document.documentElement.dataset.direction = direction;
    document.startViewTransition(() => {
      window.location.href = href;
    });
  });
});