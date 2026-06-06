document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    const target = this.getAttribute('target');

    // Keep existing exceptions (overlays, downloads, blank targets)
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link' || target === '_blank') {
      e.preventDefault();
      return;
    }

    if (href.includes('bewijs')) {
      document.documentElement.dataset.direction = 'up';
    } else if (href.includes('index')) {
      document.documentElement.dataset.direction = 'down';
    } else {
      document.documentElement.dataset.direction = 'back';
    }

    // Use the View Transitions API when available so CSS ::view-transition rules apply
    e.preventDefault();
    const navigate = () => { window.location.href = href; };
    if (document.startViewTransition) {
      document.startViewTransition(navigate);
    } else {
      navigate();
    }
  });
});