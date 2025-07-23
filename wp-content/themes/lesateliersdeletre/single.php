<?php get_header(); ?>

<section class="single-post-section">


  <div class="container open-book">

    <!-- Colonne de gauche : date + titre + extrait -->
    <div class="book-left">
          <div class="img-intro">
        <img src="<?= get_theme_file_uri('assets/images/logo_transparent.webp'); ?>" alt="logo" class="site-logo">
    </div>
      <div class="post-meta">
        <span class="post-date"><?php echo get_the_date(); ?></span>
      </div>

      <h1 class="post-title"><?php the_title(); ?></h1>

      <?php if (has_excerpt()) : ?>
        <blockquote class="post-excerpt">
          <?php the_excerpt(); ?>
        </blockquote>
      <?php endif; ?>
    </div>

    <!-- Colonne de droite : contenu -->
    <!-- Colonne de droite : contenu -->
    <div class="book-right">
      <article class="post-content">
        <?php if (has_post_thumbnail()) : ?>
          <div class="featured-image">
            <?php the_post_thumbnail('large'); ?>
          </div>
        <?php endif; ?>

        <div class="post-body">
          <?php the_content(); ?>
        </div>
      </article>

      <div class="scroll-hint" aria-hidden="true">
        <span>&darr;</span>
      </div>
    </div>


  </div>
</section>

<?php get_footer(); ?>