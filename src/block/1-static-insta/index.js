//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'agencykit/static-insta', {

	title: __( 'Social Card' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Social' ),
		__( 'Social media' ),
		__( 'Instagram' ),
	],

	edit: ( { className } ) => {
		return (
			<div className={ className }>
				<h3 className={ 'title' }>{ __( 'Instagram profile' ) }</h3>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className }>
				<h3 className={ 'title' }>
					<a href="http://instagram.com/fellyph"> { __( 'Follow me' ) }</a>
				</h3>
			</div>
		);
	},
} );
