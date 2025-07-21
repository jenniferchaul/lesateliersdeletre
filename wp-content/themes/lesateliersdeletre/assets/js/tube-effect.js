import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

(function () {
  /* === 1. CANVAS ============================================ */
  const canvas = document.getElementById('bg');
  if (!canvas) return;          // on quitte si aucun <canvas id="bg">

  /* === 2. RENDERER & CAMERA ================================= */
  const sizes = { w: window.innerWidth, h: window.innerHeight };

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(sizes.w, sizes.h);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, sizes.w / sizes.h, 0.1, 250);
  camera.position.set(0, 0, 50);
  scene.add(camera);

  window.addEventListener('resize', () => {
    sizes.w = window.innerWidth;
    sizes.h = window.innerHeight;
    camera.aspect = sizes.w / sizes.h;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.w, sizes.h);
  });

  /* === 3. PARTICULES : tube lumineux ======================== */
  const COUNT   = 6000;
  const sprite  = new THREE.TextureLoader().load(
    'https://threejs.org/examples/textures/sprites/circle.png'
  );
  const palette = [0xfaf3e0, 0xffe066, 0xffcc00, 0xffffff, 0xfcd440,];

  const positions = new Float32Array(COUNT * 3);
  const origins   = new Float32Array(COUNT * 3);
  const velocity  = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    const i3      = i * 3;
    const y       = (Math.random() - 0.5) * 150;
    const inTube  = Math.random() < 0.7;
    const angle   = Math.random() * Math.PI * 2;
    const radius  = inTube ? Math.random() * 10 + 3 : Math.random() * 40 + 18;

    positions[i3]     = origins[i3]     = Math.cos(angle) * radius;
    positions[i3 + 1] = origins[i3 + 1] = y;
    positions[i3 + 2] = origins[i3 + 2] = Math.sin(angle) * radius;

    const col = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
    colors[i3]     = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;
  }

  const gGeom = new THREE.BufferGeometry();
  gGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  gGeom.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const gMat = new THREE.PointsMaterial({
    map: sprite,
    size: 0.3,
    transparent: true,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    depthWrite: false,
  });

  const particles = new THREE.Points(gGeom, gMat);
  scene.add(particles);

  /* === 4. CARROUSEL 3D ====================================== */
  const cardGroup = new THREE.Group();
  cardGroup.visible = false;    // masqué avant que la section n’entre à l’écran
  scene.add(cardGroup);

  const cards      = [];
  const loader     = new THREE.TextureLoader();
  const imgHolder  = document.getElementById('tube-image-list');
  const imgUrls    = imgHolder ? JSON.parse(imgHolder.dataset.images) : [];
  const cardRadius = 30;

  imgUrls.forEach((url, i) => {
    loader.load(url, (tex) => {
      const mat  = new THREE.MeshBasicMaterial({
        map: tex,
         color: new THREE.Color(0xfff2cc),
        transparent: true,
        alphaTest: 0.1,
      });
      const geo = new THREE.PlaneGeometry(18, 13.5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData.baseAngle = (i / imgUrls.length) * Math.PI * 2;
      cardGroup.add(mesh);
      cards.push(mesh);
    });
  });

  /* === 4-bis. IntersectionObserver pour #carousel-section === */
  let cardGroupVisible = false;

  const carouselSection = document.getElementById('carousel-section');
  if (carouselSection) {
    const io = new IntersectionObserver(
      ([entry]) => {
        cardGroupVisible = entry.intersectionRatio >= 0.4; // ≥40 % visibles
      },
      { threshold: 0.4 }
    );
    io.observe(carouselSection);
  }

  /* === 5. RAYCASTER (effet de répulsion souris) ============== */
  const mouse = new THREE.Vector2(1e4, 1e4);
  window.addEventListener('mousemove', (e) => {
    mouse.x =  (e.clientX / sizes.w) * 2 - 1;
    mouse.y = -(e.clientY / sizes.h) * 2 + 1;
  });
  const ray      = new THREE.Raycaster();
  const tmp      = new THREE.Vector3();
  const repulseR = 32;

  /* === 6. BOUCLE D’ANIMATION ================================ */
  const clock = new THREE.Clock();

  function tick() {
    const dt = clock.getDelta();
    const t  = clock.getElapsedTime();

    /* --- tube lumineux --- */
    particles.rotation.y = t * 0.15;

    /* --- carrousel --- */
    cardGroup.visible = cardGroupVisible;
    if (cardGroupVisible) {
      const offset = t * 0.25;
      cards.forEach((card) => {
        const a = card.userData.baseAngle + offset;
        card.position.set(Math.cos(a) * cardRadius, 0, Math.sin(a) * cardRadius);
        card.lookAt(camera.position);
      });
    }

    /* --- mouvement des particules --- */
    ray.setFromCamera(mouse, camera);
    const mPos  = ray.ray.origin.clone().add(ray.ray.direction.clone().multiplyScalar(40));
    const posAr = gGeom.attributes.position.array;

    for (let i = 0; i < posAr.length; i += 3) {
      tmp.set(posAr[i], posAr[i + 1], posAr[i + 2]);

      velocity[i]     += (origins[i]     - tmp.x) * 0.02;
      velocity[i + 1] += (origins[i + 1] - tmp.y) * 0.02;
      velocity[i + 2] += (origins[i + 2] - tmp.z) * 0.02;

      const d = tmp.distanceTo(mPos);
      if (d < repulseR) {
        const f = (repulseR - d) * 1.1;
        tmp.sub(mPos).normalize().multiplyScalar(f);
        velocity[i]     += tmp.x;
        velocity[i + 1] += tmp.y;
        velocity[i + 2] += tmp.z;
      }

      velocity[i]     *= 0.88;
      velocity[i + 1] *= 0.88;
      velocity[i + 2] *= 0.88;

      posAr[i]     += velocity[i]     * dt * 60;
      posAr[i + 1] += velocity[i + 1] * dt * 60;
      posAr[i + 2] += velocity[i + 2] * dt * 60;
    }
    gGeom.attributes.position.needsUpdate = true;

    /* --- rendu & frame suivante --- */
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  // Détection du survol via le raycaster
ray.setFromCamera(mouse, camera);
const intersects = ray.intersectObjects(cards);

cards.forEach(card => {
  const mat = card.material;
  const isHovered = intersects.find(inter => inter.object === card);

  if (isHovered) {
    // Zoom progressif (valeurs plus petites = zoom)
    mat.map.repeat.lerp(new THREE.Vector2(1.2, 1.2), 0.05);
    mat.map.offset.lerp(new THREE.Vector2(-0.1, -0.1), 0.05);
  } else {
    // Retour à la normale
    mat.map.repeat.lerp(new THREE.Vector2(1, 1), 0.05);
    mat.map.offset.lerp(new THREE.Vector2(0, 0), 0.05);
  }
});


  tick();
})();
