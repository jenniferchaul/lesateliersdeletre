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

});


