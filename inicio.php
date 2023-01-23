<?php /* Template Name: Inicio */ ?>
<?php get_header();?>
<div class="contenedor-ancho page-content-container grid col-1">
    <section class="home-banner-container contenedor-ancho grid col-1">
        <picture>
            <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'prueba-movil.webp')?>">
            <img srcset="<?php echo(IMG. 'torre-radio.webp')?>" alt="banner-image" loading="lazy" class="home-banner-image">
        </picture>

        <div class="banner-container contenedor-ancho flex f-column">
            <img class="Imagotipo" loading="lazy" src="<?php echo(IMG. 'Imagotipo-FREQUENTUM-1.svg')?>" alt="Imagotipo">
            <h3 class="hero-subtitle flex">"Soluciones en movimiento"</h3>
        </div>
    </section>

    <section class="home-tercera-seccion-container contenedor-ancho grid col-2 peq-col-1">

        <div class="tercera-seccion-text">
            <div class="seccion-tres-title-container">
                <h2 class="seccion-tres-title centrar">Estamos comprometidos</h2>
            </div>
            <div class="seccion-tres-description-container">
                <p class="seccion-tres-description centrar">Como profesionales nos comprometemos a ofrecer un servicio enfocado a dar solución a todo tipo de necesidades relacionadas con la prestación de servicios en telecomunicaciones y radiodifusión.</p>
            </div>
        </div>

        <div class="tercera-seccion-cards grid col-2 peq-col-1">
            <div class="tercera-seccion-card flex f-column">
                <div class="tercera-seccion-icon-card-container">
                    <img loading="lazy" class="icon-card" src="<?php echo(ICON. 'copa.svg')?>" alt="">
                </div>
                <div class="tercera-seccion-text-card-container">
                    <h2 class="tercera-seccion-title-card">Conoce todo sobre tu trámite</h2>
                    <p class="tercera-seccion-description-card">Abarcando de forma extensa los servicios, trámites y servicios ligados a las telecomunicaciones y la radiodifusión.</p>
                </div>
            </div>

            <div class="tercera-seccion-card flex f-column">
                <div class="tercera-seccion-icon-card-container">
                    <img loading="lazy" class="icon-card" src="<?php echo(ICON. 'copa.svg')?>" alt="">
                </div>
                <div class="tercera-seccion-text-card-container">
                    <h2 class="tercera-seccion-title-card">Conoce nuestros principales servicios</h2>
                    <p class="tercera-seccion-description-card">Soluciones a medida para usuarios que brindan servicios relacionados a las telecomunicaciones y la radiodifusión.</p>
                </div>
            </div>
        </div>

        <div class="tercera-seccion-second-column">
            <div class="tercera-seccion-image-container">
                <img class="foto-torre" src="<?php echo(IMG. 'Foto torre.webp')?>" alt="foto-torre">
            </div>
        </div>
        <div class="tercera-seccion-buttons-container grid col-2">
                <div class="tercera-seccion-button-container">
                    <a class="tercera-seccion-button button" href="<?php echo site_url('/herramienta');?>">Conoce más</a>
                </div>

                <div class="tercera-seccion-button-container">
                    <a class="tercera-seccion-button button" href="<?php echo site_url('/servicios');?>">Servicios</a>
                </div>
            </div>
    </section>

    <section class="home-cuarta-seccion-container contenedor-ancho grid col-1">
        <picture>
            <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'foto-parabolica-movil.webp')?>">
            <img loading="lazy" src="<?php echo(IMG. 'foto-parabolica-nueva.webp')?>" alt="cuarta-seccion-image" class="cuarta-seccion-banner-image">
        </picture>

        <div class="cuarta-seccion-content-container grid col-1">
            <div class="cuarta-seccion-titles-container flex f-column">
                <h2 class="cuarta-seccion-title titulo centrar">Nos respalda nuestra experiencia</h2>
                <h4 class="cuarta-seccion-subtitle centrar">Nuestro equipo cuenta con más de 15 años de experiencia en el sector regulatorio en temas de radiodifusión y telecomunicaciones.</h4>
            </div>
            <div class="segunda-mitad">
                <div class="cuarta-seccion-objetivos grid col-5 peq-col-1">
                    <div class="objetivo flex f-column">
                        <img class="objetivo-icon" src="<?php echo(ICON. 'flechaDiana.svg')?>" alt="objetivo-icon">
                        <div class="objetivo-text-container flex f-column">
                            <div class="objetivo-title-container">
                                <h2 class="objetivo-title centrar">Misión</h2>
                            </div>
                            <div class="objetivo-text-container flex">
                                <div class="objetivo-description-container flex">
                                    <p class="objetivo-description centrar">Brindar a nuestros clientes asesoría especializada en nuestras áreas de experiencia para el logro de los objetivos de la empresa.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cuarta-seccion-onda flex">
                        <img class="OndSeparador" src="<?php echo(IMG. 'OndSeparador.png')?>" alt="OndSeparador">
                    </div>

                    <div class="objetivo flex f-column">
                        <img class="objetivo-icon" src="<?php echo(ICON. 'ojoMorado.svg')?>" alt="objetivo-icon">
                        <div class="objetivo-text-container flex f-column">
                            <div class="objetivo-title-container">
                                <h2 class="objetivo-title centrar">Visión</h2>
                            </div>
                            <div class="objetivo-text-container flex">
                                <div class="objetivo-description-container flex">
                                    <p class="objetivo-description centrar">Somos una opción innovadora para los concesionarios, autorizados e interesados en la prestación de los servicios públicos de telecomunicaciones y radiodifusión.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cuarta-seccion-onda flex">
                        <img class="OndSeparador" src="<?php echo(IMG. 'OndSeparador.png')?>" alt="OndSeparador">
                    </div>

                    <div class="objetivo flex f-column">
                        <img class="objetivo-icon" src="<?php echo(ICON. 'manoMorada.svg')?>" alt="objetivo-icon">
                        <div class="objetivo-text-container flex f-column">
                            <div class="objetivo-title-container">
                                <h2 class="objetivo-title centrar">Valores</h2>
                            </div>
                            <div class="objetivo-text-container flex">
                                <div class="objetivo-description-container flex">
                                    <p class="objetivo-description centrar">Nos define el profesionalismo, experiencia, disciplina, responsabilidad y honestidad.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home-quinta-seccion-container contenedor-ancho grid col-1">
        <div class="home-quinta-seccion-content-container grid col-2 peq-col-1">
            <div class="quinta-seccion-image-container">
                <img class="quinta-seccion-image" src="<?php echo(IMG. 'imagenMano.webp')?>" alt="computadora-mano">
            </div>
            <div class="quinta-seccion-content-container">
                <div class="quinta-seccion-titles">
                    <h2 class="quinta-seccion-title titulo">Algunos de nuestros servicios son:</h2>
                </div>

                <div class="quinta-seccion-servicios-container grid col-1">
                    <a href="<?php echo site_url('/herramienta')?>" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'mano-libro-blanco.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Trámites y procedimientos especializados ante el Instituto Federal de Telecomunicaciones (IFT), Instituto Nacional Electoral (INE), Secretaría de Gobernación (SEGOB), Agencia Federal de Aviación Civil (AFAC), Organismo Promotor de Inversiones en Telecomunicaciones (PROMTEL), y Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS).</p>
                    </a>

                    <a href="<?php echo site_url('/herramienta')?>;" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'tabla-check.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Asesoría y trámites para la obtención de concesiones de uso público, social (incluyendo las comunitarias e Indígenas) y para uso privado; para prestar servicios de telecomunicaciones y radiodifusión.</p>
                    </a>

                    <a href="<?php echo site_url('/herramienta')?>;" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'torre-libros-blancos.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Asesoría y seguimiento para la obtención de autorizaciones para establecer, operar y explotar una comercializadora de servicios de telecomunicaciones.</p>
                    </a>

                    <a href="<?php echo site_url('/herramienta')?>;" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'radio-blanco.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Seguimiento y asesoría especializada para el cumplimiento de obligaciones ante las autoridades mencionadas en términos de la basta normatividad aplicable en la materia.</p>
                    </a>

                    <a href="<?php echo site_url('/herramienta')?>;" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'cabeza-lapiz.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Atención especializada a concesionarios para uso público para el cumplimiento de sus obligaciones.</p>
                    </a>

                    <a href="<?php echo site_url('/herramienta')?>;" class="quinta-seccion-servicio flex">
                        <img class="quinta-seccion-servicio-icon" src="<?php echo(ICON. 'tabla-blanca.svg')?>" alt="selloLapiz">
                        <p class="quinta-seccion-servicio-description">Asesoría y trámites de acceso a la multiprogramación.</p>
                    </a>

                    <div class="quinta-seccion-content-buttons-container flex">
                        <div class="quinta-seccion-button">
                            <a href="<?php echo site_url('/servicios'); ?>" class="button">Servicios</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="octava-seccion-container contenedor-ancho grid col-1">
        <div class="octava-seccion-image-container">
            <picture>
                <source media="(max-width: 576px)" srcset="<?php echo(IMG. 'contacto-nuevo-movil.webp')?>">
                <img src="<?php echo(IMG. 'contacto-nuevo.webp')?>" alt="octava-seccion-image" class="octava-seccion-image">
            </picture>
            <div class="octava-seccion-titles-container flex f-column">
                <h3 class="octava-seccion-title centrar">¿Dónde nos encontramos?</h3>
                <h2 class="sexta-seccion-subtitle titulo centrar">Contáctanos y obtén la asesoría que necesitas</h2>
                <div class="octava-seccion-button-container flex">
                    <a href="#" class="octava-seccion-button button">Conócenos</a>
                </div>
            </div>
        </div>
    </section>

    <section class="seccion-mapa-container contenedor-ancho grid col-1">
        <div class="mapa-seccion-titles-container">
            <h2 class="mapa-seccion centrar">Te invitamos</h2>
            <h3 class="mapa-seccion-subtitles centrar">A descubrir más sobre nosotros y los servicios que ofrecemos.</h3>
        </div>
        <div class="maps_and_icons_container contenedor-ancho peq-col-1">
            <div class="mapa-container">
                <iframe class="map_frame_container" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.686211710604!2d-99.16857458561866!3d19.382735047297054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffa038a977e3%3A0xc9ceb41bef9d7f55!2sAngel%20Urraza%20807%2C%20Col%20del%20Valle%20Centro%2C%20Benito%20Ju%C3%A1rez%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1672792416181!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="maps-icon-container flex f-column">
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'autoBlanco.svg')?>" alt="auto-blanco">
                </a>
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'whattsIcon.svg')?>" alt="whattsIcon">
                </a>
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'facebook-icon.svg')?>" alt="facebook-blanco">
                </a>
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'twiter-icon.svg')?>" alt="twiter-blanco">
                </a>
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'linkedin-icon.svg')?>" alt="linkedin-blanco">
                </a>
                <a href="#">
                    <img class="maps-icon" src="<?php echo(ICON. 'telefonoBlanco.svg')?>" alt="telefono-blanco">
                </a>
            </div>
        </div>
            <?php get_footer();?>
    </section>
</div>