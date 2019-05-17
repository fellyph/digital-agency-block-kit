<?php
/**
 * Plugin Name: Digital agency kit
 * Plugin URI: https://blog.fellyph.com.br
 * Description: Digital agency kit — is a Gutenberg plugin created via create-guten-block.
 * Author: fellyph
 * Author URI: https://blog.fellyph.com.br
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Post type Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/register_post_type.php';

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
