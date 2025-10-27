<?php
/*
Template Name: Contact
*/

get_header();
?>

<!--<?php get_template_part('partials/hero.tpl'); ?>-->

<section class="contact-page-art">

  <div class="contact-header">
    <h1 class="section-title">Contact</h1>
    <p class="contact-intro-page">
      Vous souhaitez en savoir plus sur les ateliers ou vous inscrire à un stage ? N’hésitez pas à me contacter.
    </p>
    <div class="underline"></div>
  </div>

  <div class="contact-main-grid">

    <div class="contact-form-wrapper">
      <h2>Formulaire de contact</h2>
      <p>Remplissez le formulaire ci-dessous, je vous répondrai dans les meilleurs délais.</p>
      <?php echo do_shortcode('[contact-form-7 id="8a5d0aa" title="Formuulaire de contact"]'); ?>
    </div>

    <div class="contact-infos">
      <h2>Coordonnées</h2>
      <p><strong>Email : </strong>contact.les.ateliers.de.l.etre@gmail.com</p>
      <p><strong>Téléphone : </strong> 07 68 33 06 15</p>
      <p><strong>Adresse : </strong> 79 Chemin du Mont de Milly - 71960 Prissé</p>

      <h2>Disponibilités</h2>
      <ul>
        <li>Sur rendez-vous uniquement</li>
        <li>Ateliers organisés en semaine & certains week-ends</li>
      </ul>
    </div>
  </div>

  <div class="map-wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d688.76614275447!2d4.752177119293704!3d46.32841225681995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3719d9951d1e9%3A0x4b3b7b734344d1b7!2s6%20Lot.%20le%20Clos%20des%20M%C3%A9sanges%2C%2071960%20Priss%C3%A9!5e0!3m2!1sfr!2sfr!4v1756303171823!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

</section>

<?php get_footer(); ?>

