<?php
/*
Template Name: À propos
*/

get_header();
?>

<section class="apropos-section" id="apropos">

    <!-- Logo centré -->
    <div class="logo logo-apropos">
        <img src="<?= get_theme_file_uri('assets/images/logo_transparent.webp'); ?>" alt="Logo Les Ateliers de l’Être">
    </div>

    <div class="container">

        <!-- Titre principal -->
        <h2 class="section-title">À propos de Catherine Revollon</h2>

        <!-- Bloc image + texte -->
        <div class="bio-wrapper">
            <div class="photo-art-therapeute">
                <img src="<?= get_theme_file_uri('assets/images/Catherine.jpg'); ?>" alt="Portrait de Catherine Revollon">
            </div>

            <div class="bio-text">
                <p><strong>Catherine Revollon</strong>, art-thérapeute certifiée, propose des ateliers thérapeutiques et créatifs près de Mâcon.</p>

                <p>Son parcours a commencé dans le domaine médical comme aide-soignante, avant d’évoluer vers l’accompagnement en gérontologie, l’éducation spécialisée, puis l’oncologie, en intégrant peu à peu des approches créatives et thérapeutiques.</p>

                <p>Inspirée par les ateliers qu’elle anime et son propre élan créatif, Catherine s’est formée à l’art-thérapie au centre Schème à Lyon. Elle pratique aujourd’hui une approche douce, centrée sur la personne et sans jugement, avec ou sans médiation verbale, en groupe ou en individuel.</p>

                <p>Elle propose également des stages pour reconnecter à sa boussole intérieure et des séjours de répit en tant qu’accueillante familiale.</p>
            </div>
        </div>

        <!-- Compétences / Diplômes -->
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