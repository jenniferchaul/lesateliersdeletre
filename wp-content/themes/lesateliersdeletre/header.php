<!DOCTYPE html>
<html lang="<?= get_bloginfo('language'); ?>">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div id="cursor-dot"></div>

  <div id="loader">
    <div class="breathing-effect"></div>
    <div class="name-title">
      <h1>Les Ateliers de l’Être</h1>
      <h2>Catherine Revollon – Art-thérapeute</h2>
    </div>
  </div>

  <header class="navbar">
    <div class="navbar-left">
      <!-- Mobile -->
      <a href="tel:+33768330615" class="mobile-only" aria-label="Appeler Les Ateliers de l’Être">
        <i class="fas fa-phone-alt"></i> 07 68 33 06 15
      </a>

      <!-- Desktop -->
      <div class="desktop-only" aria-label="Numéro de téléphone">
        <i class="fas fa-phone-alt"></i> 07 68 33 06 15
      </div>

      <a href="mailto:chaul.jennifer@gmail.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i>
      </a>
    </div>

    <div class="navbar-right">
      <div class="sound-toggle">
        <div class="wave-icon">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>
        <span>Son</span>
      </div>

      <div class="menu-toggle">
        <div class="menu-icon">
          <div class="circle-icon-inner"></div>
        </div>
        <span>Menu</span>
      </div>

    </div>
  </header>