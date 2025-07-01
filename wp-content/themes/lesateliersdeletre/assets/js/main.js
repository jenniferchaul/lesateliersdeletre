// ---------------------------------------------
// 1. Loader (animation d’intro)
// ---------------------------------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1000);
});

// ---------------------------------------------
// 2. Curseur personnalisé
// ---------------------------------------------
const cursor = document.getElementById("cursor-dot");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;
  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ---------------------------------------------
// 3. Scroll vers la section intro-home
// ---------------------------------------------
document.getElementById('scrollDown')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#intro-home');
  if (target && typeof lenis !== 'undefined') {
    lenis.scrollTo(target);
  } else {
    target?.scrollIntoView({ behavior: 'smooth' });
  }
});

// ---------------------------------------------
// 4. Animation des textes (Splitting.js)
// ---------------------------------------------

let selection = Splitting()

gsap.registerPlugin(ScrollTrigger)

selection.forEach((split) => {
  gsap.from(split.words, {
    color: "#dec449",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".intro-text",
      scrub: true,
    }
  });
});

selection.forEach((split) => {
  gsap.from(split.words, {
    color: "#dec449",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".intro-text_customer",
      scrub: true,
    }
  });
});

// ---------------------------------------------
// 5. Animation photo art-thérapeute
// ---------------------------------------------

gsap.from(".photo-art-therapeute", {
  scale: 0.8,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".photo-art-therapeute",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// ---------------------------------------------
// 6. STACKING EFFECT (effet d’empilement)
// ---------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray(".stack-card");

  cards.forEach((card, i) => {
    const direction = i % 2 === 0 ? -1 : 1; // gauche/droite
    gsap.fromTo(card,
      {
        y: i * 10,
        x: direction * 30,
        rotation: direction * 5,
        opacity: 0,
        zIndex: cards.length - i
      },
      {
        y: 0,
        x: 0,
        rotation: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".stack-section",
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: ".stack-wrapper",
          pinSpacing: true
        }
      }
    );
  });

  const contents = gsap.utils.toArray(".outils .content");
  const texts = gsap.utils.toArray(".outils .text");
  const imageWrappers = gsap.utils.toArray(".outils .img-wrapper");

  //gsap.set(".content:first-child .text", { y: -50 });

  //const tl = gsap.timeline({
  //  defaults: { ease: "power2.out" },
  //  scrollTrigger: {
  //    trigger: ".outils",
  //    pin: ".container",
  //    start: "top top",
  //    end: "+=${contents.length * 50}%",
  //    scrub: 3,
  //  },
  //});

  // Timeline avec scrollTrigger
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: ".outils",
      pin: true,
      start: "top top",
      end: `+=${contents.length * 50}%`,
      scrub: 3,
    },
  });

  // Masquer tous les textes et images sauf le premier
  gsap.set(texts, { opacity: 0 });
  gsap.set(imageWrappers, { opacity: 0, scale: 0.9 });

  gsap.set(texts[0], { opacity: 1 });
  gsap.set(imageWrappers[0], { opacity: 1, scale: 1 });

  // Z-index pour empilement visuel
  //gsap.set(contents, { zIndex: 0 });
  //gsap.set(contents[0], { zIndex: contents.length });


  tl.to(imageWrappers[0], { rotate: -3 }, 0);

  contents.forEach((_, i) => {
    if (i === contents.length - 1) return;
    
    tl.to(texts[i], { opacity: 0, duration: 1 }, "+=0.5")
      .to(imageWrappers[i], { opacity: 1, scale: 0.95, duration: 1 }, "<")
      .to(contents[i + 1], { zIndex: contents.length + i + 1 }, "<")
      .to(imageWrappers[i + 1], {
        scale: 1,
        duration: 2,
        y: (i + 1) * 5,
        x: (i + 1) * -5,
        opacity: 1,
        rotate: (i + 1) * 3 * (i % 2 === 0 ? 1 : -1),
      }, "<")
      .to(texts[i + 1], { opacity: 1, y: -50, duration: 2 }, "<+=0.5");
  });
});

window.addEventListener('scroll', () => {
  const bg = document.querySelector('.background');
  if (!bg) return;

  const scrollY = window.scrollY || window.pageYOffset;
  const speed = 0.05; // ← effet léger, fluide
  bg.style.transform = `translateY(${scrollY * speed}px)`;
});


document.addEventListener('DOMContentLoaded', () => {
  const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    rewind: true,
    duration: 0.6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  const slides = document.querySelectorAll('.tube-slide');

  function applyTransforms() {
    const center = window.innerWidth / 2;
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const offset = (slideCenter - center) / center;

      const rotateY = -offset * 30;
      const translateY = Math.pow(offset, 2) * 60 * Math.sign(offset);
      const scale = 1 - Math.min(Math.abs(offset) * 0.25, 0.25);
      const bright = 1 - Math.min(Math.abs(offset) * 0.35, 0.35);

      slide.style.transform = `translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`;
      slide.style.filter = `brightness(${bright})`;
    });
  }

  applyTransforms();
  window.addEventListener('resize', applyTransforms);
  document.querySelector('.glider').addEventListener('scroll', () => {
    requestAnimationFrame(applyTransforms);
  });

  // Auto scroll simulé
  let autoScroll = setInterval(() => {
    glider.scrollItem('next');
  }, 4000);

  document.querySelector('.glider').addEventListener('mousedown', () => clearInterval(autoScroll));
  document.querySelector('.glider').addEventListener('mouseup', () => {
    autoScroll = setInterval(() => {
      glider.scrollItem('next');
    }, 4000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new Splide('#avisSplide', {
    type: 'loop',
    perPage: 2,
    gap: '2rem',
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    breakpoints: {
      768: { perPage: 1 },
    },
    arrows: false,
    pagination: true,
  }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('#tubeSplide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '2rem',
    speed: 1000,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: false,
    drag: true,
    wheel: true,
    breakpoints: {
      768: { perPage: 1 },
      1024: { perPage: 2 }
    }
  });

  // effet incurvé
  const ROT = 60;
  const OFF = 80;
  const SCALE_MIN = 0.6;

  function updateTube() {
    const curr = splide.index;
    const len = splide.length;

    splide.Components.Elements.list.childNodes.forEach(slide => {
      if (!slide.classList) return;
      const sIndex = parseInt(slide.getAttribute('data-splide-slide-index'));
      let diff = sIndex - curr;
      if (diff > len / 2) diff -= len;
      if (diff < -len / 2) diff += len;

      const p = diff;
      const rotate = p * ROT;
      const translateY = OFF * Math.pow(p, 2) * Math.sign(p);
      const scale = 1 - Math.min(Math.abs(p) * (1 - SCALE_MIN), 0.25);
      const bright = 1 - Math.min(Math.abs(p) * 0.35, 0.35);

      slide.style.transform = `translateY(${translateY}px) rotateY(${-rotate}deg) scale(${scale})`;
      slide.style.filter = `brightness(${bright})`;
    });
  }

  splide.on('mounted move', updateTube);
  splide.mount();
});
