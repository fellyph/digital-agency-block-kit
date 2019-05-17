//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'agencykit/static-social-pwa', {

	title: __( 'Social Card - PWA' ),
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
				<ul className={ 'socialList' }>
					<li>{ __( 'Tweet it' ) }</li>
					<li>{ __( 'Share on Facebook' ) }</li>
					<li>{ __( 'Share on Linkedin' ) }</li>
				</ul>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className }>
				<ul className={ 'social-links' }>
					<li><a href="https://twitter.com/share?url=https%3A%2F%2Fblog.fellyph.com.br%2F&text=Blog%20fellyph%20Cintra&via=fellyph">{ __( 'Tweet it' ) }</a></li>
					<li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.fellyph.com.br%2F">{ __( 'Share on Facebook' ) }</a></li>
					<li><a href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fblog.fellyph.com.br%2F&title=Blog%20fellyph%20Cintra">{ __( 'Share on Linkedin' ) }</a></li>
				</ul>
				<button className={ 'share-button' }>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125">
						<path fill="#FFFFFF" d="M74.433,25.124c-0.552-0.119-1.114-0.134-1.67-0.07l-19.558,0.108c-2.65,0.015-4.787,2.176-4.772,4.824  c0.017,2.646,2.171,4.784,4.824,4.767l8.251-0.046l0.418-0.003l-12.779,12.78c-1.919,1.919-1.919,5.03,0,6.947  c1.919,1.918,5.026,1.918,6.947,0L68.92,41.607l-0.002,0.183l0.023,8.472c0.017,2.644,2.175,4.78,4.819,4.766  c2.65-0.015,4.786-2.174,4.771-4.822l-0.11-19.624c0.051-0.537,0.022-1.074-0.096-1.604c-0.19-1.044-0.71-1.979-1.463-2.669  C76.198,25.701,75.36,25.283,74.433,25.124z" />
						<path fill="#FFFFFF" d="M67.473,82.078H32.528c-6.098,0-11.06-4.959-11.06-11.058V36.077c0-6.1,4.961-11.061,11.06-11.061h6.446   c2.486,0,4.5,2.015,4.5,4.5s-2.015,4.5-4.5,4.5h-6.446c-1.136,0-2.06,0.924-2.06,2.061v34.944c0,1.135,0.924,2.06,2.06,2.06h34.944   c1.135,0,2.06-0.925,2.06-2.06V64.06c0-2.485,2.016-4.499,4.499-4.499c2.486,0,4.5,2.014,4.5,4.499v6.961   C78.531,77.119,73.572,82.078,67.473,82.078z" />
					</svg>
					{ __( 'Share it' ) }
				</button>
			</div>
		);
	},
} );
