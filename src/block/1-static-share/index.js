//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'agencykit/static-social', {

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
			<div className={ className + ' mdc-card' }>
				<a href="https://twitter.com/share?url=https%3A%2F%2Fblog.fellyph.com.br%2F&text=Blog%20fellyph%20Cintra&via=fellyph" className={ 'mdc-button' } >
					<span className={ 'mdc-button__label' } >{ __( 'Tweet it' ) }</span>
				</a>
				<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.fellyph.com.br%2F" className={ 'mdc-button' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Facebook' ) }</span>
				</a>
				<a href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fblog.fellyph.com.br%2F&title=Blog%20fellyph%20Cintra" className={ 'mdc-button' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Linkedin' ) }</span>
				</a>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<a href="https://twitter.com/share?url=https%3A%2F%2Fblog.fellyph.com.br%2F&text=Blog%20fellyph%20Cintra&via=fellyph" className={ 'mdc-button' } >
					<span className={ 'mdc-button__label' } >{ __( 'Tweet it' ) }</span>
				</a>
				<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.fellyph.com.br%2F" className={ 'mdc-button' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Facebook' ) }</span>
				</a>
				<a href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fblog.fellyph.com.br%2F&title=Blog%20fellyph%20Cintra" className={ 'mdc-button' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Linkedin' ) }</span>
				</a>
			</div>
		);
	},
} );
