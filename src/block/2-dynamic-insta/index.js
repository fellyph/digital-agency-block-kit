//  Import CSS.
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	TextControl,
	PanelBody,
	PanelRow,
} = wp.components;
const { Fragment } = wp.element;

registerBlockType( 'agencykit/dynamic-insta', {

	title: __( 'Social Card' ),
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
			<Fragment>
				<PanelBody title={ __( 'InstaBlock' ) } initialOpen={ true } >
					<PanelRow>
						<TextControl
							value={ instagramUser }
							onChange={ newUser => setAttributes( { instagramUser: newUser } ) }
							label={ __( 'Add your instagram user here' ) } />
					</PanelRow>
				</PanelBody>
			</Fragment>
		);
	},

	save: ( { attributes } ) => {
		const { instagramUser } = attributes;
		return (
			<div data-user={ instagramUser }>
				<h3>{ __( 'Instagram user' ) }</h3>
				<a href={ 'http://instagram.com/' + instagramUser }> { instagramUser } </a>
			</div>
		);
	},
} );
