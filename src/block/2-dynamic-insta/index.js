//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	TextControl,
	PanelBody,
	PanelRow,
} = wp.components;

registerBlockType( 'agencykit/dynamic-insta', {

	title: __( 'Dynamic Social Card' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'Social' ),
		__( 'Social media' ),
		__( 'Instagram' ),
	],

	attributes: {
		instagramUser: {
			type: 'string',
			default: 'fellyph',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { instagramUser } = attributes;
		return (
			<PanelBody title={ __( 'InstaBlock' ) } initialOpen={ true } >
				<PanelRow>
					<TextControl
						value={ instagramUser }
						onChange={ ( newUser ) => setAttributes( { instagramUser: newUser } ) }
						label={ __( 'Add your instagram user here' ) } />
				</PanelRow>
			</PanelBody>
		);
	},

	save: ( { attributes, className } ) => {
		const { instagramUser } = attributes;
		return (
			<div className={ className + ' mdc-card' } data-user={ instagramUser }>
				<a href={ 'http://instagram.com/' + instagramUser } className={ 'mdc-button' }
					target="_blank" >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="3.2" />
						<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					<span className={ 'mdc-button__label' } >{ __( 'Follow me: ' ) } { instagramUser }</span>
				</a>
			</div>
		);
	},
} );
