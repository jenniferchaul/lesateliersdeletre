// --------------------------------------------------
// main.js — version sans Glider (Splide only)
// --------------------------------------------------

// 1. Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 1000);
});

// 2. Curseur personnalisé ─── desktop only ──────────────────────
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  /* souris présente ⇒ on garde le curseur doré animé */
  const cursor = document.getElementById('cursor-dot');
  let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  (function animateCursor() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    cursor.style.left = `${curX}px`;
    cursor.style.top = `${curY}px`;
    requestAnimationFrame(animateCursor);
  })();
} else {
  /* écran tactile ⇒ on masque complètement le dot */
  const cursor = document.getElementById('cursor-dot');
  if (cursor) cursor.style.display = 'none';
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
  const texts = gsap.utils.toArray('.outils .text');
  const imgs = gsap.utils.toArray('.outils .img-wrapper');

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

  // timeline de reveal
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
    perPage: 2,
    gap: '2rem',
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    breakpoints: { 768: { perPage: 1 } },
    arrows: false,
    pagination: true,
  }).mount();
});

// 9. Splide — galerie tube 3D
//cument.addEventListener('DOMContentLoaded', () => {
//const splide = new Splide('#tubeSplide', {
//  type: 'loop',
//  perPage: 3,
//  focus: 'center',
//  gap: '2rem',
//  speed: 1000,
//  autoplay: true,
//  interval: 4000,
//  pauseOnHover: true,
//  pauseOnFocus: true,
//  arrows: false,
//  pagination: false,
//  drag: true,
//  wheel: true,
//  breakpoints: {
//    768: { perPage: 1 },
//    1024: { perPage: 2 }
//  }
//});

// effet incurvé
//const ROT = 60;
//const OFF = 80;
//const SCALE_MIN = 0.6;
//
//function updateTube() {
//  const curr = splide.index;
//  const len = splide.length;
//
//  splide.Components.Elements.list.childNodes.forEach(slide => {
//    if (!slide.classList) return;
//    const sIndex = parseInt(slide.getAttribute('data-splide-slide-index'));
//    let diff = sIndex - curr;
//    if (diff > len / 2) diff -= len;
//    if (diff < -len / 2) diff += len;
//
//    const p = diff;
//    const rotate = p * ROT;
//    const translateY = OFF * Math.pow(p, 2) * Math.sign(p);
//    const scale = 1 - Math.min(Math.abs(p) * (1 - SCALE_MIN), 0.25);
//    const bright = 1 - Math.min(Math.abs(p) * 0.35, 0.35);
//
//    slide.style.transform = `translateY(${translateY}px) rotateY(${-rotate}deg) scale(${scale})`;
//    slide.style.filter = `brightness(${bright})`;
//  });
//}
//
//splide.on('mounted move', updateTube);
//splide.mount();
//;


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

//let xPos = 0;
//
//gsap.timeline()
//    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
//    .set('.img',  { // apply transform rotations to each image
//      rotateY: (i)=> i*-36,
//      transformOrigin: '50% 50% 500px',
//      z: -500,
//      backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)',
//      backgroundPosition:(i)=>getBgPos(i),
//      backfaceVisibility:'hidden'
//    })    
//    .from('.img', {
//      duration:1.5,
//      y:200,
//      opacity:0,
//      stagger:0.1,
//      ease:'expo'
//    })
//    .add(()=>{
//      $('.img').on('mouseenter', (e)=>{
//        let current = e.currentTarget;
//        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
//      })
//      $('.img').on('mouseleave', (e)=>{
//        gsap.to('.img', {opacity:1, ease:'power2.inOut'})
//      })
//    }, '-=0.5')
//
//$(window).on('mousedown touchstart', dragStart);
//$(window).on('mouseup touchend', dragEnd);
//      
//
//function dragStart(e){ 
//  if (e.touches) e.clientX = e.touches[0].clientX;
//  xPos = Math.round(e.clientX);
//  gsap.set('.ring', {cursor:'grabbing'})
//  $(window).on('mousemove touchmove', drag);
//}
//
//
//function drag(e){
//  if (e.touches) e.clientX = e.touches[0].clientX;    
//
//  gsap.to('.ring', {
//    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
//    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
//  });
//  
//  xPos = Math.round(e.clientX);
//}
//
//
//function dragEnd(e){
//  $(window).off('mousemove touchmove', drag);
//  gsap.set('.ring', {cursor:'grab'});
//}
//
//
//function getBgPos(i){ //returns the background-position string to create parallax movement in each image
//  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
//}

// 11. Gestion du son (play / pause)  -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('soundToggle');
  if (!btn) return;

  const AUDIO_SRC = laeTheme.uri + '/assets/audio/sound.mp3';   //  <-- chemin fiable
  const VOLUME = 0.4;
  const KEY = 'lae_music_on';

  /* instance audio unique */
  const audio = new Audio(AUDIO_SRC);
  audio.loop = true;
  audio.volume = VOLUME;

  let isPlaying = false;

  /* ----------------- helpers */
  function play() { audio.play().catch(() => {/* ignore */ }); }
  function pause() { audio.pause(); }
  function updateUI() {
    btn.classList.toggle('muted', !isPlaying);           // pour l’anim des ondes
  }

  /* ----------------- init */
  updateUI();
  if (isPlaying) play();

  /* ----------------- toggle */
  btn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    localStorage.setItem(KEY, isPlaying ? '1' : '0');
    updateUI();
    isPlaying ? play() : pause();
  });
});

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