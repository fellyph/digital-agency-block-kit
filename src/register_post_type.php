<?php function agency_custom_post_type() {
	register_post_type('agency_product',
		array('labels'=> array('name'=> __('Characters'),
				'singular_name'=> __('Character'),
			),
			'public'=> true,
			'has_archive'=> true,
			'show_in_rest'=> true,
			'supports'=> array('title',
				'editor',
				'thumbnail',
				'excerpt',
			),
		));
}

add_action('init', 'agency_custom_post_type');
