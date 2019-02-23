//  Import CSS.
import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	PanelBody,
	PanelRow,
	RadioControl,
	Panel,
	Spinner,
} = wp.components;

const { withSelect } = wp.data;

registerBlockType( 'agencykit/dynamic-characters', {

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

		const characters = withSelect( ( select ) => ( {
			posts: select( 'core' ).getEntityRecords( 'postType', 'agency_product', { per_page: parseInt( quantity, 10 ) } ),
		} ) )( ( { posts, className } ) => {
			if ( ! posts ) {
				return (
					<div className={ className }>
						<Spinner />
					</div>
				);
			}
			if ( 0 === posts.lenght ) {
				return <PanelRow> { __( 'No result' ) } </PanelRow>;
			}
			return (
				<div>
					{ posts.map( ( post, index ) => (
						<figure key={ index } >
							<figcaption>{ post.title.rendered }</figcaption>
						</figure>
					) ) }
				</div>
			);
		} );

		return (
			<Panel header={ __( 'Character' ) }>
				<PanelBody title={ __( 'List your favorite character' ) }initialOpen={ true } >
					<PanelRow>
						<RadioControl
							label="Select the quantity"
							selected={ quantity }
							options={ [
								{ label: __( '1' ), value: '1' },
								{ label: __( '2' ), value: '2' },
								{ label: __( '3' ), value: '3' },
							] }
							onChange={ ( newQuantity ) => {
								setAttributes( { quantity: newQuantity } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						{ characters() }
					</PanelRow>
				</PanelBody>
			</Panel>
		);
	},

	save: () => {
		// Rendering in PHP
		return null;
	},
} );
