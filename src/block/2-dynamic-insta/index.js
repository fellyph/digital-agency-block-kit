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
			<div className={ className } data-user={ instagramUser }>
				<h3 className="title">
					<a href={ 'http://instagram.com/' + instagramUser }>
						{ __( 'Follow me: ' ) } { instagramUser } </a>
				</h3>
			</div>
		);
	},
} );
