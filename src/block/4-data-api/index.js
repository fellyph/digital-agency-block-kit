//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { select } = wp.data;

registerBlockType( 'agencykit/apidata-social', {

	title: __( 'Data-api Social Card' ),
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
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Data API social Card' ) }</h2>
				<button className={ 'mdc-button mdc-button--raised' } >
					<span className={ 'mdc-button__label' } >{ __( 'Tweet it' ) }</span>
				</button>
				<button className={ 'mdc-button mdc-button--raised' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Facebook' ) }</span>
				</button>
				<button className={ 'mdc-button mdc-button--raised' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Linkedin' ) }</span>
				</button>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Data API social Card' ) }</h2>
				<a href={ `https://twitter.com/share?url=${ select( 'core/editor' ).getPermalink() }` }
					target="_blank"
					className={ 'mdc-button mdc-button--raised' } >
					<span className={ 'mdc-button__label' } >{ __( 'Tweet it' ) }</span>
				</a>
				<a href={ `https://www.facebook.com/sharer/sharer.php?u=${ select( 'core/editor' ).getPermalink() }` }
					target="_blank"
					className={ 'mdc-button mdc-button--raised' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Facebook' ) }</span>
				</a>
				<a href={ `http://www.linkedin.com/shareArticle?url=${ select( 'core/editor' ).getPermalink() }
					&title=Blog%20fellyph%20Cintra` }
					target="_blank"
					className={ 'mdc-button mdc-button--raised' }>
					<span className={ 'mdc-button__label' } >{ __( 'Share on Linkedin' ) }</span>
				</a>
			</div>
		);
	},
} );
