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
  document.querySelector('#intro-home')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollDown')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector('#intro-home'); // ou l’ID réel de ta 1ère vraie section
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

let selection = Splitting()

gsap.registerPlugin(ScrollTrigger)  

gsap.from(selection[0].chars, {
  color: "rgb(13, ,13, 13, 13)",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".text-intro",
    scrub: true,
  }
}) 

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
