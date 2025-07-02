<?php

error_log('=== functions.php chargé ===');

define('THEME_VERSION', '1.0.0');

add_action('after_setup_theme', 'lesateliersdeletre_initializeTheme');

if (!function_exists('lesateliersdeletre_initializeTheme')) {
  function lesateliersdeletre_initializeTheme()
  {
    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    add_theme_support('menus');

    add_theme_support('page-attributes');
  }
}

add_action('wp_enqueue_scripts', function () {

  wp_enqueue_style(
    'lesateliersdeletre-styles',
    get_theme_file_uri('assets/css/style.css'),
    [],
    THEME_VERSION
  );

  // Google Fonts
  wp_enqueue_style(
    'google-fonts',
    'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap',
    [],
    null
  );

  wp_enqueue_style(
    'font-awesome',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
    [],
    '5.15.4'
  );

  // ✅ AOS (Animation on Scroll)
  wp_enqueue_style(
    'aos-css',
    'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css',
    [],
    null
  );

  wp_enqueue_script(
    'aos-js',
    'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
    [],
    null,
    true
  );

  wp_add_inline_script('aos-js', 'AOS.init({
    once: true,
    duration: 800,
    delay: 100,
    offset: 120,
    easing: "ease-in-out",
});');


  wp_enqueue_script(
    'main-js',
    get_theme_file_uri('assets/js/main.js'),
    [],
    '1.0.0',
    true
  );

wp_localize_script(
    'main-js',
    'laeTheme',                     // 1 nom JS
    [ 'uri' => get_template_directory_uri() ]   // 2 string -> JS
);

  wp_enqueue_script(
    'mandala-js',
    get_theme_file_uri('assets/js/mandala.js'),
    [],
    '1.0.0',
    true
  );

  wp_enqueue_style(
    'splide-style',
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css',
    [],
    '4.1.4'
  );

  wp_enqueue_script(
    'splide-script',
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
    [],
    '4.1.4',
    true
  );

  // GSAP Core
  wp_enqueue_script(
    'gsap',
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js',
    [],
    '3.13.0',
    true
  );

  // ScrollTrigger
  wp_enqueue_script(
    'gsap-scrolltrigger',
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js',
    ['gsap'],
    '3.13.0',
    true
  );

  // Splitting.js
  wp_enqueue_script(
    'splitting',
    'https://unpkg.com/splitting/dist/splitting.min.js',
    [],
    null,
    true
  );

  // Lenis (scroll fluide)
  wp_enqueue_script(
    'lenis',
    'https://unpkg.com/lenis@1.3.4/dist/lenis.min.js',
    [],
    '1.3.4',
    true
  );
});


function jcdev_create_fake_posts()
{
  if (get_option('jcdev_fake_posts_created')) return;

  $titles = [
    'L’art-thérapie : une reconnexion à soi',
    'Créer avec ses mains pour apaiser l’esprit',
    'Quand les couleurs expriment ce que les mots taisent',
    'L’intuition artistique chez l’adulte',
    'Comment se déroule une séance d’art-thérapie ?',
    'Pourquoi l’art peut soigner',
  ];

  $images = [
    'dessin1.jpg',
    'dessin2.jpg',
    'dessin3.jpg',
    'dessin4.jpg',
    'dessin.jpg',
    'dessin2.jpg',
  ];

  foreach ($titles as $index => $title) {
    $post_id = wp_insert_post([
      'post_title'   => $title,
      'post_content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, nisi ut convallis luctus, enim nisl posuere risus, nec laoreet magna arcu non lorem. Donec in suscipit sem.',
      'post_status'  => 'publish',
      'post_author'  => 1,
      'post_excerpt' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'post_category' => [1]
    ]);

    if ($post_id && !is_wp_error($post_id)) {
      // Associe une image à l’article (doit déjà être dans la médiathèque ou dans uploads)
      $upload_dir = wp_upload_dir();
      $image_path = get_template_directory() . '/assets/images/' . $images[$index];

      if (file_exists($image_path)) {
        $filetype = wp_check_filetype(basename($image_path), null);
        $attachment = [
          'post_mime_type' => $filetype['type'],
          'post_title'     => sanitize_file_name(basename($image_path)),
          'post_content'   => '',
          'post_status'    => 'inherit'
        ];

        $attach_id = wp_insert_attachment($attachment, $image_path, $post_id);
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        $attach_data = wp_generate_attachment_metadata($attach_id, $image_path);
        wp_update_attachment_metadata($attach_id, $attach_data);
        set_post_thumbnail($post_id, $attach_id);
      }
    }
  }

  update_option('jcdev_fake_posts_created', true);
}
add_action('after_setup_theme', 'jcdev_create_fake_posts');
