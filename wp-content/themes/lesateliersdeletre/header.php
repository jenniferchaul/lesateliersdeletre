<!DOCTYPE html>
<html lang="<?= get_bloginfo('language'); ?>">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <canvas id="bg"></canvas>

  <div id="cursor-brush"></div>

  <?php if (is_front_page()) : ?>
    <div id="loader">
      <div class="breathing-effect"></div>
      <div class="name-title">
        <h1>Les Ateliers de l’Être</h1>
        <h2>Catherine Revollon – Art-thérapeute</h2>
      </div>
    </div>
  <?php endif; ?>

  <header class="navbar">
    <div class="navbar-left">

    <?php if (!is_front_page()) : ?>
      <a href="<?= home_url(); ?>" class="logo-navbar" aria-label="Retour à l’accueil">
        <img src="<?= get_theme_file_uri('assets/images/logo_transparent.webp'); ?>" alt="Les Ateliers de l’Être">
      </a>
    <?php endif; ?>

      <!-- Mobile -->
      <a href="tel:+33768330615" class="mobile-only" aria-label="Appeler Les Ateliers de l’Être">
        <i class="fas fa-phone-alt"></i>
      </a>

      <!-- Desktop -->
      <div class="desktop-only" aria-label="Numéro de téléphone">
        <i class="fas fa-phone-alt"></i> 07 68 33 06 15
      </div>

      <a href="mailto:contact.les.ateliers.de.l.etre@gmail.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.instagram.com/direct/t/17844524064474566/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61560824593856" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i>
      </a>
    </div>

    <div class="navbar-right">
      <!-- BOUTON SON -->
      <div class="sound-toggle muted" id="soundToggle" aria-label="Activer / couper le son">
        <div class="wave-icon">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>
        <span class="toggle-track">
          <span class="toggle-thumb"></span>
        </span>
        <span class="toggle-label">Son</span>
      </div>

      <div class="menu-toggle">
        <div class="menu-icon">
          <div class="circle-icon-inner"></div>
        </div>
        <span>Menu</span>
      </div>
    </div>
  </header>

  <div id="siteMenu" class="site-menu" aria-hidden="true">

    <button class="menu-close" aria-label="Fermer le menu">
      <span class="close-circle"></span>
      <span class="close-icon">×</span>
    </button>

    <nav class="site-menu__nav">
      <ul>
        <li><a href="<?= home_url('/') ?>"> Accueil</a></li>
        <li><a href="<?= home_url('/lart-therapie') ?>"> L'Art-Thérapie</a></li>
        <li><a href="<?= home_url('/a-propos') ?>"> À Propos</a></li>
        <li><a href="<?= home_url('/outils') ?>"> Outils</a></li>
        <li><a href="<?= home_url('/stages') ?>"> Ateliers & Stages</a></li>
        <li><a href="<?= home_url('/blog') ?>"> Blog</a></li>
        <li><a href="<?= home_url('/galerie') ?>"> Galerie</a></li>
        <li><a href="<?= home_url('/contact') ?>"> Contact</a></li>
      </ul>
    </nav>

    <div class="site-menu__logo">
      <img src="<?= get_theme_file_uri('assets/images/logo_transparent.webp'); ?>" alt="Les Ateliers de l’Être">
    </div>

    <div class="site-menu__lotus">
      <img src="<?= get_theme_file_uri('assets/images/lotus.png'); ?>" alt="Fleur de lotus">
    </div>

  </div>