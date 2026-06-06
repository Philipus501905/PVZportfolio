const audio = document.getElementById('bg-music');
const savedTime = sessionStorage.getItem('musicTime');
if (savedTime) audio.currentTime = parseFloat(savedTime);
audio.play().catch(() => {});
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('musicTime', audio.currentTime);
});