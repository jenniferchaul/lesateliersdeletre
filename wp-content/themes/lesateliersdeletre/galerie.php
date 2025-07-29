<?php
/*
Template Name: Galerie
*/
get_header();
?>

<?php get_template_part('partials/hero.tpl'); ?>

<section class="photo-gallery">

  <div class="container">
    <h2 class="section-title">Galerie</h2>
    <p class="galerie-intro">
      Une immersion visuelle dans l’univers de l’art-thérapie : instants et émotions capturées au fil du temps.
    </p>
  </div>

  <?php
$allBalls = [];
$total = 20;

$args = array(
  'post_type' => 'photo',
  'posts_per_page' => -1,
  'orderby' => 'rand',
);

$query = new WP_Query($args);

if ($query->have_posts()) {
  while ($query->have_posts() && count($allBalls) < $total) {
    $query->the_post();
    $img_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    if ($img_url) {
      $allBalls[] = $img_url;
    }
  }

  wp_reset_postdata();

  $lastImg = '';
  foreach ($allBalls as $i => $image) {
    if ($image === $lastImg && $i > 0) continue;
    $lastImg = $image;

    $delay = rand(0, 20000) / 1000;
    $duration = rand(20, 26);
    $left = rand(0, 95);

echo '<div class="photo-ball" style="left:' . $left . '%; animation-delay:' . $delay . 's; animation-duration:' . $duration . 's;">
  <a href="' . esc_url($image) . '" class="glightbox" data-gallery="galerie">
    <img src="' . esc_url($image) . '" alt="Photo galerie ' . ($i + 1) . '">
  </a>
</div>';

  }
}
?>

</section>

<div class="photo-gallery-placeholder"></div>

<?php get_footer(); ?>