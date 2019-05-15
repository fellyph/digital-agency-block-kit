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
		__( 'Social Share' ),
	],

	edit: ( { className } ) => {
		return (
			<div className={ className }>
				<h3 className={ 'title' }>{ __( 'Instagram profile' ) }</h3>
			</div>
		);
	},

	save: ( { className, props } ) => {
		console.log( props );
		return (
			<div className={ className }>
				<h3 className={ 'title' }>
					<a href="https://twitter.com/share?url=https%3A%2F%2Fblog.fellyph.com.br%2F&text=Blog%20fellyph%20Cintra&via=fellyph">{ __( 'Tweet a link to this page' ) } props</a>
					<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.fellyph.com.br%2F">{ __( 'Share on Facebook' ) }</a>
					<a href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fblog.fellyph.com.br%2F&title=Blog%20fellyph%20Cintra">{ __( 'Share on Linkedin' ) }</a>
				</h3>
			</div>
		);
	},
} );
