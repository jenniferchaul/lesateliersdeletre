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


  <!--<div id="cursor-dot"></div>-->
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
      <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
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

  <!-- ◊◊◊ MENU OVERLAY (desktop + mobile) ◊◊◊ -->
  <div id="siteMenu" class="site-menu" aria-hidden="true">
    <!-- bouton fermeture -->
    <button class="menu-close" aria-label="Fermer le menu">
      <span class="close-circle"></span>
      <span class="close-icon">×</span>
    </button>

    <!-- navigation -->
    <nav class="site-menu__nav">
      <ul>
        <li><a href="<?= home_url('/') ?>"><span class="idx">(01)</span> Accueil</a></li>
        <li><a href="<?= home_url('/lart-therapie') ?>"><span class="idx">(02)</span> L'Art-Thérapie</a></li>
        <li><a href="<?= home_url('/a-propos') ?>"><span class="idx">(03)</span> À Propos</a></li>
        <li><a href="<?= home_url('/outils') ?>"><span class="idx">(04)</span> Outils</a></li>
        <li><a href="<?= home_url('/stages') ?>"><span class="idx">(05)</span> Stages & Ateliers</a></li>
        <li><a href="<?= home_url('/blog') ?>"><span class="idx">(06)</span> Blog</a></li>
        <li><a href="<?= home_url('/galerie') ?>"><span class="idx">(07)</span> Galerie</a></li>
        <li><a href="<?= home_url('/contact') ?>"><span class="idx">(08)</span> Contact</a></li>
      </ul>
    </nav>

    <!-- logo (en bas du menu) -->
    <div class="site-menu__logo">
      <img src="<?= get_theme_file_uri('assets/images/logo_transparent.webp'); ?>" alt="Les Ateliers de l’Être">
    </div>
  </div>
  <!-- ◊◊◊ /MENU OVERLAY ◊◊◊ -->