<?php
/*
Template Name: À propos
*/

get_header();
?>

<!--<?php get_template_part('partials/hero.tpl'); ?>-->

<section class="apropos-section" id="apropos">

    <div class="container">

        <h2 class="section-title">À propos de Catherine Revollon</h2>

        <div class="bio-wrapper">
            <div class="photo-art-therapeute">
                <img src="<?= get_theme_file_uri('assets/images/Catherine.jpg'); ?>" alt="Portrait de Catherine Revollon">
            </div>

            <div class="bio-text">
                <p class="splitting"><strong>Catherine Revollon</strong>, art-thérapeute certifiée, propose des ateliers thérapeutiques et créatifs près de Mâcon.</p>

                <p class="splitting">Son parcours a commencé dans le domaine médical comme aide-soignante, avant d’évoluer vers l’accompagnement en gérontologie, l’éducation spécialisée, puis l’oncologie, en intégrant peu à peu des approches créatives et thérapeutiques.</p>

                <p class="splitting">Inspirée par les ateliers qu’elle anime et son propre élan créatif, Catherine s’est formée à l’art-thérapie au centre Schème à Lyon. Elle pratique aujourd’hui une approche douce, centrée sur la personne et sans jugement, avec ou sans médiation verbale, en groupe ou en individuel.</p>

                <p class="splitting">Elle propose également des stages pour reconnecter à sa boussole intérieure et des séjours de répit en tant qu’accueillante familiale.</p>
            </div>
        </div>

        <div class="competences-section">
            <div class="bubble-bg"></div>
            <div class="competences-content">
                <h3>Formations & spécialisations</h3>
                <ul>
                    <li>🎓 Art-thérapeute certifiée – Centre Schème, Lyon</li>
                    <li>🌸 Formation Mandala – Neuro-pédagogie Marie Pré</li>
                    <li>🩺 Assistante de soin en gérontologie</li>
                    <li>🧠 Hypnose – Centre de formation à Montmorillon</li>
                    <li>🩹 Diplôme d’État d’aide-soignante – IFAS Hauteville (01)</li>
                    <li>👥 Intervenante en structures médicales et éducatives</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>