<?php
// Register Script
function frequentum_custom_scripts() {
// Registro todos los archivos js necesarios para la web
	wp_register_script( 'jqueryScript', get_template_directory_uri() . '/libs/jquery.js', false, '1.0', true );
    wp_register_script( 'formulario', get_template_directory_uri() . '/js/formulario/formulario.js', false, '1.0', true );
    wp_register_script( 'ajax-modal', get_template_directory_uri() . '/js/modal/ajax-modal.js', false, '1.0', true );
    wp_register_script( 'modal', get_template_directory_uri() . '/js/modal/modal.js', false, '1.0', true );
    wp_register_script( 'menuScript', get_template_directory_uri() . '/js/nav-menu/Menu.js', false, '1.0', true );
    wp_register_script( 'sliderEquipoScript', get_template_directory_uri() . '/js/nosotros/sliderEquipo.js', false, '1.0', true );
    wp_register_script( 'contadorServiciosScript', get_template_directory_uri() . '/js/servicios/contador.js', false, '1.0', true );
    wp_register_script( 'contactoSliderScript', get_template_directory_uri() . '/js/contacto/contactoSlider.js', false, '1.0', true );
    wp_register_script( 'main-script', get_template_directory_uri() . '/js/main.js', array('jqueryScript', 'menuScript', 'sliderEquipoScript', 'contadorServiciosScript', 'contactoSliderScript','formulario', 'modal', 'ajax-modal'), '1.0', true );

    // Cargo el script principal
    $Ajax_object = array(
        'ajax_url' => admin_url( 'admin-ajax.php', 'relataive')
    );
    wp_localize_script( 'ajax-modal', 'ajax_object', $Ajax_object );
    wp_enqueue_script( 'main-script' );
    wp_localize_script( 'modal', 'urlTheme', $translation_array);

}
add_action( 'wp_enqueue_scripts', 'frequentum_custom_scripts' );