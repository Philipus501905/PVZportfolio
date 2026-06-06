document.getElementById('contact-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact-overlay').classList.toggle('active');
});

document.querySelector('.contact-close-wrap').addEventListener('click', function() {
  document.getElementById('contact-overlay').classList.remove('active');
});



