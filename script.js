// Zegar od daty
const startDate = new Date(2023, 6, 28); // lipiec = 6 (bo 0-index)
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const days = Math.floor(hr / 24);
  const years = Math.floor(days / 365);
  const daysR = days % 365;
  const hrsR = hr % 24;
  const minsR = min % 60;
  const secsR = sec % 60;
  document.getElementById('timer').textContent =
    `Jesteśmy razem: ${years} lat, ${daysR} dni, ${hrsR} godz, ${minsR} min, ${secsR} sek`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Galeria zdjęć
const slides = [
  { src: 'zdj1.JPEG', caption: 'Tu zaczął się nasz związek' },
  { src: 'zdj2.JPEG', caption: 'Pierwsze wspólne wakacje' },
  { src: 'zdj3.JPEG', caption: 'Nasze wspólne chwile' },
  { src: 'zdj11.JPG', caption: 'Nasze wspólne chwile' },
  { src: 'zdj12.JPG', caption: 'Nasze wspólne chwile' },
  { src: 'zdj13.JPEG', caption: 'Nasze wspólne chwile' },
   { src: 'zdj14.JPEG', caption: 'Nasze wspólne chwile' },
    { src: 'zdj15.JPEG', caption: 'Nasze wspólne chwile' },
     { src: 'zdj16.JPEG', caption: 'Nasze wspólne chwile' },
      { src: 'zdj17.JPEG', caption: 'Nasze wspólne chwile' },
       { src: 'zdj18.JPG', caption: 'Nasze wspólne chwile' },
        { src: 'zdj19.JPG', caption: 'Nasze wspólne chwile' },
         { src: 'zdj20.JPG', caption: 'Nasze wspólne chwile' },
          { src: 'zdj21.JPG', caption: 'Nasze wspólne chwile' },
           { src: 'zdj22.JPG', caption: 'Nasze wspólne chwile' },
            { src: 'zdj23.JPEG', caption: 'Nasze wspólne chwile' },
             { src: 'zdj24.JPEG', caption: 'Nasze wspólne chwile' },
];
let current = -1;

function showSlide(i) {
  current = (i + slides.length) % slides.length;

  if (current === 0) {
    document.getElementById('gallery').classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('prevBtn').classList.remove('hidden');
    document.getElementById('loveMessage').classList.add('hidden');
  }

  if (i >= slides.length) {
    document.getElementById('gallery').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('prevBtn').classList.add('hidden');
    document.getElementById('loveMessage').classList.remove('hidden');
    return;
  }

  document.getElementById('galleryImage').src = slides[current].src;
  document.getElementById('caption').textContent = slides[current].caption;
}


function nextSlide() { showSlide(current + 1); }
function prevSlide() { showSlide(current - 1); }

document.getElementById('startBtn').addEventListener('click', function(){
  showSlide(0);
  const audio = document.getElementById('bgmusic');
  if (audio.paused) audio.play();
});
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Serduszka
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 300);
