<?php
/*
Template Name: Stages
*/
get_header();
?>

<?php get_template_part('partials/hero.tpl'); ?>

<section class="stages-section">
  <h2 class="section-title">Stages & ateliers à venir</h2>
  <div class="stages-wrapper">
    <?php
    $today = date('Y-m-d');

    $args_upcoming = [
      'post_type' => 'stage',
      'posts_per_page' => -1,
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

    $upcoming_query = new WP_Query($args_upcoming);

    if ($upcoming_query->have_posts()) :
      while ($upcoming_query->have_posts()) : $upcoming_query->the_post();
        $post_id = get_the_ID();
        $date_debut = get_post_meta($post_id, '_stage_date_debut', true);
        $date_fin = get_post_meta($post_id, '_stage_date_fin', true);
        $lieu = get_post_meta($post_id, '_stage_lieu', true);
        $horaires = get_post_meta($post_id, '_stage_horaires', true);
        $tarif = get_post_meta($post_id, '_stage_tarif', true);
        $desc_courte = get_post_meta($post_id, '_stage_desc_courte', true);
        $desc_detail = get_post_meta($post_id, '_stage_desc_detail', true);

        $date_affichee = ($date_debut === $date_fin || empty($date_fin)) ?
          date_i18n('j F Y', strtotime($date_debut)) :
          'Du ' . date_i18n('j F Y', strtotime($date_debut)) . ' au ' . date_i18n('j F Y', strtotime($date_fin));
    ?>
        <div class="stage-bubble upcoming" id="stage-<?php echo $post_id; ?>">
          <div class="stage-floating-image">
            <?php the_post_thumbnail('medium'); ?>
          </div>

          <h3><?php the_title(); ?></h3>
          <p class="date"><?php echo $date_affichee; ?></p>
          <p class="desc"><?php echo esc_html($desc_courte); ?></p>

          <a href="<?php echo site_url('/stages#stage-' . $post_id); ?>" class="bubble-link">En savoir plus</a>

          <div class="stage-detail">
            <p><?php echo nl2br(esc_html($desc_detail)); ?></p>
            <p>📍 <strong>Lieu</strong> : <?php echo esc_html($lieu); ?><br>
              ⏰ <strong>Horaires</strong> : <?php echo esc_html($horaires); ?><br>
              💶 <strong>Tarif</strong> : <?php echo esc_html($tarif); ?> €</p>
          </div>
        </div>
    <?php
      endwhile;
      wp_reset_postdata();
    else :
      echo '<p>Aucun stage à venir pour le moment.</p>';
    endif;
    ?>
  </div>

  <h2 class="section-title">Stages & ateliers passés</h2>
  <div class="stages-wrapper">
    <?php
    $args_past = [
      'post_type' => 'stage',
      'posts_per_page' => -1,
      'meta_key' => '_stage_date_debut',
      'orderby' => 'meta_value',
      'order' => 'DESC',
      'meta_query' => [
        [
          'key' => '_stage_date_debut',
          'value' => $today,
          'compare' => '<',
          'type' => 'DATE'
        ]
      ]
    ];

    $past_query = new WP_Query($args_past);

    if ($past_query->have_posts()) :
      while ($past_query->have_posts()) : $past_query->the_post();
        $post_id = get_the_ID();
        $date_debut = get_post_meta($post_id, '_stage_date_debut', true);
        $date_fin = get_post_meta($post_id, '_stage_date_fin', true);
        $lieu = get_post_meta($post_id, '_stage_lieu', true);
        $horaires = get_post_meta($post_id, '_stage_horaires', true);
        $tarif = get_post_meta($post_id, '_stage_tarif', true);
        $desc_courte = get_post_meta($post_id, '_stage_desc_courte', true);
        $desc_detail = get_post_meta($post_id, '_stage_desc_detail', true);

        $date_affichee = ($date_debut === $date_fin || empty($date_fin)) ?
          date_i18n('j F Y', strtotime($date_debut)) :
          'Du ' . date_i18n('j F Y', strtotime($date_debut)) . ' au ' . date_i18n('j F Y', strtotime($date_fin));
    ?>
        <div class="stage-bubble past" id="stage-<?php echo $post_id; ?>">
          <div class="stage-floating-image">
            <?php the_post_thumbnail('medium'); ?>
          </div>

          <h3><?php the_title(); ?></h3>
          <p class="date"><?php echo $date_affichee; ?></p>
          <p class="desc"><?php echo esc_html($desc_courte); ?></p>

          <a href="<?php echo site_url('/stages#stage-' . $post_id); ?>" class="bubble-link">En savoir plus</a>

          <div class="stage-detail">
            <p><?php echo nl2br(esc_html($desc_detail)); ?></p>
            <p>📍 <strong>Lieu</strong> : <?php echo esc_html($lieu); ?><br>
              ⏰ <strong>Horaires</strong> : <?php echo esc_html($horaires); ?><br>
              💶 <strong>Tarif</strong> : <?php echo esc_html($tarif); ?> €</p>
          </div>
        </div>
    <?php
      endwhile;
      wp_reset_postdata();
    else :
      echo '<p>Aucun stage passé enregistré.</p>';
    endif;
    ?>
  </div>
</section>

<?php get_footer(); ?>
