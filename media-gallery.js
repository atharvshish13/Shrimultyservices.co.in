const recentPhotos = [
  { src: 'Photoes/Skit Activity (2).jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/Skit Activity (3).jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/Skit Activity (5).jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/Skit Activity (6).jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/Skit Activity 1.jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/Skit Activity 4.jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:12 PM', datetime: '2026-11-23T21:12:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent (2).jpeg', title: 'Gazebo tent', category: 'TVS branding', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent (3).jpeg', title: 'Gazebo tent', category: 'TVS branding', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Gazebo Tent.jpeg', title: 'Gazebo tent', category: 'TVS branding', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/Skit Activity.jpeg', title: 'Skit activity', category: 'Field activity', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/TVS Branding Cup (2).jpeg', title: 'TVS branding cup', category: 'Promotional branding', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/WhatsApp Unknown 2026-11-23 at 9.59.29 PM/TVS Branding Cup.jpeg', title: 'TVS branding cup', category: 'Promotional branding', added: 'November 23, 2026 · 9:59 PM', datetime: '2026-11-23T21:59:00' },
  { src: 'Photoes/Photo Updte 24 nov 2026/All photos/Organize Meeting.png', title: 'Organize meeting', category: 'Meetings & events', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' },
  ...['1.jpg', '2.jpg', '3.jpg', '4.jpg'].map((name) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Amul Van Branding/${name}`, title: 'Amul van branding', category: 'Van branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 8 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Box sheep photos/${index + 1}.jpg`, title: 'Box-shaped van branding', category: 'Van branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...[
    ['Apache Demo.jpg', 'TVS Apache demo'],
    ['Apache.jpg', 'TVS Apache activation'],
    ['Demo Van Activity.png', 'Demo van activity'],
    ['TVS Apache.jpg', 'TVS Apache demo']
  ].map(([name, title]) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Demo Van Activity/${name}`, title, category: 'Demo van activity', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 5 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/L-Shape Photos/${index + 1}.jpeg`, title: 'L-shaped van branding', category: 'Van branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 4 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/LED Van/${index + 1}.jpg`, title: 'LED demo van', category: 'Demo van activity', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...[
    ['1.jpg', 'Shop branding'],
    ['2.jpg', 'Shop branding'],
    ['Acrylic Board.jpg', 'Acrylic board installation'],
    ['Shop Branding.png', 'Shop branding'],
    ['Shop Installation.jpg', 'Shop installation']
  ].map(([name, title]) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Shop Branding/${name}`, title, category: 'Shop branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 3 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Stall Branding/${index + 1}.jpg`, title: 'Stall branding', category: 'Stall branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 4 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/T-Shape Van/${index + 1}.jpeg`, title: 'T-shaped van branding', category: 'Van branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' })),
  ...Array.from({ length: 4 }, (_, index) => ({ src: `Photoes/Photo Updte 24 nov 2026/All photos/Wall Rap Photo/${index + 1}.jpg`, title: 'Wall wrap branding', category: 'Wall branding', added: 'November 24, 2026 · 2:17 PM', datetime: '2026-11-24T14:17:00' }))
];

const photosPanel = document.getElementById('photos-panel');
const archiveGrid = photosPanel.querySelector('.project-grid');
const archiveHeading = Array.from(photosPanel.querySelectorAll('.archive-heading'))
  .find((heading) => heading.querySelector('h2')?.textContent.includes('Project Photo Archive'));
const photoHeading = document.createElement('h2');
photoHeading.className = 'photo-section-title';
photoHeading.textContent = `Updated Photos (${recentPhotos.length})`;

const photoGrid = document.createElement('div');
photoGrid.className = 'media-grid updated-photo-grid';

recentPhotos.forEach((photo) => {
  const figure = document.createElement('figure');
  figure.className = 'media-card';

  const openButton = document.createElement('button');
  openButton.className = 'photo-open';
  openButton.type = 'button';
  openButton.setAttribute('aria-label', `Open ${photo.title} photo`);

  const image = document.createElement('img');
  image.src = photo.src;
  image.alt = photo.title;
  image.loading = 'lazy';
  image.addEventListener('error', () => {
    figure.classList.add('media-error');
    console.error('Unable to load gallery photo:', photo.src);
  });
  openButton.append(image);

  const caption = document.createElement('figcaption');
  const title = document.createElement('strong');
  title.textContent = photo.title;
  const category = document.createElement('span');
  category.className = 'project-category';
  category.textContent = photo.category;
  const date = document.createElement('time');
  date.dateTime = photo.datetime;
  date.textContent = `Added ${photo.added}`;
  caption.append(title, category, date);
  figure.append(openButton, caption);
  photoGrid.append(figure);

  openButton.addEventListener('click', () => openPhoto(photo));
});

photosPanel.replaceChildren(photoHeading, photoGrid, archiveHeading, archiveGrid);
document.getElementById('photos-tab').querySelector('span').textContent = `(${recentPhotos.length + archiveGrid.children.length})`;

const lightbox = document.createElement('dialog');
lightbox.className = 'media-lightbox';
lightbox.setAttribute('aria-label', 'Photo viewer');
lightbox.innerHTML = `
  <div class="lightbox-toolbar">
    <p class="lightbox-caption"></p>
    <div class="lightbox-controls">
      <button type="button" class="lightbox-zoom-out" aria-label="Zoom out">−</button>
      <button type="button" class="lightbox-zoom-in" aria-label="Zoom in">+</button>
      <button type="button" class="lightbox-close" aria-label="Close photo viewer">×</button>
    </div>
  </div>
  <div class="lightbox-stage">
    <img class="lightbox-image" alt="">
  </div>
  <p class="lightbox-hint">Use + / − or the mouse wheel to zoom. Press Escape to close.</p>
`;
document.body.append(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const zoomInButton = lightbox.querySelector('.lightbox-zoom-in');
const zoomOutButton = lightbox.querySelector('.lightbox-zoom-out');
let zoom = 1;

function setZoom(nextZoom) {
  zoom = Math.min(4, Math.max(1, nextZoom));
  lightboxImage.style.transform = `scale(${zoom})`;
  zoomInButton.disabled = zoom >= 4;
  zoomOutButton.disabled = zoom <= 1;
}

function openPhoto(photo) {
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.title;
  lightbox.querySelector('.lightbox-caption').textContent = `${photo.title} · ${photo.added}`;
  setZoom(1);
  lightbox.showModal();
  lightbox.querySelector('.lightbox-close').focus();
}

zoomInButton.addEventListener('click', () => setZoom(zoom + 0.5));
zoomOutButton.addEventListener('click', () => setZoom(zoom - 0.5));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.querySelector('.lightbox-stage').addEventListener('wheel', (event) => {
  event.preventDefault();
  setZoom(zoom + (event.deltaY < 0 ? 0.25 : -0.25));
}, { passive: false });
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'Escape') {
    lightbox.close();
    return;
  }
  if (event.key === '+' || event.key === '=') setZoom(zoom + 0.5);
  if (event.key === '-') setZoom(zoom - 0.5);
  if (event.key === '0') setZoom(1);
});
