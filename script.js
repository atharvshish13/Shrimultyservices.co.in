// ============ PRELOADER ============
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 1800);
  }
});

// ============ SCROLL PROGRESS ============
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });
}

// ============ HEADER SCROLL EFFECT ============
const header = document.getElementById('siteHeader');
let lastScroll = 0;
if (header) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

// ============ MOBILE NAV TOGGLE ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ============ THEME TOGGLE ============
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    localStorage.setItem('theme', newTheme);
  });
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }
}

// ============ REVEAL ON SCROLL (Intersection Observer) ============
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
  });
  revealElements.forEach(el => observer.observe(el));
} else {
  // Fallback: show all
  revealElements.forEach(el => el.classList.add('in-view'));
}

// ============ TYPEWRITER EFFECT ============
const typewriterElement = document.getElementById('typewriter');
if (typewriterElement) {
  const phrases = [
    'Vehicles',
    'Hoardings',
    'Shops',
    'Agro-events',
    'Brands'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 80;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      speed = 40;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      speed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      speed = 1500; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400; // pause before typing next
    }
    setTimeout(typeEffect, speed);
  }
  typeEffect();
}

// ============ LANGUAGE SWITCHER ============
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

// Translation data
const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_clients: 'Clients',
    nav_locations: 'Locations',
    nav_contact: 'Contact',
    hero_tag: '14+ Years · Central India',
    hero_title: 'We Provide the Best<br><span class="accent">Business Solutions</span>',
    hero_sub: 'From highway hoardings to branded vans rolling through farm villages — Shri Multy Services builds the visibility your brand needs, on every road and at every event across six states.',
    cta_quote: 'Get a Quote',
    cta_contact: 'Contact Us',
    cta_brochure: 'Download Brochure'
  },
  hi: {
    nav_home: 'होम',
    nav_about: 'हमारे बारे में',
    nav_services: 'सेवाएँ',
    nav_gallery: 'गैलरी',
    nav_clients: 'ग्राहक',
    nav_locations: 'स्थान',
    nav_contact: 'संपर्क',
    hero_tag: '14+ साल · मध्य भारत',
    hero_title: 'हम सर्वोत्तम<br><span class="accent">व्यावसायिक समाधान</span> प्रदान करते हैं',
    hero_sub: 'हाईवे होर्डिंग से लेकर किसान गांवों में चलने वाली ब्रांडेड वैन तक — श्री मल्टी सर्विसेज आपके ब्रांड को छह राज्यों में हर सड़क और हर इवेंट पर दृश्यता प्रदान करती है।',
    cta_quote: 'कोटेशन प्राप्त करें',
    cta_contact: 'संपर्क करें',
    cta_brochure: 'ब्रोशर डाउनलोड करें'
  },
  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_about: 'आमच्याबद्दल',
    nav_services: 'सेवा',
    nav_gallery: 'गॅलरी',
    nav_clients: 'ग्राहक',
    nav_locations: 'स्थाने',
    nav_contact: 'संपर्क',
    hero_tag: '१४+ वर्षे · मध्य भारत',
    hero_title: 'आम्ही सर्वोत्तम<br><span class="accent">व्यवसायिक उपाय</span> पुरवतो',
    hero_sub: 'हायवे होर्डिंगपासून शेतकरी गावांमध्ये चालणाऱ्या ब्रँडेड वॅन्सपर्यंत — श्री मल्टी सर्विसेज आपल्या ब्रँडला सहा राज्यांतील प्रत्येक रस्ता आणि प्रत्येक इव्हेंटवर दृश्यता निर्माण करते.',
    cta_quote: 'कोटेशन मिळवा',
    cta_contact: 'संपर्क करा',
    cta_brochure: 'ब्रोशर डाउनलोड करा'
  }
};

function setLanguage(lang) {
  currentLang = lang;
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Preserve HTML inside the element (for hero_title with <span>)
      el.innerHTML = translations[lang][key];
    }
  });
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
}

if (langButtons.length > 0) {
  // Load saved language
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  } else {
    setLanguage('en');
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && translations[lang]) {
        setLanguage(lang);
      }
    });
  });
}