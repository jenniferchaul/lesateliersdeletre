<footer class="footer">
  <div class="footer__container">
    <div class="footer__content">

      <div class="footer__bloc">
        <div class="logo logo-main"><a href="<?= home_url('/') ?>">
            <img src="<?= get_template_directory_uri(); ?>/assets/images/logo_transparent.webp" style="width: 18rem" ; alt="Logo Les Ateliers de l’Être">
          </a>
        </div>
        <!-- Numéro pour mobile (cliquable) -->
        <p class="mobile-only">
          <i class="fas fa-phone-alt"></i>
          <a href="tel:+33768330615">07 68 33 06 15</a>
        </p>

        <!-- Numéro pour desktop (non cliquable) -->
        <p class="desktop-only">
          <i class="fas fa-phone-alt"></i> 07 68 33 06 15
        </p>

        <p><i class="fas fa-envelope"></i> <a href="mailto:contact.les.ateliers.de.l.etre@gmail.com">contact.les.ateliers.de.l.etre@gmail.com</a></p>
        <p><i class="fas fa-map-marker-alt"></i> 79 Chemin du Mont de Milly - 71960 Prissé</p>
      </div>

      <div class="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=61560824593856" aria-label="Facebook" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/direct/t/17844524064474566/" class="social-icon" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="mailto:contact@lesateliersdeletre.fr" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>

      <nav class="footer__links">
        <a href="<?= home_url('/lart-therapie') ?>">L'Art-thérapie</a>
        <a href="<?= home_url('/a-propos') ?>">À Propos</a>
        <a href="<?= home_url('/outils') ?>">Outils</a>
        <a href="<?= home_url('/stages') ?>">Ateliers & Stages</a>
        <a href="<?= home_url('/galerie') ?>">Galerie</a>
        <a href="<?= home_url('/blog') ?>">Blog</a>
        <a href="<?= home_url('/contact') ?>">Contact</a>
      </nav>

    </div>

    <div class="footer__bottom">
      <ul class="footer__roadmap">
        <li><a href="<?= home_url('/mentions-legales') ?>">Mentions légales</a></li>
        <li><a href="<?= home_url('/politique-de-confidentialite') ?>">Politique de confidentialité</a></li>
      </ul>

      <div class="footer__credits">
        © 2025 Les Ateliers de l’Être. Tous droits réservés.
      </div>

      <div class="footer__jcdev">
        Site réalisé par <a href="https://www.jcdevandcode.fr" target="_blank" rel="noopener">JC Dev&Code</a>
      </div>
    </div>
  </div>
</footer>

<div id="back-to-top" aria-label="Remonter">
  <div class="mandala-button">
    <svg class="mandala-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" stroke-width="1" stroke-dasharray="2,3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#d4af37" stroke-width="0.5" stroke-dasharray="1,6" />
      <path d="M50,15 Q52,25 60,25 Q68,25 65,35 Q62,45 70,50 Q62,55 65,65 Q68,75 60,75 Q52,75 50,85 Q48,75 40,75 Q32,75 35,65 Q38,55 30,50 Q38,45 35,35 Q32,25 40,25 Q48,25 50,15 Z" fill="none" stroke="#d4af37" stroke-width="0.6" />
    </svg>
    <i class="fas fa-arrow-up"></i>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
<script src="https://unpkg.com/lenis@1.3.4/dist/lenis.min.js"></script>

<audio id="background-audio" preload="auto">
  <source src="<?= get_template_directory_uri(); ?>/assets/audio/sound.mp3" type="audio/mpeg">
</audio>


<?php wp_footer(); ?>

</body>

</html>