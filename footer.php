<footer class="footer grid col-4 peq-col-1">
        <div class="footer-description-column flex f-column">
            <img class="footer-logo" src="<?php echo(IMG. 'logo-freq.webp')?>" alt="logo">
            <div class="description-text-container flex f-column">
                <p class="footer-description">Somos una consultoría boutique, formada por un equipo con más de 15 años de experiencia en el sector regulatorio de la radiodifusión y las telecomunicaciones.</p>
                <div class="privacidad-text-container">
                    <h4 class="privacidad-text centrar text-link">Aviso de privacidad</h4>
                </div>
            </div>
        </div>

        <div class="footer-contacto-column flex f-column peq-span-2">
            <div class="footer-phone-section flex">
                <img src="<?php echo(ICON. 'telefono-morado-icon.svg')?>" alt="footer-phone-icon" class="footer-phone-icon">
                <div class="contact-footer-number-container flex f-column">
                    <h4 class= "footer-number">Cel. 55 4037 0369</h4>
                    <h4 class= "footer-number">Cel. 55 2486 9444</h4>
                </div>
            </div>

            <div class="footer-mail-section flex">
                <img src="<?php echo(ICON. 'correo-morado-icon.svg')?>" alt="footer-mail-icon" class="footer-mail-icon">
                <div class="footer-mails-container flex f-column">
                    <h4 class="footer-mails-correo">notificaciones@frequencylex.mx</h4>
                    <h4 class="footer-mails-correo">adriana.cortes@frequencylex.mx</h4>
                    <h4 class="footer-mails-correo">bianidxi.resendiz@frequencylex.mx</h4>
                    <h4 class="footer-mails-correo">carlos.espinosa@frequencylex.mx</h4>
                </div>
            </div>

            <div class="footer-location-seccion flex">
                <img src="<?php echo(ICON. 'ubicacion-morado-icon.svg')?>" alt="footer-location-icon" class="footer-location-icon">
                <p class="ubicacion-text">Ángel Urraza 807, Primer Piso Col. del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX.</p>
            </div>
        </div>

            <div class="footer-menu-column flex f-column">
                <h4 class="footer-menu-title">Frequencylex</h4>
                <div class="menu-pie-menu-container">
                    <ul class="menu-pie-menu flex f-column">
                    <li class="menu-link-container">
                        <a href="<?php echo site_url('/nosotros'); ?>" class="menu-link-footer">Nosotros</a>
                    </li>
                    <li class="menu-link-container">
                        <a href="<?php echo site_url('/servicios'); ?>" class="menu-link-footer">Servicios</a>
                    </li>
                    <li class="menu-link-container">
                    <a href="<?php echo site_url('/contacto'); ?>" class="menu-link-footer">Contacto</a>
                    </li>
                    </ul>
                </div>
            </div>

            <div class="footer-mascota-container flex f-column">
                <img src="<?php echo(IMG.'MascotaCentada.webp')?>" alt="footer-mascota" class="footer-mascota">

                <div class="footer-mascota-icons-container">
                    <a href="#">
                        <img src="<?php echo(ICON. 'facebookBlanco.svg')?>" alt="footer-mascota-icon" class="flex face-icon footer-mascota-icon">
                    </a>

                    <a href="#">
                        <img src="<?php echo(ICON. 'insta-icon.svg')?>" alt="insta-icon" class="footer-mascota-icon">
                    </a>

                    <a href="#">
                        <img src="<?php echo(ICON. 'linkedin-icon-blanco.svg')?>" alt="footer-mascota-icon" class="footer-mascota-icon">
                    </a>

                    <a href="#">
                        <img src="<?php echo(ICON. 'whats-icon-blanco.svg')?>" alt="footer-mascota-icon" class="footer-mascota-icon">
                    </a>

                    <a href="#">
                        <img src="<?php echo(ICON. 'twiter-icon-blanco.svg')?>" alt="footer-mascota-icon" class="footer-mascota-icon">
                    </a>
                </div>
            </div>
    <?php wp_footer();?>
</footer>