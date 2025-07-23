<?php
/*
Template Name: Galerie
*/
get_header();
?>

<section class="photo-gallery">

  <div class="logo-galerie"><a href="<?= home_url('/') ?>">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo_transparent.webp" alt="Logo Les Ateliers de l'Être">
    </a>
  </div>

  <div class="container">
    <h2 class="section-title">Galerie</h2>
    <p class="galerie-intro">
      Une immersion visuelle dans l’univers de l’art-thérapie : instants et émotions capturées au fil du temps.
    </p>
  </div>



  <?php
  $images = [
    'galerie1.png',
    'galerie2.png',
    'galerie3.png',
    'galerie4.png',
    'galerie5.png',
    'galerie6.png',
    'galerie7.png',
    'galerie8.png',
    'galerie9.png',
    'galerie10.png'
  ];

  $allBalls = [];
  $total = 20; // nombre total de boules (tu peux changer ce chiffre)

  while (count($allBalls) < $total) {
    $shuffled = $images;
    shuffle($shuffled);

    foreach ($shuffled as $img) {
      if (count($allBalls) >= $total) break;
      $allBalls[] = $img;
    }
  }

  $lastImg = '';
  foreach ($allBalls as $i => $image) {
    // éviter doublon immédiat
    if ($image === $lastImg && $i > 0) continue;
    $lastImg = $image;

    $delay = rand(0, 70000) / 1000; // 0 à 10s
    $duration = rand(20, 26); // plus lent
    $left = rand(0, 95); // position entre 0% et 100%

    echo '<div class="photo-ball" style="left:' . $left . '%; animation-delay:' . $delay . 's; animation-duration:' . $duration . 's;">
                <img src="' . get_template_directory_uri() . '/assets/images/' . $image . '" alt="Stage ' . ($i + 1) . '">
              </div>';
  }
  ?>
</section>

<div class="photo-gallery-placeholder"></div>

<?php get_footer(); ?>