<?php get_header(); ?>

<section class="page-404">
    <div class="container">
        <h1>Oups ! Page introuvable</h1>
        <p>Il semble que la page que vous recherchez n'existe pas ou a été déplacée.</p>
        <a href="<?php echo home_url(); ?>" class="btn-home">Retour à l'accueil</a>
        <div class="img-wrapper">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/lotus.png" alt="Image 404">
        </div>
    </div>
</section>

<?php get_footer(); ?>