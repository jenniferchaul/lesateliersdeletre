<section class="cylinder-gallery" id="galerie">
  <h2 class="gallery-title">Galerie</h2>

  <div id="tubeSplide" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <?php
          $imgs = ['dessin.jpg','dessin1.jpg','dessin2.jpg','dessin3.jpg','dessin4.jpg'];
          /* répète 3 × pour la boucle infinie sans doublon immédiat */
          for ($r = 0; $r < 3; $r++) {
            foreach ($imgs as $k => $img) {
              $index = ($k + $r) % count($imgs);     // décale
              echo '<li class="splide__slide tube-slide">';
              echo '<img src="' . get_template_directory_uri() . '/assets/images/' . $imgs[$index] . '" alt="">';
              echo '</li>';
            }
          }
        ?>
      </ul>
    </div>
  </div>
</section>
