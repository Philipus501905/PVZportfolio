// On page load, apply any persisted direction (fallback when View Transitions isn't available)
const _savedDirection = sessionStorage.getItem('direction');
if (_savedDirection) {
  document.documentElement.dataset.direction = _savedDirection;
  sessionStorage.removeItem('direction');
}

document.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const id = this.getAttribute('id');
    if (!href || href === '' || href.includes('.pdf') || href.includes('.docx') || id === 'contact-link' || id === 'furhat-link' || id === 'DI-Lab-link' || id === 'Watersley-link')  {
      e.preventDefault();
      return;
    }
    const currentPage = window.location.pathname;
    if (href.includes('projecten')) {
      // treat 'projecten' as moving forward (underground) — store 'up' to match CSS
      sessionStorage.setItem('direction', 'up');
      try { document.documentElement.dataset.direction = 'up'; } catch (e) {}
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