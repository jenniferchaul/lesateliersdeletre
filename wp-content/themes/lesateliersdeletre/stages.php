<?php
/*
Template Name: Stages
*/

get_header();
?>

<?php get_template_part('partials/hero.tpl'); ?>

<section class="stages-section">

    <h2 class="section-title">Stages et ateliers à venir</h2>

    <div class="stages-wrapper">

        <!-- STAGE 1 -->
        <div class="stage-bubble upcoming">
            <!-- Image flottante incluse dans .stage-bubble -->
            <div class="stage-floating-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/galerie1.png" alt="Atelier Mandala">
            </div>

            <h3>Atelier Mandala & Créativité</h3>
            <p class="date">21 juillet 2025</p>
            <p class="desc">Une journée pour reconnecter avec soi à travers la création intuitive de mandalas.</p>

            <a href="#" class="bubble-link">En savoir plus</a>

            <div class="stage-detail">
                <p>🌟 Cet atelier invite à ralentir, à se recentrer et à exprimer librement ses ressentis à travers la création de mandalas personnels. Il ne s’agit pas de « bien dessiner », mais de s’exprimer en conscience.</p>
                <p>🎨 Matériel fourni : feutres, crayons, papiers de couleurs, supports ronds</p>
                <p>🧘‍♀️ Temps d’introspection guidés par des méditations courtes.</p>
                <p>📍 <strong>Lieu</strong> : Prissé (71)<br>
                    ⏰ <strong>Horaires</strong> : 9h30 – 17h30<br>
                    💶 <strong>Tarif</strong> : 85 € (matériel inclus)</p>
            </div>
        </div>



        <!-- STAGE 2 -->
        <div class="stage-bubble upcoming">

            <div class="stage-floating-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/galerie2.png" alt="Stage Enfant Intérieur">
            </div>

            <h3>Stage “L’enfant intérieur”</h3>
            <p class="date">15 août 2025</p>
            <p class="desc">Explorer ses émotions à travers l’art-thérapie et retrouver sa créativité profonde.</p>

            <a href="#" class="bubble-link">En savoir plus</a>

            <div class="stage-detail">
                <p>👶 Un stage doux et profond pour renouer avec les besoins de notre enfant intérieur : sécurité, joie, expression libre. L’art devient un langage accessible pour explorer cette part enfouie.</p>
                <p>🎭 Activités proposées : collage, dessin libre, jeu théâtral symbolique, écriture émotionnelle</p>
                <p>📍 <strong>Lieu</strong> : Prissé (71)<br>
                    ⏰ <strong>Horaires</strong> : 10h00 – 17h00<br>
                    💶 <strong>Tarif</strong> : 90 €</p>
            </div>
        </div>

    </div>

    <h2 class="section-title">Stages et ateliers passés</h2>
    <div class="stages-wrapper">
        <div class="stage-bubble past">
            <div class="stage-floating-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/galerie3.png" alt="Exploration du Soi">
            </div>

            <h3>Exploration du Soi</h3>
            <p class="date">12 mai 2025</p>
            <p class="desc">Un atelier immersif autour de la symbolique personnelle à travers les arts visuels.</p>

            <a href="#" class="bubble-link">En savoir plus</a>

            <div class="stage-detail">
                <p>✨ Exploration autour des symboles, archétypes et souvenirs visuels marquants. Créations libres en peinture et collage guidé.</p>
                <p>📍 <strong>Lieu</strong> : Prissé (71)<br>
                    ⏰ <strong>Horaires</strong> : 10h00 – 17h00<br>
                    💶 <strong>Tarif</strong> : 80 €</p>
            </div>
        </div>

        <div class="stage-bubble past">
            <div class="stage-floating-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/galerie3.png" alt="Exploration du Soi">
            </div>

            <h3>Exploration du Soi</h3>
            <p class="date">12 mai 2025</p>
            <p class="desc">Un atelier immersif autour de la symbolique personnelle à travers les arts visuels.</p>

            <a href="#" class="bubble-link">En savoir plus</a>

            <div class="stage-detail">
                <p>✨ Exploration autour des symboles, archétypes et souvenirs visuels marquants. Créations libres en peinture et collage guidé.</p>
                <p>📍 <strong>Lieu</strong> : Prissé (71)<br>
                    ⏰ <strong>Horaires</strong> : 10h00 – 17h00<br>
                    💶 <strong>Tarif</strong> : 80 €</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>