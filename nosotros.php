<?php
    /**
     * Template Name: Nosotros
     * Type: page
     */
?>
<?php get_header();?>
<div class="page-content-container contenedor-ancho grid col-1">
    <section class="nosotros-banner-container">
        <picture>
            <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'nosotros-movil.webp')?>">
            <img src="<?php echo(IMG. 'nosotros-nuevo.webp')?>" alt="nosotros-banner-image" class="nosotros-banner-image">
        </picture>
        <div class="nosotros-banner-text-container flex f-column">
            <h2 class="nosotros-banner-title titulo centrar">Nosotros</h2>
            <h3 class="nosotros-banner-subtitle centrar">Somos un equipo de profesionales en el sector de las telecomunicaciones y radiodifusión.</h3>
        </div>
    </section>

    <section class="nosotros-segunda-seccion contenedor-ancho grid col-1">
        <img src="<?php echo(IMG. 'ondaAzulVerde.webp')?>" alt="nosotros-image" class="nosotros-segunda-seccion-image">
        <div class="nosotros-segunda-seccion-content-container grid col-1">
            <div class="nosotros-segunda-seccion-text-container flex f-column">
                <h4 class="nosotros-segunda-seccion-title centrar">¿Quiénes somos?</h4>
                <p class="nosotros-segunda-seccion-subtitle">En FREQUENTUM Consultoría, S.C., somos una consultoría boutique, con un equipo que cuenta con más de 15 años de experiencia en el sector regulatorio de la radiodifusión y las telecomunicaciones, nuestro objetivo es brindar a nuestros clientes servicios jurídicos, técnicos y administrativos especializados.</p>
            </div>
    </section>

    <!-- <section class="nosotros-septima-seccion contenedor-ancho grid col-1 peq-col-1">
        <div class="nosotros-septima-seccion-titles-container">
            <h2 class="nosotros-septima-seccion-title centrar">Nuestro equipo</h2>
            <h3 class="nosotros-septima-seccion-subtitle centrar">Ellos son una parte importante para nosotros, ya que trabajando junto con ellos buscamos darles una mejor calidad de atención</h3>
        </div>
        <div class="nosotros-equipo-container">
            <div class="nosotros-equipo-slider-container">
                <div class="nosotros-equipo-slider flex">
                    <div class="slider-section section-1 flex">
                        <div class="team-member-card grid">
                            <div class="team-description-container flex f-column">
                                <div class="team-member-info">
                                    <p class="team-member-description flex f-column">Licenciada en Derecho con especialización en Derecho Administrativo, ambas, por la Universidad Nacional Autónoma de México, con más de 10 años de experiencia en regulación de los servicios públicos de radiodifusión y telecomunicaciones.</p>
                                    <h2 class="team-name centrar">Bianidxi Resendiz</h2>
                                </div>
                                
                                <div class="team-member-icons-container flex">
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'whattsIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'facebook-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'instagramIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'twiter-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'linkedin-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                </div>
                            </div>
                            <div class="team-foto-container persona-1"></div>
                        </div>
                    </div>

                    <div class="slider-section section-2 flex">
                        <div class="team-member-card grid">
                            <div class="team-description-container flex f-column">
                                <div class="team-member-info">
                                    <p class="team-member-description flex f-column">Licenciada en Derecho con especialización en Derecho Administrativo, ambas, por la Universidad Nacional Autónoma de México, con más de 10 años de experiencia en regulación de los servicios públicos de radiodifusión y telecomunicaciones.</p>
                                    <h2 class="team-name centrar">Carlos Espinosa Reyna</h2>
                                </div>
                                
                                <div class="team-member-icons-container flex">
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'whattsIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'facebook-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'instagramIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'twiter-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'linkedin-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                </div>
                            </div>
                            <div class="team-foto-container persona-2"></div>
                        </div>
                    </div>

                    <div class="slider-section section-2 flex">
                        <div class="team-member-card grid">
                            <div class="team-description-container flex f-column">
                                <div class="team-member-info">
                                    <p class="team-member-description flex f-column">Licenciada en Derecho con especialización en Derecho Administrativo, ambas, por la Universidad Nacional Autónoma de México, con más de 10 años de experiencia en regulación de los servicios públicos de radiodifusión y telecomunicaciones.</p>
                                    <h2 class="team-name centrar">Adriana Cortés Espidio</h2>
                                </div>
                                
                                <div class="team-member-icons-container flex">
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'whattsIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'facebook-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a href="#">
                                        <img src="<?php echo(ICON. 'instagramIcon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'twiter-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                    <a target="_blank" href="#">
                                        <img src="<?php echo(ICON. 'linkedin-icon.svg')?>" alt="" class="team-card-icon">
                                    </a>
                                </div>
                            </div>
                            <div class="team-foto-container persona-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="<?php echo(ICON. 'flecha_azul_derecha.svg')?>" alt="" class="flecha-azul-derecha flecha-azul">
            <img src="<?php echo(ICON. 'flecha_azul_izquierda.svg')?>" alt="" class="flecha-azul-izquierda flecha-azul">
        </div>
    </section> -->

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

    <section class="nosotros-octava-seccion contenedor-ancho grid col-1">
        <div class="nosotros-octava-seccion-image-container">
            <img src="<?php echo(IMG. 'nosotros-footer-image.webp')?>" alt="" class="nosotros-octava-seccion-image">
            <div class="nosotros-octava-seccion-titles-container flex f-column">
                <h2 class="nosotros-octava-seccion-subtitle centrar titulo">Queremos brindarte una asesoría personalizada</h2>
                <a href="#" class="nosotros-octava-seccion-title centrar">Conoce nuestra herramienta</a>
            </div>
        </div>
    </section>
</div>
<?php get_footer();?>