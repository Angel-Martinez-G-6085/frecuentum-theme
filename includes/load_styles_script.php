<?php
// Register Style
function frequentum_custom_styles() {

    wp_register_style( 'mainStyle', get_template_directory_uri() . '/css/main.css', false, '1.0' );

    wp_enqueue_style( 'mainStyle' );

}
add_action( 'wp_enqueue_scripts', 'frequentum_custom_styles' );