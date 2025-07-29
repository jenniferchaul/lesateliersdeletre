<section class="section-stage">
  <div class="container-title" data-aos="fade-up">
    <h2 class="stage-title">Prochains stages</h2>
  </div>

  <div class="stage-list" data-aos="fade-up">
    <?php
    $today = date('Y-m-d');
    $args = [
      'post_type' => 'stage',
      'posts_per_page' => 2,
      'meta_key' => '_stage_date_debut',
      'orderby' => 'meta_value',
      'order' => 'ASC',
      'meta_query' => [
        [
          'key' => '_stage_date_debut',
          'value' => $today,
          'compare' => '>=',
          'type' => 'DATE'
        ]
      ]
    ];

    $query = new WP_Query($args);

    if ($query->have_posts()) :
      while ($query->have_posts()) : $query->the_post();
        $post_id = get_the_ID();
        $title = get_the_title();
        $desc_courte = get_post_meta($post_id, '_stage_desc_courte', true);
        $tarif = get_post_meta($post_id, '_stage_tarif', true);
        $date_debut = get_post_meta($post_id, '_stage_date_debut', true);
        $date_fin = get_post_meta($post_id, '_stage_date_fin', true);

        $date_affichee = ($date_debut === $date_fin || empty($date_fin)) ?
          date_i18n('j F Y', strtotime($date_debut)) :
          'Du ' . date_i18n('j F Y', strtotime($date_debut)) . ' au ' . date_i18n('j F Y', strtotime($date_fin));
    ?>
      <div class="stage-card" id="stage-<?php echo $post_id; ?>">
        <div class="stage-card-inner">
          <div class="stage-card-front">
            <h3 class="stage-name"><?php echo esc_html($title); ?></h3>
            <div class="flip-arrow">↻</div>
          </div>
          <div class="stage-card-back">
            <div class="close-arrow" title="Fermer">×</div>
            <p class="stage-date"><strong>Date :</strong> <?php echo $date_affichee; ?></p>
            <p class="stage-excerpt"><?php echo esc_html($desc_courte); ?></p>
            <p class="stage-price"><strong>Coût :</strong> <?php echo esc_html($tarif); ?> €</p>
            <a href="<?php echo site_url('/stages#stage-' . $post_id); ?>" class="btn-link">En savoir plus</a>
          </div>
        </div>
      </div>
    <?php
      endwhile;
      wp_reset_postdata();
    else :
      echo '<p class="no-stage">Aucun stage à venir pour le moment.</p>';
    endif;
    ?>
  </div>

  <div class="button">
    <a href="<?= site_url('/stages') ?>" class="circle-cta">
      <span class="inner-circle"></span>
      <span class="cta-text">Tous les stages</span>
    </a>
  </div>
</section>
