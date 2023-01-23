<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequentum</title>
    <?php wp_head();?>
</head>
<body>
    <?php get_template_part('parts/whatssapButton');?> 
    <header class="header">
        <nav class="header__nav">
            <div class="header__nav__logos-container">
                <div class="nav__mascota-container">
                    <img class="mascota" src="<?php echo(IMG . 'personaje-header.svg');?>" alt="mascota">
                </div>
                <div class="nav-frequentum-container">
                    <a href="<?php echo site_url('/inicio'); ?>">
                        <img class="nav-logo" src="<?php echo(IMG. 'Imagotipo-FREQUENTUM-1.svg')?>" alt="nav-logo">
                    </a>
                </div>
                <div class="nav-movil-button-container">
                    <img class="nav-movil-icon" src="<?php echo(IMG. 'movil-icon.svg')?>" alt="nav-logo">
                </div>
            </div>

            <div class="menu-top-container">
                <ul class="nav__menu grid col-4">
                    <div class="menu-cerrar-button-container">
                        <img class="nav-movil-cerrar-icon" src="<?php echo(IMG. 'x-icon-movil.svg')?>" alt="nav-logo">
                    </div>
                    <li class="menu-link inicio-link">
                        <a href="<?php echo site_url('/inicio'); ?>">Inicio</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/nosotros'); ?>">Nosotros</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/servicios'); ?>">Servicios</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/contacto'); ?>">Contacto</a>
                    </li>
                    <li class="menu-link">
                        <a href="<?php echo site_url('/inicio'); ?>">Agenda una llamada</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>