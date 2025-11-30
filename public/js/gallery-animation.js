// Initialize Vanilla Tilt for 3D tilt effect
VanillaTilt.init(document.querySelectorAll(".gallery-item"), {
  max: 1,
  speed: 100,
  glare: true,
  "max-glare": 0.2,
  scale: 1.02,
  perspective: 800
});

// Initialize gallery animations
document.querySelectorAll('.gallery-item').forEach(item => {
  const img = item.querySelector('img');
  const src = img.getAttribute('src');
  
  for (let i = 1; i <= 3; i++) {
    const slice = document.createElement('div');
    slice.classList.add('slice-layer');
    slice.style.backgroundImage = `url('${src}')`;
    
    const depth = -(i * 10);
    slice.dataset.depth = depth;
    
    slice.style.transform = `translateZ(${depth}px)`;
    slice.style.filter = `brightness(${1 - i * 0.1})`;
    item.insertBefore(slice, img);
    
    floatSlice(slice);
  }

  function floatSlice(slice) {
    if (item.matches(':hover')) return;
    
    const depth = slice.dataset.depth;
    const rx = (Math.random() - 0.5) * 20;
    const ry = (Math.random() - 0.5) * 20;
    
    slice.style.transform = `translateZ(${depth}px) translate(${rx}px, ${ry}px)`;
    
    const duration = 3000 + Math.random() * 2000;
    slice.floatTimeout = setTimeout(() => floatSlice(slice), duration);
  }

  item.addEventListener('mouseenter', () => {
    item.querySelectorAll('.slice-layer').forEach(slice => {
        clearTimeout(slice.floatTimeout);
    });
  });

  item.addEventListener('mouseleave', () => {
     item.querySelectorAll('.slice-layer').forEach(slice => {
         floatSlice(slice);
     });
  });

  item.addEventListener("tiltChange", (event) => {
    const pX = (event.detail.percentageX - 50) / 50;
    const pY = (event.detail.percentageY - 50) / 50;

    const slices = item.querySelectorAll('.slice-layer');
    slices.forEach((slice, index) => {
      const depth = (index + 1) * 5;
      const moveX = pX * (index + 1) * 8; 
      const moveY = pY * (index + 1) * 8;
      
      slice.style.transform = `translateZ(-${depth}px) translate(${moveX}px, ${moveY}px)`;
    });
  });
});

// Lightbox functions
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
  void lightbox.offsetWidth;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  setTimeout(() => {
    lightbox.style.display = 'none';
  }, 300);
}
