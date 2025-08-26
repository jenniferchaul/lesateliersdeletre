// --------------------------------------------------
// main.js — version sans Glider (Splide only)
// --------------------------------------------------


if (!document.getElementById("loader")) {
  document.body.classList.add("loaded");
}


// 1. Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const circle = loader.querySelector(".breathing-effect");

  window.scrollTo(0, 0); // sécurité

  setTimeout(() => {
    circle?.classList.add("transition-out");

    // Pendant la disparition du cercle, on prépare l’accueil
    setTimeout(() => {
      loader.classList.add("fade-out");
      document.body.classList.add("loaded");
    }, 50); // un poil avant la fin du fade-out du cercle
  }, 1000);
});


const cursorBrush = document.getElementById("cursor-brush");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

const offsetX = 20;
const offsetY = 12;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateBrush() {
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;

  const dx = mouseX - currentX;
  const dy = mouseY - currentY;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  const brushX = currentX + offsetX;
  const brushY = currentY + offsetY;

  // On place le pinceau avec rotation
  cursorBrush.style.left = `${brushX}px`;
  cursorBrush.style.top = `${brushY}px`;
  cursorBrush.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  // Ajout de la trace au bout du pinceau
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > 1) {
    // On projette la trace un peu plus loin dans la direction du pinceau
    const traceOffset = 5; // ← ajuste ici pour que ça tombe à la bonne "pointe"
    const backOffset = 5;

    const traceOffsetBack = 10; // ← AJUSTE CETTE VALEUR
    const traceX = brushX - Math.cos(angle * Math.PI / 180) * traceOffsetBack;
    const traceY = brushY - Math.sin(angle * Math.PI / 180) * traceOffsetBack;

    const trace = document.createElement("div");
    trace.className = "brush-trace";
    trace.style.left = `${traceX}px`;
    trace.style.top = `${traceY}px`;
    document.body.appendChild(trace);

    setTimeout(() => trace.remove(), 500);
  }

  requestAnimationFrame(animateBrush);
}

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  animateBrush();
}


// 3. Scroll vers #intro-home
document.getElementById('scrollDown')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#intro-home');
  if (!target) return;
  typeof lenis !== 'undefined'
    ? lenis.scrollTo(target)
    : target.scrollIntoView({ behavior: 'smooth' });
});

// 4. Splitting + GSAP animation
gsap.registerPlugin(ScrollTrigger);
const split = Splitting();

split.forEach(s => {
  const words = s.words;
  const chars = s.chars;

  ScrollTrigger.create({
    trigger: s.el,
    start: 'top 80%',
    end: 'top 30%',
    scrub: true,
    onEnter: () => {
      gsap.fromTo(words,
        { color: '#dec449' },
        {
          color: '#fff',
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
          overwrite: true
        });
    },
    onLeaveBack: () => {
      gsap.set(words, { color: '#dec449' });
    }
  });

  chars.forEach(char => {
    char.style.display = 'inline-block';
    char.addEventListener('mouseenter', () => {
      gsap.fromTo(char,
        { y: 0, rotation: 0 },
        {
          y: -10, rotation: 8,
          duration: 0.25,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1
        });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    // Afficher le bouton au scroll
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    // Remonter la page en douceur au clic
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

// 5. Animation photo art-thérapeute
gsap.from('.photo-art-therapeute', {
  scale: 0.8,
  opacity: 0,
  duration: 1.6,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.photo-art-therapeute',
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});

// 6. Stacking effect (section .outils)
document.addEventListener('DOMContentLoaded', () => {

  const cards = gsap.utils.toArray('.stack-card');
  const content = gsap.utils.toArray('.outils .content');
  const texts = gsap.utils.toArray('.outils .text-wrapper');
  const imgs = gsap.utils.toArray('.outils .img-wrapper');

  // Animation d’empilement des cartes (desktop et mobile)
  cards.forEach((c, i) => {
    const dir = i % 2 ? 1 : -1;
    gsap.fromTo(c,
      { y: i * 10, x: dir * 30, rotation: dir * 5, opacity: 0, zIndex: cards.length - i },
      {
        y: 0, x: 0, rotation: 0, opacity: 1,
        scrollTrigger: {
          trigger: '.stack-section',
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: '.stack-wrapper',
          pinSpacing: true
        }
      });
  });

  // Empilement progressif : texte + image
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.outils',
      pin: true,
      start: 'top top',
      end: `+=${content.length * 50}%`,
      scrub: 3,
    }
  });

  gsap.set(texts, { opacity: 0 });
  gsap.set(imgs, { opacity: 0, scale: 0.9 });
  gsap.set(texts[0], { opacity: 1 });
  gsap.set(imgs[0], { opacity: 1, scale: 1 });

  tl.to(imgs[0], { rotate: -3 }, 0);

  content.forEach((_, i) => {
    if (i === content.length - 1) return;
    tl.to(texts[i], { opacity: 0, duration: 1 }, '+=0.5')
      .to(imgs[i], { opacity: 1, scale: 0.95, duration: 1 }, '<')
      .to(content[i + 1], { zIndex: content.length + i + 1 }, '<')
      .to(imgs[i + 1], {
        scale: 1,
        duration: 2,
        y: (i + 1) * 5,
        x: (i + 1) * -5,
        opacity: 1,
        rotate: (i + 1) * 3 * (i % 2 ? -1 : 1)
      }, '<')
      .to(texts[i + 1], { opacity: 1, y: -50, duration: 2 }, '<+=0.5');
  });
  

  // Pointer events pour chaque .content actif
  content.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => { item.style.pointerEvents = 'auto'; },
      onLeave: () => { item.style.pointerEvents = 'none'; },
      onEnterBack: () => { item.style.pointerEvents = 'auto'; },
      onLeaveBack: () => { item.style.pointerEvents = 'none'; }
    });
  });

  const firstImgWrapper = document.querySelector('.outils .content:first-child .img-wrapper');
  if (firstImgWrapper) {
    firstImgWrapper.style.pointerEvents = 'auto';
  }
});


// 7. Parallaxe légère du fond
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.background');
  if (bg) bg.style.transform = `translateY(${(window.pageYOffset || 0) * 0.05}px)`;
});

// 8. Splide — avis clients
document.addEventListener('DOMContentLoaded', () => {
  new Splide('#avisSplide', {
    type: 'loop',
    perPage: 4, // ✅ 3 cards visibles max
    gap: '0.5rem',
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    arrows: true, // ✅ On active bien les flèches
    pagination: true,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 1 }
    }
  }).mount();
});




// 10. Fade-in section Contact
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.contact-wrapper', {
    y: 60,
    opacity: 0,
    duration: 1.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-intro',
      start: 'top 80%',
    },
  });
});


// 11. Gestion du son (play / pause)  -----------------------------
//document.addEventListener('DOMContentLoaded', () => {
//  const btn = document.getElementById('soundToggle');
//  if (!btn) return;
//
//  const AUDIO_SRC = laeTheme.uri + '/assets/audio/sound.mp3';   //  <-- chemin fiable
//  const VOLUME = 0.4;
//  const KEY = 'lae_music_on';
//
//  /* instance audio unique */
//  const audio = new Audio(AUDIO_SRC);
//  audio.loop = true;
//  audio.volume = VOLUME;
//
//  let isPlaying = false;
//
//  /* ----------------- helpers */
//  function play() { audio.play().catch(() => {/* ignore */ }); }
//  function pause() { audio.pause(); }
//  function updateUI() {
//    btn.classList.toggle('muted', !isPlaying);           // pour l’anim des ondes
//  }
//
//  /* ----------------- init */
//  updateUI();
//  if (isPlaying) play();
//
//  /* ----------------- toggle */
//  btn.addEventListener('click', () => {
//    isPlaying = !isPlaying;
//    localStorage.setItem(KEY, isPlaying ? '1' : '0');
//    updateUI();
//    isPlaying ? play() : pause();
//  });
//});

// --------------------------------------------------
// AUDIO GLOBAL DIRECT EN JS (persistant entre pages)
// --------------------------------------------------

(function () {
  const AUDIO_SRC = laeTheme.uri + '/assets/audio/sound.mp3';
  const VOLUME = 0.4;
  const KEY = 'lae_music_on';

  if (window.lae_audio_initialized) return; // éviter double injection
  window.lae_audio_initialized = true;

  const audio = new Audio(AUDIO_SRC);
  audio.loop = true;
  audio.volume = VOLUME;
  document.laeAudio = audio; // optionnel, pour débug dans la console

  let isPlaying = localStorage.getItem(KEY) === '1';

  function updateUI(btn) {
    btn?.classList.toggle('muted', !isPlaying);
  }

  function playAudio() {
    audio.play().catch(() => {});
  }

  function pauseAudio() {
    audio.pause();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('soundToggle');

    updateUI(btn);

    // Premier clic n'importe où : lance le son si activé
    document.addEventListener('click', () => {
      if (isPlaying) playAudio();
    }, { once: true });

    // Toggle bouton
    if (btn) {
      btn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        localStorage.setItem(KEY, isPlaying ? '1' : '0');
        updateUI(btn);
        isPlaying ? playAudio() : pauseAudio();
      });
    }
  });
})();

//

const audio = document.getElementById('background-audio');

// Stocker la position avant de quitter la page
window.addEventListener('beforeunload', () => {
  if (!audio.paused) {
    sessionStorage.setItem('audioPosition', audio.currentTime);
    sessionStorage.setItem('audioIsPlaying', 'true');
  } else {
    sessionStorage.setItem('audioIsPlaying', 'false');
  }
});

// Au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  const savedTime = sessionStorage.getItem('audioPosition');
  const wasPlaying = sessionStorage.getItem('audioIsPlaying') === 'true';

  if (savedTime && wasPlaying) {
    audio.currentTime = parseFloat(savedTime);
    audio.play().catch(() => {
      // bloqué par navigateur tant que pas de clic
    });
  }
});

// Bouton on/off
const soundToggle = document.getElementById('soundToggle');
if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      soundToggle.classList.remove('muted');
    } else {
      audio.pause();
      soundToggle.classList.add('muted');
    }
  });
}




/* ==============================================================
   MENU BURGER : open / close + verrouillage scroll
   ============================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const menu = document.getElementById('siteMenu');
  const openBtn = document.querySelector('.menu-toggle');
  const closeBtn = menu.querySelector('.menu-close');
  const links = menu.querySelectorAll('a');           // fermer aussi sur clic lien

  if (!menu || !openBtn || !closeBtn) return;

  const openMenu = () => {
    menu.classList.add('open');
    document.body.classList.add('menu-open');
    menu.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menu.setAttribute('aria-hidden', 'true');
  };

  /* événements */
  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  links.forEach(l => l.addEventListener('click', closeMenu));

  /* ESC clavier */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,     // durée par défaut
    once: true,         // animation ne se joue qu'une fois
    easing: 'ease-in-out',
    delay: 0,           // délai par défaut
  });
});


// 5. Transition blocs Intro ➔ Catherine (fix pointerEvents + retour)
gsap.set("#intro-part", {
  opacity: 1,
  pointerEvents: "auto",
  zIndex: 2
});

gsap.set("#catherine-part", {
  opacity: 0,
  pointerEvents: "none",
  zIndex: 1
});

const introTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro-home",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
  }
});

introTL.to("#intro-part", {
  opacity: 0,
  ease: "power2.out",
  duration: 1,
});

introTL.to("#catherine-part", {
  opacity: 1,
  ease: "power2.out",
  duration: 1,
}, "<+0.1");

ScrollTrigger.create({
  trigger: "#intro-home",
  start: "top top",
  end: "+=200%",
  onLeaveBack: () => {
    gsap.set("#intro-part", {
      pointerEvents: "auto",
      zIndex: 2
    });
    gsap.set("#catherine-part", {
      pointerEvents: "none",
      zIndex: 1
    });
  },
  onEnter: () => {
    gsap.set("#intro-part", {
      pointerEvents: "none",
      zIndex: 1
    });
    gsap.set("#catherine-part", {
      pointerEvents: "auto",
      zIndex: 2
    });
  }
});

document.querySelectorAll('.flip-arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    const card = e.target.closest('.stage-card');
    card.classList.toggle('flipped');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.close-arrow').forEach(close => {
    close.addEventListener('click', () => {
      const card = close.closest('.stage-card');
      card.classList.remove('flipped');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
const blocks = document.querySelectorAll('.art-therapie-section .text-block');
blocks.forEach((block, index) => {
  gsap.from(block, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out',
    delay: index === 0 ? 0.6 : 0,
    scrollTrigger: {
      trigger: block,
      start: index === 0 ? 'top 90%' : 'top 85%',
      toggleActions: 'play none none none',
      once: true
    }
  });
});
});

// Animation GSAP du titre de l'Art-thérapie
gsap.from('.slide-in-title', {
  x: -100, // tu peux mettre +100 pour une entrée par la droite
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.slide-in-title',
    start: 'top 75%',
    toggleActions: 'play none none none',
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.outil-card');

  gsap.registerPlugin(ScrollTrigger);

  cards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
        scrub: false
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bubble-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const card = this.closest(".stage-bubble");
      const detail = card.querySelector(".stage-detail");
      const isOpen = detail.classList.contains("open");

      if (isOpen) {
        // Fermer si déjà ouvert
        detail.classList.remove("open");
        this.textContent = "En savoir plus";
      } else {
        // Fermer toutes les autres (optionnel si tu veux comportement exclusif)
        document.querySelectorAll(".stage-detail.open").forEach(el => {
          el.classList.remove("open");
          const otherLink = el.closest(".stage-bubble").querySelector(".bubble-link");
          if (otherLink) otherLink.textContent = "En savoir plus";
        });

        // Ouvrir la card actuelle
        detail.classList.add("open");
        this.textContent = "Réduire";
      }
    });
  });
});


gsap.utils.toArray('.img-scroll').forEach(img => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: img,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  // Animation commune à toutes les images
  tl.fromTo(
    img,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 10,
      ease: 'power2.out',
    }
  );

  // Si l’image a la classe .img-rotate, on ajoute une rotation
  if (img.classList.contains('img-rotate')) {
    tl.to(img, {
      rotation: 360,
      duration: 30,
      ease: 'power1.inOut',
    }, "<"); // "<" pour lancer en même temps que l’apparition
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;

  if (hash && hash.startsWith("#stage-")) {
    const stage = document.querySelector(hash);
    if (stage) {
      const detail = stage.querySelector(".stage-detail");
      const link = stage.querySelector(".bubble-link");

      if (detail && link && !detail.classList.contains("open")) {
        // Simule un clic sur "En savoir plus"
        detail.classList.add("open");
        link.textContent = "Réduire";

        // Scroll vers l'élément
        stage.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }
});



