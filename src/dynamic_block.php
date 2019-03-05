<?php

function render_product( $attributes ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => $attributes['quantity'],
		'post_type'   => 'agency_product',
	) );

    if ( count( $recent_posts ) === 0 ) {
        return __('No posts');
	}

	$output = '<ul class="product-list">';
    foreach( $recent_posts as $recent ){
		$output .= '<li><a href="' . get_permalink($recent["ID"]) .'">' .
			$recent["post_title"]. '</a> </li> ';
	}
	$output .= '</ul>';

    return $output;
}

register_block_type( 'agencykit/dynamic-characters', array(
    'render_callback' => 'render_product',
) );
