//  Import CSS.
import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	PanelBody,
	PanelRow,
	RadioControl,
	Panel,
} = wp.components;

registerBlockType( 'agencykit/dynamic', {

	title: __( 'Characters' ),
	icon: 'admin-users',
	category: 'common',
	keywords: [
		__( 'Character' ),
		__( 'Characters' ),
	],

	attributes: {
		quantity: {
			type: 'string',
			default: '3',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { quantity } = attributes;

		return (
			<Panel header={ __( 'Character' ) }>
				<PanelBody title={ __( 'List your favorite character' ) }initialOpen={ true } >
					<PanelRow>
						<RadioControl
							label="Select the quantity"
							selected={ quantity }
							options={ [
								{ label: __( 'Small' ), value: '1' },
								{ label: __( 'Medium' ), value: '2' },
								{ label: __( 'Medium' ), value: '3' },
							] }
							onChange={ ( newQuantity ) => {
								setAttributes( { quantity: newQuantity } );
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
