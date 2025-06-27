// Loader (optionnel si tu veux le garder)
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1000);
});

// Curseur personnalisé
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

// Scroll vers la section suivante
document.querySelector('.scroll-indicator')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#intro-home');
  if (target) {
    lenis.scrollTo(target);
  }
});


document.getElementById('scrollDown')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('.intro-home'); // ou l’ID réel de ta 1ère vraie section
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

let selection = Splitting()

gsap.registerPlugin(ScrollTrigger)

selection.forEach((split, index) => {
  gsap.from(split.words, {
    color: "#dec449",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".intro-text",
      scrub: true,
    }
  });
});

selection.forEach((split, index) => {
  gsap.from(split.words, {
    color: "#dec449",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".intro-text_customer",
      scrub: true,
    }
  });
});

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


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const contents = gsap.utils.toArray(".content");
  const texts = gsap.utils.toArray(".text");
  const imageWrappers = gsap.utils.toArray(".img-wrapper");

  gsap.set(".content:first-child .text", { y: -50 });

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      start: "top top",
      end: "+=${contents.length * 50}%",
      scrub: 3,
    },
  });

  tl.to(imageWrappers[0], {rotate: -3}, 0);

  contents.forEach((_, i) => {
    if (i === contents.length - 1) return;

    tl.to(texts[i], {opacity: 0, duration: 2}, "+=0.5")
    .to(
      imageWrappers[i + 1],
      {
        scale: 1,
        duration: 2,
        y: (i + 1) * 5,
        x: (i + 1) * -5,
        opacity: 1,
        rotate: (i + 1) * 3 * (i % 2 === 0 ? 1 : -1),
      },
      "<"
    )
    .to(texts[i + 1], {opacity: 1, y: -50, duration: 2}, "<+=0.5");
  });
});




