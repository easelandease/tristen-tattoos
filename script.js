/* ============================================================
   TATS BY TRIS — script.js

   HOW TO ADD PHOTOS
   ─────────────────
   1. Create an "images" folder next to index.html
   2. Put portfolio photos in images/portfolio/
   3. Put flash photos in images/flash/
   4. Update the arrays below with the filenames
   5. Set category on portfolio items (portrait/traditional/blackwork/custom)

   Example — once you've added a photo:
     { src: "images/portfolio/lady-head.jpg", alt: "Lady head in red beret", category: "portrait" }

   Leave src: "" to show a styled placeholder instead.
   ============================================================ */


// ─── PORTFOLIO PHOTOS ────────────────────────────────────────
// Edit this array — one object per photo.
// category options: "portrait" | "traditional" | "blackwork" | "custom"

const portfolioPhotos = [
  { src: "images/portfolio/lady-head-red-beret.jpg",   alt: "Lady head in red beret",        category: "portrait"    },
  { src: "images/portfolio/devil-dancing.jpg",         alt: "Devil and lady dancing",         category: "traditional" },
  { src: "",                                           alt: "Spiderweb with flower",          category: "blackwork"   },
  { src: "images/portfolio/dolphin-palm-rainbow.jpeg", alt: "Dolphin jumping through a rainbow, palm tree", category: "traditional" },
  { src: "",                                           alt: "Compass star with florals",      category: "custom"      },
  { src: "images/portfolio/pinup-fan.jpg",             alt: "Pin-up lady with fan",           category: "blackwork"   },
  { src: "",                                           alt: "Floral vine on shoulder",        category: "custom"      },
  { src: "",                                           alt: "Traditional flash piece",        category: "traditional" },
  { src: "",                                           alt: "Portrait tattoo",                category: "portrait"    },

  { src: "images/portfolio/longhorn-skull.jpg",        alt: "Longhorn skull on the knee",                  category: "blackwork"   },
  { src: "images/portfolio/sun-mandala.jpeg",          alt: "Sun mandala on the chest",                    category: "blackwork"   },
  { src: "images/portfolio/scorpion.jpeg",             alt: "Scorpion on the forearm",                     category: "blackwork"   },
  { src: "images/portfolio/floral-shoulder-1.jpeg",    alt: "Floral cluster on the shoulder",              category: "traditional" },
  { src: "images/portfolio/floral-shoulder-2.jpeg",    alt: "Floral cluster on the shoulder, second view", category: "traditional" },
  { src: "images/portfolio/swallows-diamonds.jpeg",    alt: "Two swallows with diamonds on the wrist",     category: "blackwork"   },
  { src: "images/portfolio/snoopy-doghouse.jpeg",      alt: "Snoopy on his doghouse with Woodstock",       category: "custom"      },
  { src: "images/portfolio/flower-vine-forearm.jpeg",  alt: "Flower and vine on the forearm",              category: "traditional" },
  { src: "images/portfolio/butterfly-color.jpeg",      alt: "Color traditional butterfly",                 category: "traditional" },
  { src: "images/portfolio/jellyfish.jpeg",            alt: "Dotwork jellyfish on the arm",                category: "blackwork"   },
  { src: "images/portfolio/claddagh-heart.jpeg",       alt: "Claddagh-style hands holding a heart",        category: "traditional" },
  { src: "images/portfolio/electric-guitar.jpeg",      alt: "Red electric guitar",                         category: "custom"      },
  { src: "images/portfolio/skull-moth.jpeg",           alt: "Moth with a skull thorax",                    category: "blackwork"   },
  { src: "images/portfolio/fan-flowers.jpeg",          alt: "Folding fan with flowers",                    category: "traditional" },
  { src: "images/portfolio/eye-pyramid-hand.jpeg",     alt: "Hand holding an all-seeing-eye pyramid",      category: "custom"      },
  { src: "images/portfolio/back-floral-1.jpeg",        alt: "Floral filigree on the shoulder blade",       category: "traditional" },
  { src: "images/portfolio/back-floral-2.jpeg",        alt: "Floral filigree on both shoulder blades",     category: "traditional" },
  { src: "images/portfolio/chain-flail-flowers.jpeg",  alt: "Chain and flail with flowers on the forearm", category: "traditional" },

  { src: "images/portfolio/greek-goddess-statue.jpeg",      alt: "Greek goddess statue figure with torch and axe", category: "blackwork"   },
  { src: "images/portfolio/eagle-wings.jpeg",                alt: "Eagle with wings spread",                        category: "blackwork"   },
  { src: "images/portfolio/pitbull-portrait.jpeg",           alt: "Pitbull portrait with collar tag",               category: "portrait"    },
  { src: "images/portfolio/lily-flowers-shoulder.jpeg",       alt: "Lily flowers on the shoulder",                   category: "blackwork"   },
  { src: "images/portfolio/sheep-skull-lettering.jpeg",       alt: "Sheep skull with lettering, 'even the iron still fears the rot'", category: "custom" },
  { src: "images/portfolio/bullets-hooks-blood.jpeg",         alt: "Bullets, fish hooks, and blood drops",           category: "traditional" },
  { src: "images/portfolio/dagger.jpeg",                      alt: "Ornate dagger",                                  category: "blackwork"   },
  { src: "images/portfolio/peony-tribal.jpeg",                alt: "Peony flower with tribal accent",                category: "blackwork"   },
  { src: "images/portfolio/valkyrie.jpeg",                    alt: "Valkyrie warrior in color",                      category: "custom"      },
  { src: "images/portfolio/sun-face-heart-eyes.jpeg",         alt: "Sun face with heart-shaped eyes",                category: "blackwork"   },
  { src: "images/portfolio/sun-and-moon-matching.jpeg",       alt: "Matching sun and moon tattoos on two people",    category: "custom"      },
  { src: "images/portfolio/hand-rainbow-torch-dagger.jpeg",   alt: "Hand holding a rainbow torch over a dagger",     category: "custom"      },
  { src: "images/portfolio/tribal-abstract-drip.jpeg",        alt: "Abstract tribal dripping shape",                 category: "blackwork"   },
  { src: "images/portfolio/snoopy-skateboard.jpeg",           alt: "Snoopy riding a skateboard",                     category: "custom"      },

  { src: "images/portfolio/owl-traditional.jpg",               alt: "Owl perched on a branch",                       category: "blackwork"   },
  { src: "images/portfolio/woman-turban-rose.jpeg",             alt: "Woman in a turban with a rose",                 category: "blackwork"   },
  { src: "images/portfolio/spiked-chain-flowers-1.jpeg",        alt: "Spiked ball, chain, and flowers",               category: "blackwork"   },
  { src: "images/portfolio/spiked-chain-flowers-2.jpeg",        alt: "Spiked ball, chain, and flowers, second view",  category: "blackwork"   },
  { src: "images/portfolio/the-end-heart-faces.jpeg",           alt: "Two faces in a heart, 'The End'",               category: "custom"      },
  { src: "images/portfolio/scorpion-large.jpeg",                alt: "Large scorpion on the forearm",                 category: "blackwork"   },
  { src: "images/portfolio/heart-face-daggers.jpeg",            alt: "Heart face pierced with three daggers",         category: "custom"      },
];


// ─── FLASH PHOTOS ─────────────────────────────────────────────
// Edit this array — one object per flash design.

const flashPhotos = [
  { src: "images/flash/flash-sheet-classics.jpeg", alt: "Flash sheet: rose, swallow, two butterflies, snake, and heart with flower" },
  { src: "images/flash/flash-sheet-pierrot-gothic.jpeg", alt: "Flash sheet: pierrot clown, woman in spiderweb shawl, gravestone, love potion bottle" },
  { src: "images/flash/flash-sheet-moon-swallow-rose.jpeg", alt: "Flash sheet: moon smoking a cigarette, woman with swallow, rose, lips with clover, butterfly, masks" },
  { src: "images/flash/flash-sheet-ma-cherie.jpeg", alt: "Flash sheet: 'Ma Cherie' lips, fan lady, cat in beret, rose, hands holding heart, beret woman" },
  { src: "images/flash/flash-sheet-nude-skull-scorpion.jpg", alt: "Flash stencil: scorpion, rose with heart, nude woman with skull" },
  { src: "images/flash/flash-sheet-panther-rose-scorpion.jpeg", alt: "Flash sheet: triple-face panther, rose with heart, scorpion, fan with swallow, nude woman with skull" },
  { src: "images/flash/flash-sheet-butterflies-fairy-frog.jpeg", alt: "Flash sheet: butterfly, fairy woman, frog on a lotus, hand with flower, dragonfly" },
  { src: "images/flash/flash-sheet-sacred-heart-gothic.jpeg", alt: "Flash stencil: sacred heart, skull with bat wings, 'till death' lettering, flower vine, Madonna and child" },
  { src: "images/flash/flash-sheet-pinup-tulips-hearts.jpeg", alt: "Flash stencil: nude pin-up with tulips, hearts banner 'with love', rose, woman's face with butterfly" },
  { src: "images/flash/flash-sheet-boot-dogs-cat.jpeg", alt: "Flash sheet: boot with cat, dog in flat cap, woman with cat, dog holding a heart" },
  { src: "images/flash/flash-sheet-grim-reaper-dance.jpeg", alt: "Flash sheet: grim reaper dancing with a woman, hand with eye-flowers, moth, bat" },
  { src: "images/flash/flash-sheet-devil-snake-dance.jpg", alt: "Flash sheet: woman with devil-mask split face, flaming skull, snake with flowers, devil dancing with a woman" },
];


/* ── Pagination state ─────────────────────────────────────── */
const PORTFOLIO_PAGE_SIZE = 12;
const FLASH_PAGE_SIZE = 8;

let currentFilter = 'all';
let portfolioVisible = PORTFOLIO_PAGE_SIZE;
let flashVisible = FLASH_PAGE_SIZE;


/* ── Build Gallery ─────────────────────────────────────────── */
function renderGallery() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  gallery.innerHTML = '';

  const filtered = portfolioPhotos.filter(
    photo => photo.src && (currentFilter === 'all' || photo.category === currentFilter)
  );
  const toShow = filtered.slice(0, portfolioVisible);

  toShow.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = photo.category;

    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
      <div class="gallery-overlay"><span>${photo.category}</span></div>
    `;
    item.addEventListener('click', () => openLightbox(photo.src, photo.alt));
    gallery.appendChild(item);
  });

  const loadMoreBtn = document.getElementById('galleryLoadMore');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = portfolioVisible < filtered.length ? '' : 'none';
  }
}

function buildGallery() {
  renderGallery();
}


/* ── Build Flash Grid ─────────────────────────────────────── */
function renderFlash() {
  const grid = document.getElementById('flashGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const toShow = flashPhotos.slice(0, flashVisible);

  toShow.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'flash-item';

    if (photo.src) {
      item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;
      item.addEventListener('click', () => openLightbox(photo.src, photo.alt));
    } else {
      item.classList.add('no-img');
      item.innerHTML = `
        <div class="ph-icon">✦</div>
        <div class="ph-label">Flash</div>
      `;
    }
    grid.appendChild(item);
  });

  const loadMoreBtn = document.getElementById('flashLoadMore');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = flashVisible < flashPhotos.length ? '' : 'none';
  }
}

function buildFlash() {
  renderFlash();
}


/* ── Load More buttons ───────────────────────────────────── */
function initLoadMore() {
  const galleryBtn = document.getElementById('galleryLoadMore');
  if (galleryBtn) {
    galleryBtn.addEventListener('click', () => {
      portfolioVisible += PORTFOLIO_PAGE_SIZE;
      renderGallery();
    });
  }

  const flashBtn = document.getElementById('flashLoadMore');
  if (flashBtn) {
    flashBtn.addEventListener('click', () => {
      flashVisible += FLASH_PAGE_SIZE;
      renderFlash();
    });
  }
}


/* ── Gallery Filter ───────────────────────────────────────── */
function initFilter() {
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = btn.dataset.filter;
      portfolioVisible = PORTFOLIO_PAGE_SIZE;
      renderGallery();
    });
  });
}


/* ── Lightbox ─────────────────────────────────────────────── */
let lightbox = null;

function openLightbox(src, alt) {
  if (!src || !lightbox) return;
  lightbox.querySelector('img').src  = src;
  lightbox.querySelector('img').alt  = alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  // Clear src so old image doesn't flash on next open
  setTimeout(() => { lightbox.querySelector('img').src = ''; }, 300);
}

function initLightbox() {
  lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<button class="lightbox-close" aria-label="Close">×</button><img src="" alt="">`;
  document.body.appendChild(lightbox);

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}


/* ── Nav ──────────────────────────────────────────────────── */
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!nav || !toggle || !links) return;

  // Add .scrolled class for border highlight
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    links.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


/* ── About Slideshow ──────────────────────────────────────── */
function initAboutSlideshow() {
  const slides = document.querySelectorAll('.about-slideshow .slide');
  if (slides.length < 2) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000); // swap every 4 seconds
}


/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  buildFlash();
  initFilter();
  initLoadMore();
  initLightbox();
  initNav();
  initAboutSlideshow();
});
