<?php
/*
Template Name: Blog
*/
get_header();
?>

<section class="blog-section">
  <div class="container">
    <h2 class="section-title">Blog</h2>
    <p class="galerie-intro">
      Explorations, partages et inspirations autour de l'art-thérapie.
    </p>

    <div class="blog-grid">
      <?php
      $args = array(
        'post_type' => 'post',
        'posts_per_page' => 10,
        'paged' => get_query_var('paged') ?: 1,
      );
      $blog_query = new WP_Query($args);

      if ($blog_query->have_posts()) :
        while ($blog_query->have_posts()) : $blog_query->the_post(); ?>
          <article class="blog-card" data-aos="fade-up">
            <?php if (has_post_thumbnail()) : ?>
              <img src="<?php the_post_thumbnail_url('medium'); ?>" alt="<?php the_title(); ?>">
            <?php endif; ?>

            <h3><?php the_title(); ?></h3>
            <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>

            <a href="<?php the_permalink(); ?>" class="read-more">Lire la suite</a>
          </article>
        <?php endwhile; ?>

        <div class="pagination">
          <?php
          echo paginate_links(array(
            'total' => $blog_query->max_num_pages
          ));
          ?>
        </div>

      <?php else : ?>
        <p>Aucun article pour le moment.</p>
      <?php endif; wp_reset_postdata(); ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
