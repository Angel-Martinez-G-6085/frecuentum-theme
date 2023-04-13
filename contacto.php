<?php
    /**
     * Template Name: Contacto
     * Type: page
     */
?>

<?php get_header();?>
<div class="page-content-container contenedor-ancho grid col-1">
    <section class="contact-primera-seccion-wrapper contenedor-ancho grid col-1">
        <div class="contact-primera-seccion-banner">
            <picture>
                <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'contacto-portada-movil.webp')?>">
                <img src="<?php echo(IMG. 'contacto-portada.webp')?>" alt="" class="contact-primera-seccion-banner-image">
            </picture>
            <div class="contact-primera-seccion-content-container grid col-1">
                <div class="primeros-textos">
                    <h2 class="contact-primera-seccion-title titulo centrar">¿Cómo podemos ayudarte?</h2>
                    <p class="contact-primera-seccion-description centrar">¡Estás en el lugar correcto! Somos profesionales y expertos en materia jurídica y tecnológica en temas regulatorios ligados a las telecomunicaciones y la radiodifusión.</p>
                    <h4 class="contact-primera-seccion-ultimo-texto centrar text-link">Conoce todo sobre tu concesión</h4>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-segunda-seccion-container contenedor-ancho grid col-1">
        <div class="contact-segunda-seccion-banner-container">
            <picture>
                <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'Contacto-movil.webp')?>">
                <img src="<?php echo(IMG. 'Contacto-degradado.webp')?>" alt="" class="contact-segunda-seccion-banner-image">
            </picture>
            <div class="contact-segunda-seccion-content-container flex">
                <div class="contact-segunda-seccion-container">
                    <div class="contact-segunda-seccion-columns-container grid col-2 peq-col-1">
                        <div class="contact-opciones-container flex f-column">

                            <div class="opciones-titles-container">
                                <h2 class="opciones-title">Contáctanos ahora</h2>
                                <!-- <h3 class="opciones-subtitle">Estás a un click de resolver tus dudas de forma personalizada</h3> -->
                            </div>

                            <div class="opciones-container">
                                <div class="herramienta-container">
                                    <img src="<?php echo(ICON . 'calendario.svg')?>" alt="calendario-icon" class="herramienta-image">
                                    <a href="#" class="abrir-modal-link modal-global herramienta-title text-link">Conoce nuestra herramienta</a>
                                </div>
                            </div>

                            <div class="llamada-container">
                                <img src="<?php echo(ICON . 'audifonos.svg')?>" alt="agenda" class="agenda-image">
                                <a href="#" class="abrir-modal-link modal-agenda-llamada llamada-title text-link">Agenda una llamada</a>
                            </div>

                            <div class="consultora-container">
                                <img src="<?php echo(ICON . 'personas-blanco.svg')?>" alt="personas-blanco" class="personas-blanco-image">
                                <a target="_blank" href="https://wa.me/5215540370369" class="consultora-title text-link">Hablar con un consultor ahora</a>
                            </div>
                        </div>

                        <div class="contact-opciones-contacto-container">
                            <div class="contacto-container flex f-column">

                                <div class="opciones-titles-container">
                                        <h3 class="opciones-subtitle">Estás a un click de resolver tus dudas de forma personalizada</h3>
                                </div>

                                <div class="ubicacion-1-container flex"> 

                                    <div class="ubicacion-icon-container">
                                        <img src="<?php echo(ICON . 'ubicacion-morado-icon.svg')?>" alt="ubicacion" class="ubicacion-icon">
                                    </div>
                                    <div class="ubicacion-text-container">
                                        <h2 class="ubicacion-title">Ubicación</h2>
                                        <p class="ubicacion-address">Ángel Urraza 807, Primer Piso Col. del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX.</p>
                                    </div>
                                </div>
                                
                                <div class="celular-container flex">
                                    <div class="celular-icon-container">
                                        <img src="<?php echo(ICON. 'telefono-morado-icon.svg')?>" alt="telefono" class="telefono-icon">
                                    </div>
                                    <div class="telefono-text-container">
                                        <h2 class="telefono-title">Celular</h2>
                                        <p class="telefonos">
                                            Cel. 55 4037 0369<br>
                                            Ofic. 55 2486 9444<br>
                                        </p>
                                    </div>
                                </div>

                                <div class="correo-container flex">
                                    <div class="correo-icon-container">
                                        <img src="<?php echo(ICON. 'correo-morado-icon.svg')?>" alt="correo" class="correo-icon">
                                    </div>
                                    <div class="correo-text-container">
                                        <h2 class="correo-title">Correo</h2>
                                        <div class="correos">
                                            <h4 class="correo">notificaciones@frequencylex.mx</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="nosotros-sexta-seccion contenedor-ancho grid col-1">
        <div class="slider-container contenedor-ancho">
            <div data-show="1" class="tormenta-image-container image-container slider-item">
                <img src="<?php echo(IMG.'tormenta.webp')?>" alt="" class="tormenta-image">
                <div class="tormenta-text-container slider-text-container tormenta-text-container">
                    <div class="slider-comilla-container comilla-arriba-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comilla-arriba">
                    </div>
                    <p class="titulo-slider">Mi cerebro es solo un receptor, en el universo hay un núcleo del cual obtenemos conocimiento, fuerza e inspiración.</p>
                    <div class="slider-comilla-container comilla-abajo-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comillas-abajo">
                    </div>
                    <h3 class="autor-slider">Nikola Tesla</h3>
                    <h3 class="autor-slider">Inventor, ingeniero mecánico, eléctrico y físico</h3>
                </div>
            </div>

            <div data-show="0" class="persona-sentada-container image-container slider-item">
                <img src="<?php echo(IMG.'persona-sentada.webp')?>" alt="" class="tormenta-image">
                <div class="tormenta-text-container slider-text-container">
                    <div class="slider-comilla-container comilla-arriba-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comilla-arriba">
                    </div>
                    <p class="titulo-slider">El poder de la radio no es hablarle a millones de personas, sino hablarle de forma íntima y privada a cada una de ellas.</p>
                    <div class="slider-comilla-container comilla-abajo-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comillas-abajo">
                    </div>
                    <h3 class="autor-slider">Hallie Flanagan</h3>
                    <h3 class="autor-slider"></h3>
                </div>
            </div>

            <div data-show="0" class="memoria-container image-container slider-item">
                <img src="<?php echo(IMG.'memoria.webp')?>" alt="" class="tormenta-image">
                <div class="tormenta-text-container slider-text-container">
                    <div class="slider-comilla-container comilla-arriba-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comilla-arriba">
                    </div>
                    <p class="titulo-slider">La comunicación sólo es efectiva cuando resulta significativa para el destinatario, no para nosotros mismos.</p>
                    <div class="slider-comilla-container comilla-abajo-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comillas-abajo">
                    </div>
                    <h3 class="autor-slider">Rich Simmonds</h3>
                    <h3 class="autor-slider"></h3>
                </div>
            </div>

            <div data-show="0" class="cables-image-container image-container slider-item">
                <img src="<?php echo(IMG.'cables.webp')?>" alt="" class="tormenta-image">
                <div class="tormenta-text-container slider-text-container">
                    <div class="slider-comilla-container comilla-arriba-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comilla-arriba">
                    </div>
                    <p class="titulo-slider">Lo más importante en la comunicación es escuchar lo que se dice</p>
                    <div class="slider-comilla-container comilla-abajo-container">
                        <img src="<?php echo(ICON. "comillas 1.svg")?>" alt="" class="slider-comillas-abajo">
                    </div>
                    <h3 class="autor-slider">Peter Drucker</h3>
                    <h3 class="autor-slider">Abogado</h3>
                </div>
            </div>
        </div>
    </section>
    <?php get_footer();?>
</div>