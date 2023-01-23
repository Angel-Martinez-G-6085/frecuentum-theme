<?php
define('THEMEPATH', get_template_directory_uri());
define('IMG', THEMEPATH . '/assets/images/');
define('ICON', THEMEPATH . '/assets/icons/');

if ( ! function_exists( 'frequentumtheme_setup' ) ) :

	function frequentumtheme_setup() {
        /**
		 * Make theme available for translation.
		 * Translations can be placed in the /languages/ directory.
		 */
		load_theme_textdomain( 'frequentum', get_template_directory() . '/languages' );

		/**
		 * Add default posts and comments RSS feed links to <head>.
		 */
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for post thumbnails and featured images.
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Add support for two custom navigation menus.
		 */
		register_nav_menus( array(
			'header_menu'   => __( 'Header Menu', 'frequentum' ),
			'footer_menu' => __( 'Footer Menu', 'frequentum' ),
		) );

		/**
		 * Enable support for the following post formats:
		 * aside, gallery, quote, image, and video
		 */
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'quote', 'image', 'video' ) );

        add_filter('show_admin_bar', '__return_false');
	}
endif; // myfirsttheme_setup
add_action( 'after_setup_theme', 'frequentumtheme_setup' );

// Agregamos los includes esenciales
require_once('includes/load_styles_script.php');
require_once('includes/load_js_scripts.php');
