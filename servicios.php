<?php
    /**
     * Template Name: Servicios
     * Type: page
     */
?>
<?php get_header();?>
<div class="contenedor-ancho page-content-container grid col-1">
    <section class="servicios-primera-seccion-wrapper contenedor-ancho grid col-1">
        <div class="servicios-primera-seccion-banner">
            <picture>
               <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'portadaMovil.webp')?>">
               <img srcset="<?php echo(IMG. 'mano-laptop-nueva.webp')?>" alt="banner-image" loading="lazy" class="home-banner-image">
            </picture>          
            <div class="servicios-banner-text-container flex f-column">
                <h2 class="servicios-banner-title titulo centrar">Servicios</h2>
                <p class="servicios-banner-description centrar">Contamos con un amplio catálogo de servicios para ayudarte con tus trámites en el sector de radiodifusión y telecomunicaciones</p>
                <h4 class="servicios-banner-subtitle centrar">¿Tienes tus trámites en regla? ¡Podemos ayudarte!</h4>
            </div>
        </div>
        <div class="servicios-segunda-seccion contenedor-ancho">
            <div class="servicios-segunda-seccion-banner-container">
                <picture>
                  <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'segundaSec-servicios-movil.webp')?>">
                  <img srcset="<?php echo(IMG. 'ondaAzulVerde.webp')?>" alt="banner-image" loading="lazy" class="servicios-segunda-seccion-image">
                </picture>
                <div class="servicios-segunda-seccion-content-container grid col-1">
                    <div class="servicios-segunda-seccion-titles-container flex f-column">
                        <h2 class="servicios-segunda-seccion-title centrar">Conoce cuales son nuestros servicios más populares</h2>
                        <h2 class="servicios-segunda-seccion-subtitle titulo centrar">Estos son los servicios más solicitados</h2>
                    </div>

                    <div class="servicios-segunda-seccion-opciones-container grid col-4">
                        <div class="servicios-segunda-seccion-opcion-container">
                            <div class="servicios-segunda-seccion-opcion-image-container">
                                <img class="servicios-segunda-seccion-opcion-image" src="<?php echo(ICON. 'torre-microfono-morado.svg')?>" alt="opcion-image">
                            </div>
                            <div class="servicios-segunda-seccion-opcion-text-container">
                                <div class="segunda-seccion-opcion-title-container">
                                    <h2 class="segunda-seccion-opcion-title contador" data-value="80">0</h2>
                                </div>
                                <div class="segunda-seccion-opcion-description-container">
                                    <p class="segunda-seccion-opcion-description">Solicitud de donación de equipos transmisores que hayan pasado a propiedad de la nación, como consecuencia de los supuestos establecidos en la Ley Federal de Telecomunicaciones y Radiodifusión.</p>
                                </div>
                            </div>
                        </div>

                        <div class="servicios-segunda-seccion-opcion-container">
                            <div class="servicios-segunda-seccion-opcion-image-container">
                                <picture>

                                </picture>
                                <img class="servicios-segunda-seccion-opcion-image" src="<?php echo(ICON. 'sello-papel-morado.svg')?>" alt="opcion-image">
                            </div>
                            <div class="servicios-segunda-seccion-opcion-text-container">
                                <div class="segunda-seccion-opcion-title-container">
                                    <h2 class="segunda-seccion-opcion-title contador" data-value="60">0</h2>
                                </div>
                                <div class="segunda-seccion-opcion-description-container">
                                    <p class="segunda-seccion-opcion-description">Presentación de información técnica, legal, programática y económica por parte de concesionarios (uso comercial, público, social incluyendo comunitarias e indígenas) de estaciones de radiodifusión (AM, FM y TDT).</p>
                                </div>
                            </div>
                        </div>

                        <div class="servicios-segunda-seccion-opcion-container">
                            <div class="servicios-segunda-seccion-opcion-image-container">
                                <img class="servicios-segunda-seccion-opcion-image" src="<?php echo(ICON. 'torre-morado.svg')?>" alt="opcion-image">
                            </div>
                            <div class="servicios-segunda-seccion-opcion-text-container">
                                <div class="segunda-seccion-opcion-title-container">
                                    <h2 class="segunda-seccion-opcion-title contador" data-value="45">0</h2>
                                </div>
                                <div class="segunda-seccion-opcion-description-container">
                                    <p class="segunda-seccion-opcion-description">Presentación anual de la información relativa a la fuente y destino de los ingresos de los concesionarios de uso social que presten el servicio de radiodifusión.</p>
                                </div>
                            </div>
                        </div>

                        <div class="servicios-segunda-seccion-opcion-container">
                            <div class="servicios-segunda-seccion-opcion-image-container">
                                <img class="servicios-segunda-seccion-opcion-image" src="<?php echo(ICON. 'radio-morado.svg')?>" alt="opcion-image">
                            </div>
                            <div class="servicios-segunda-seccion-opcion-text-container">
                                <div class="segunda-seccion-opcion-title-container">
                                    <h2 class="segunda-seccion-opcion-title contador" data-value="30">0</h2>
                                </div>
                                <div class="segunda-seccion-opcion-description-container">
                                    <p class="segunda-seccion-opcion-description">Pago anual para el uso de frecuencias del espectro radioeléctrico.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="servicios-quinta-seccion contenedor-ancho grid col-1">
        <div class="servicios-quinta-seccion-banner">
             <!-- <picture>
               <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'segundaSec-servicios-movil.webp')?>">
               <img srcset="<?php echo(IMG. 'Foto-debajo-de-la-torre.webp')?>" alt="banner-image" loading="lazy" class="home-banner-image">
            </picture> -->
            <div class="servicios-quinta-seccion-content-container grid col-1">
                <div class="servicios-quinta-seccion-titles-container flex f-column">
                    <h3 class="servicios-quinta-seccion-title centrar">Asesorías y trámites realizados</h3>
                    <h2 class="servicios-quinta-seccion-subtitle titulo centrar">“Soluciones en movimiento”</h2>
                </div>
                <div class="servicios-quinta-seccion-soluciones-container grid col-4">
                    <div class="quinta-seccion-solucion-container">
                        <p class="solucion-description centrar text-link">Presentación de los estatutos sociales con la inserción íntegra y expresa del Artículo 112 de la Ley Federal de Telecomunicaciones y Radiodifusión.</p>
                    </div>

                    <div class="quinta-seccion-solucion-container">
                        <p class="solucion-description centrar text-link">Presentación del aviso de las manifestaciones de los concesionarios y autorizados sobre el ejercicio de medición de los índices de calidad, de las estaciones de Televisión, Equipos Auxiliares y Complementarios.</p>
                    </div>

                    <div class="quinta-seccion-solucion-container">
                        <p class="solucion-description centrar text-link">Solicitud de inscripción de tarifas al público de los servicios de telecomunicaciones en el Registro Público de Concesiones, mediante el Sistema Electrónico de Registro de Tarifas.</p>
                    </div>

                    <div class="quinta-seccion-solucion-container">
                        <p class="solucion-description centrar text-link">Solicitud de presentación de renuncia de concesión, permiso o autorización en materia de telecomunicaciones y radiodifusión.</p>
                    </div>
                    <img src="<?php echo(IMG.'OndSeparador.png')?>" alt="" class="onda-servicios">
                </div>
                <div class="servicios-servicios-container">
                    <h2 class="servicios-title titulo centrar">Nuestro catálogo de servicios</h2>
                    <div class="servicios-opciones-container">
                        <div class="servicios-opcion-container flex">
                            <div class="servicios-rectangulo-container"></div>
                            <div class="servicios-opcion-text-container">
                                <a href="<?php echo site_url('#');?>" class="servicios-opcion-text">Notificación de Concentración.</a>
                            </div>
                        </div>

                        <div class="servicios-opcion-container flex">
                            <div class="servicios-rectangulo-container"></div>
                                <div class="servicios-opcion-text-container">
                                <a href="<?php echo site_url('#');?>" class="servicios-opcion-text">Solicitud de Licencia de Estación de Barco.</a>
                            </div>
                        </div>

                        <div class="servicios-opcion-container flex">
                            <div class="servicios-rectangulo-container"></div>
                            <div class="servicios-opcion-text-container">
                                <a href="<?php echo site_url('#');?>" class="servicios-opcion-text">Solicitud de Licencia de Estación de Aeronave.</a>
                            </div>
                        </div>

                        <div class="servicios-opcion-container flex">
                            <div class="servicios-rectangulo-container"></div>
                            <div class="servicios-opcion-text-container">
                                <a href="<?php echo site_url('#');?>" class="servicios-opcion-text">Solicitud de concesión única para uso comercial.</a>
                            </div>
                        </div>

                        <div class="servicios-opcion-container flex">
                            <div class="servicios-rectangulo-container"></div>
                            <div class="servicios-opcion-text-container">
                                <a href="<?php echo site_url('#');?>" class="servicios-opcion-text">Solicitud de asignación de numeración geográfica.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="servicios-sexta-seccion contenedor-ancho grid col-1"></section> -->

    <section class="servicios-septima-seccion contenedor-ancho grid col-1">
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

    <!-- <section class="servicios-octava-seccion contenedor-ancho grid col-1">
        <div class="servicios-octava-seccion-banner-container">
            <img src="<?php echo(IMG. 'fondo-suscribirse-nuevo.webp')?>" alt="" class="servicios-octava-seccion-banner-image">
            <div class="servicios-octava-seccion-content-container flex f-column">
                <div class="servicios-octava-seccion-title-container">
                    <h2 class="servicios-octava-seccion-title titulo centrar">Conoce más sobre nuestra amplia gama de servicios</h2>
                </div>
                <div class="servicios-octava-seccion-button-container flex">
                    <a href="#" class="servicios-octava-seccion-subtitle centrar text-link">Quiero saber más</a>
                </div>
            </div>
        </div>
    </section> -->
</div>
<?php get_footer();?> 