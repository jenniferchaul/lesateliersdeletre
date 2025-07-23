<?php
/*
Template Name: Art-Thérapie
*/

get_header();
?>

<?php get_template_part('partials/hero.tpl'); ?>


<section class="art-therapie-section" id="art-therapie">

  <div class="container">

    <div class="img-intro">

      <div class="title-wrapper">
        <img src="<?= get_theme_file_uri('assets/images/lotus.png'); ?>" alt="Fleur de lotus" class="lotus-icon">
        <h2 class="section-title">L’Art-thérapie : <br> Qu’est-ce que c’est?</h2>
      </div>
    </div>

    <div>
      <div class="row">
        <div class="text-content text-block">
          <p class="splitting">L'art-thérapie est une approche thérapeutique innovante qui utilise les processus créatifs comme moyen de soin. En intégrant la création artistique à un cadre thérapeutique, elle permet aux individus d'explorer et de travailler sur leurs émotions, leurs pensées et leurs comportements de manière significative.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll img-rotate" src="<?= get_theme_file_uri('assets/images/mandala1.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>

      <div class="row reverse">
        <div class="text-content text-block">
          <p class="splitting">Ce processus artistique constitue une véritable introspection. En s'adonnant à des activités telles que la peinture, le dessin ou la sculpture, les participants sont invités à prendre conscience des nœuds psychologiques qui entravent leur bien-être. L’art devient ainsi un miroir, révélant des aspects de soi souvent enfouis. À travers l'œuvre créée, chaque individu peut accéder à des informations internes qui favorisent une meilleure compréhension de soi.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll img-rotate" src="<?= get_theme_file_uri('assets/images/mandala7.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>

      <div class="row">
        <div class="text-content text-block">
          <p class="splitting">L'art-thérapeute joue un rôle essentiel dans ce processus, en offrant une écoute bienveillante et attentive. Son objectif est de repérer les mécanismes et les processus psychologiques à l'œuvre, tout en soutenant la personne sur son chemin thérapeutique. Dans un cadre sécurisant, établi en amont, les individus peuvent évoluer à leur propre rythme sans crainte de jugement. Cette méthode exclut les interprétations directes, permettant aux participants de trouver leurs propres ressources, d’être acteurs de leur changement et d'accéder à un meilleur équilibre émotionnel et à une plus grande autonomie.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll img-rotate" src="<?= get_theme_file_uri('assets/images/mandala9.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>

      <div class="row reverse">
        <div class="text-content text-block">
          <p class="splitting">L'art-thérapie est accessible à un large public, incluant les adultes, les adolescents et les enfants. Elle s'adresse à ceux qui traversent des difficultés passagères ou récurrentes, et profondément ancrées. Importamment, cette pratique ne requiert aucune compétence artistique préexistante, car l'accent est mis sur le processus créatif lui-même et non sur le produit final.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll img-rotate" src="<?= get_theme_file_uri('assets/images/mandala4.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>

      <div class="row">
        <div class="text-content text-block">
          <p class="splitting">Concernant l'échange verbal, celui-ci n'est ni évité ni systématiquement encouragé. Chaque participant est libre d'exprimer ses ressentis et ses pensées selon son propre rythme et ses besoins. Cette flexibilité crée un espace d'authenticité et d'ouverture, facilitant le partage d'expériences et de réflexions lorsque cela est souhaité.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll" src="<?= get_theme_file_uri('assets/images/mandala8.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>

      <div class="row reverse">
        <div class="text-content text-block">
          <p class="splitting">Participer à un atelier d'art-thérapie, c'est donc s'offrir la chance de plonger dans une expérience riche et transformative. Cela permet d'explorer son univers intérieur à travers l'art, d'accéder à des ressources insoupçonnées et de favoriser un chemin vers la guérison, l'acceptation de soi et un épanouissement durable.</p>
        </div>
        <div class="image-content">
          <img class="img-scroll img-rotate" src="<?= get_theme_file_uri('assets/images/mandala6.png'); ?>" alt="Art-thérapie image 1">
        </div>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
?>