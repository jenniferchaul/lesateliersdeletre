<section class="blog-preview" id="blog">
  <div class="container-title">
    <h2 class="blog-title">Derniers articles</h2>
    <p class="blog-subtitle">Nos réflexions, outils et inspirations</p>
  </div>

  <div class="blog-cards">
    <?php
      $articles = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => 3
      ]);
      while ($articles->have_posts()) : $articles->the_post(); ?>
        <article class="blog-card">
          <a href="<?php the_permalink(); ?>">
            <div class="card-thumb">
              <?php the_post_thumbnail('medium_large'); ?>
            </div>
            <div class="card-content">
              <span class="card-date">
                <?php echo get_the_date('d M Y'); ?>
              </span>
              <h3 class="card-title"><?php the_title(); ?></h3>
              <p class="card-excerpt">
                <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
              </p>
              <span class="read-more">Lire l’article</span>
            </div>
          </a>
        </article>
    <?php endwhile; wp_reset_postdata(); ?>
  </div>

  <a href="/blog" class="cta-button">Voir tous les articles</a>

</section>
