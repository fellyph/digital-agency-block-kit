//  Import CSS.
import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	TextControl,
	PanelBody,
	PanelRow,
	RadioControl,
	Panel,
} = wp.components;

registerBlockType( 'agencykit/instafeed', {

	title: __( 'Instagram Embed' ),
	icon: 'camera',
	category: 'common',
	keywords: [
		__( 'Social' ),
		__( 'Social media' ),
		__( 'Instagram' ),
	],

	attributes: {
		instagramEmbedId: {
			type: 'string',
			default: 'Bsith47njvJ',
		},
		embedWidth: {
			type: 'string',
			default: '500',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { instagramEmbedId, embedWidth } = attributes;

		return (
			<Panel header={ __( 'InstaBlock' ) }>
				<PanelBody title={ __( 'add your photo here' ) }initialOpen={ true } >
					<PanelRow>
						<TextControl
							value={ instagramEmbedId }
							onChange={ ( newUser ) => {
								setAttributes( { instagramEmbedId: newUser } );
							} }
							label={ __( 'Add your instagram user here' ) } />
					</PanelRow>
					<PanelRow>
						<RadioControl
							label="Select the size"
							selected={ embedWidth }
							options={ [
								{ label: __( 'Small' ), value: '300' },
								{ label: __( 'Medium' ), value: '500' },
								{ label: __( 'Medium' ), value: '700' },
							] }
							onChange={ ( newWidth ) => {
								setAttributes( { embedWidth: newWidth } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		);
	},

	save: ( { attributes, className } ) => {
		const { instagramEmbedId, embedWidth } = attributes;
		return (
			<div className={ className }
				data-user={ instagramEmbedId }
				data-width={ embedWidth } >
				<h3 className="title">
					<a href={ `http://instagram.com/p/${ instagramEmbedId }` }>
						{ __( 'Follow me: ' ) } { instagramEmbedId } </a>
				</h3>
			</div>
		);
	},
} );
