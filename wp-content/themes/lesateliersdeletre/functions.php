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

  wp_enqueue_style(
    'google-fonts',
    'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap&family=Satisfy&display=swap',
    [],
    null
  );

  wp_enqueue_style(
    'font-awesome',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
    [],
    '5.15.4'
  );

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
    'laeTheme',
    ['uri' => get_template_directory_uri()]
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

  wp_enqueue_script(
    'gsap',
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js',
    [],
    '3.13.0',
    true
  );

  wp_enqueue_script(
    'gsap-scrolltrigger',
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js',
    ['gsap'],
    '3.13.0',
    true
  );

  wp_enqueue_script(
    'splitting',
    'https://unpkg.com/splitting/dist/splitting.min.js',
    [],
    null,
    true
  );

  wp_enqueue_script(
    'lenis',
    'https://unpkg.com/lenis@1.3.4/dist/lenis.min.js',
    [],
    '1.3.4',
    true
  );

  wp_enqueue_style(
    'glightbox-css',
    'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
    [],
    null
  );

  wp_enqueue_script(
    'glightbox-js',
    'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js',
    [],
    null,
    true
  );
  wp_add_inline_script('glightbox-js', "
  const lightbox = GLightbox({
    selector: '.glightbox'
  });

  lightbox.on('open', () => {
    document.body.classList.add('lightbox-open');
  });

  lightbox.on('close', () => {
    document.body.classList.remove('lightbox-open');
  });
");
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

function lae_enqueue_effect_assets()
{

  wp_enqueue_script(
    'tube-effect',
    get_theme_file_uri('assets/js/tube-effect.js'),
    [],
    null,
    true
  );
}
add_action('wp_enqueue_scripts', 'lae_enqueue_effect_assets');

add_filter('script_loader_tag', function ($tag, $handle, $src) {
  if ($handle === 'tube-effect') {
    return '<script type="module" src="' . esc_url($src) . '"></script>';
  }
  return $tag;
}, 10, 3);

function register_cpt_photo()
{
  $labels = array(
    'name'               => 'Galerie',
    'singular_name'      => 'Photo',
    'add_new'            => 'Ajouter une photo',
    'add_new_item'       => 'Ajouter une nouvelle photo',
    'edit_item'          => 'Modifier la photo',
    'new_item'           => 'Nouvelle photo',
    'view_item'          => 'Voir la photo',
    'search_items'       => 'Rechercher une photo',
    'not_found'          => 'Aucune photo trouvée',
    'not_found_in_trash' => 'Aucune photo dans la corbeille',
    'menu_name'          => 'Galerie',
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'has_archive'        => false,
    'supports'           => array('title', 'thumbnail'),
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-format-gallery',
    'show_in_rest'       => true,
  );
  register_post_type('photo', $args);
}
add_action('init', 'register_cpt_photo');

function register_cpt_stage()
{
  $labels = [
    'name' => 'Stages',
    'singular_name' => 'Stage',
    'add_new_item' => 'Ajouter un stage',
    'edit_item' => 'Modifier le stage',
    'new_item' => 'Nouveau stage',
    'view_item' => 'Voir le stage',
    'search_items' => 'Rechercher un stage',
    'not_found' => 'Aucun stage trouvé',
    'menu_name' => 'Ateliers & Stages',
  ];

  $args = [
    'labels' => $labels,
    'public' => true,
    'has_archive' => false,
    'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
    'menu_position' => 6,
    'menu_icon' => 'dashicons-welcome-learn-more',
    'show_in_rest' => true,
  ];

  register_post_type('stage', $args);
}
add_action('init', 'register_cpt_stage');

function ajouter_champs_stages()
{
  add_meta_box(
    'infos_stages',
    'Informations du stage',
    'afficher_champs_stages',
    'stage',
    'normal',
    'default'
  );
}
add_action('add_meta_boxes', 'ajouter_champs_stages');

function afficher_champs_stages($post)
{
  $date = get_post_meta($post->ID, '_stage_date', true);
  $lieu = get_post_meta($post->ID, '_stage_lieu', true);
  $horaires = get_post_meta($post->ID, '_stage_horaires', true);
  $tarif = get_post_meta($post->ID, '_stage_tarif', true);
  $desc_courte = get_post_meta($post->ID, '_stage_desc_courte', true);
  $desc_detail = get_post_meta($post->ID, '_stage_desc_detail', true);
?>

  <label>Date de début :</label><br>
  <input type="date" name="stage_date_debut" value="<?php echo esc_attr(get_post_meta($post->ID, '_stage_date_debut', true)); ?>" style="width:100%;"><br><br>

  <label>Date de fin :</label><br>
  <input type="date" name="stage_date_fin" value="<?php echo esc_attr(get_post_meta($post->ID, '_stage_date_fin', true)); ?>" style="width:100%;"><br><br>

  <label>Description courte :</label><br>
  <textarea name="stage_desc_courte" rows="2" style="width:100%;"><?php echo esc_textarea($desc_courte); ?></textarea><br><br>

  <label>Description détaillée :</label><br>
  <textarea name="stage_desc_detail" rows="5" style="width:100%;"><?php echo esc_textarea($desc_detail); ?></textarea><br><br>

  <label>Lieu :</label><br>
  <input type="text" name="stage_lieu" value="<?php echo esc_attr($lieu); ?>" style="width:100%;"><br><br>

  <label>Horaires :</label><br>
  <input type="text" name="stage_horaires" value="<?php echo esc_attr($horaires); ?>" style="width:100%;"><br><br>

  <label>Tarif :</label><br>
  <input type="text" name="stage_tarif" value="<?php echo esc_attr($tarif); ?>" style="width:100%;">
<?php
}

function sauvegarder_champs_stages($post_id)
{
  if (isset($_POST['stage_date_debut'])) {
    update_post_meta($post_id, '_stage_date_debut', sanitize_text_field($_POST['stage_date_debut']));
  }
  if (isset($_POST['stage_date_fin'])) {
    update_post_meta($post_id, '_stage_date_fin', sanitize_text_field($_POST['stage_date_fin']));
  }

  if (isset($_POST['stage_lieu'])) {
    update_post_meta($post_id, '_stage_lieu', sanitize_text_field($_POST['stage_lieu']));
  }
  if (isset($_POST['stage_horaires'])) {
    update_post_meta($post_id, '_stage_horaires', sanitize_text_field($_POST['stage_horaires']));
  }
  if (isset($_POST['stage_tarif'])) {
    update_post_meta($post_id, '_stage_tarif', sanitize_text_field($_POST['stage_tarif']));
  }
  if (isset($_POST['stage_desc_courte'])) {
    update_post_meta($post_id, '_stage_desc_courte', sanitize_textarea_field($_POST['stage_desc_courte']));
  }
  if (isset($_POST['stage_desc_detail'])) {
    update_post_meta($post_id, '_stage_desc_detail', sanitize_textarea_field($_POST['stage_desc_detail']));
  }
}
add_action('save_post', 'sauvegarder_champs_stages');

function ajouter_champ_type_stage($post)
{
  $type = get_post_meta($post->ID, '_stage_type', true);
?>
  <label for="stage_type">Type :</label>
  <select name="stage_type" id="stage_type" style="width:100%;">
    <option value="stage" <?php selected($type, 'stage'); ?>>Stage (plusieurs jours)</option>
    <option value="atelier" <?php selected($type, 'atelier'); ?>>Atelier (1 jour)</option>
  </select><br><br>
<?php
}
add_action('add_meta_boxes', function () {
  add_meta_box('type_stage', 'Type de session', 'ajouter_champ_type_stage', 'stage', 'side');
});

add_action('save_post', function ($post_id) {
  if (isset($_POST['stage_type'])) {
    update_post_meta($post_id, '_stage_type', sanitize_text_field($_POST['stage_type']));
  }
});
