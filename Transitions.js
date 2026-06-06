document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    const target = this.getAttribute('target');

    // Keep existing exceptions (overlays, downloads, blank targets, external/new-tab links)
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link' || target === '_blank') {
      e.preventDefault();
      return;
    }

    // ignore hash-only links (in-page anchors)
    if (href.startsWith('#')) {
      return;
    }

    // Allow author to override per-link using data-direction attribute (up/down/back/left/right)
    let direction = this.dataset.direction;

    // If no explicit direction, compute from an ordered list of pages
    if (!direction) {
      const pagesOrder = ['index.html', 'projecten.html', 'bewijs.html'];
      const toUrl = new URL(href, location.href);
      const toFile = toUrl.pathname.split('/').filter(Boolean).pop() || 'index.html';
      const fromFile = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
      const toIdx = pagesOrder.indexOf(toFile);
      const fromIdx = pagesOrder.indexOf(fromFile);

      if (toIdx !== -1 && fromIdx !== -1) {
        // Navigate 'up' when moving forward in the pagesOrder, 'down' when moving backward
        direction = toIdx > fromIdx ? 'up' : (toIdx < fromIdx ? 'down' : 'back');
      } else if (href.includes('bewijs')) {
        direction = 'up';
      } else if (href.includes('index')) {
        direction = 'down';
      } else {
        direction = 'back';
      }
    }

    document.documentElement.dataset.direction = direction;

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