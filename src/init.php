<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function products_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'products-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' )
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'products_cgb_block_assets' );


function products_cgb_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'products-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'products-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'products_cgb_editor_assets' );

/**
 * Enqueue block frontend JavaScript
 */
function frontend_assets() {
	wp_enqueue_script(
		'agency-kit-js',
		plugins_url( 'dist/blocks.frontend.js', dirname( __FILE__ ) ),
		array('wp-element', 'jquery'),
		filemtime( plugin_dir_path( __DIR__ )  . 'dist/blocks.frontend.js' ),
		true
	);

	wp_register_style( 'slick_css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
	wp_enqueue_style('slick_css');
}

add_action( "wp_enqueue_scripts", 'frontend_assets' );
