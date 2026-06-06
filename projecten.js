document.getElementById('furhat-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('furhat-overlay').classList.toggle('active');
});

document.querySelector('.furhat-close-wrap').addEventListener('click', function() {
  document.getElementById('furhat-overlay').classList.remove('active');
});

document.getElementById('DI-Lab-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('DI-Lab-overlay').classList.toggle('active');
});

document.querySelector('.DI-Lab-close-wrap').addEventListener('click', function() {
  document.getElementById('DI-Lab-overlay').classList.remove('active');
});

document.getElementById('Watersley-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('Watersley-overlay').classList.toggle('active');
});

document.querySelector('.Watersley-close-wrap').addEventListener('click', function() {
  document.getElementById('Watersley-overlay').classList.remove('active');
});