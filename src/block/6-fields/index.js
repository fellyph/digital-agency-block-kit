/**
 * Block dependencies
 */

import wp from 'wp';

import Edit from './edit';
import globalAttributes from './attributes';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function getSettings( attributes ) {
	const settings = [];
	for ( const attribute in attributes ) {
		let value = attributes[ attribute ];
		if ( 'boolean' === typeof attributes[ attribute ] ) {
			value = value.toString();
		}
		settings.push( <li> { attribute }: { value } </li> );
	}
	return settings;
}

/**
 * Register static block example block
 */
export default registerBlockType( 'agencykit/form-fields', {
	title: __( 'Componentes Examples' ),
	description: __( 'An example of how to use form component in a block.' ),
	category: 'common',
	icon: 'block-icon',
	keywords: [
		__( 'Exemples' ),
		__( 'Settings' ),
		__( 'Scheme' ),
	],
	globalAttributes,
	getEditWrapperProps( attributes ) {
		const { blockAlignment } = attributes;
		if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
			return { 'data-align': blockAlignment };
		}
	},
	edit: ( props ) => {
		const { setAttributes } = props;
		return ( <Edit { ...{ setAttributes, ...props } } /> );
	},
	save: ( props ) => {
		const { attributes } = props;
		const settings = getSettings( attributes );

		return (
			<div>
				<h4>{ __( 'Check the settings' ) }</h4>
				<ul>
					{ settings }
				</ul>
			</div>
		);
	},
} );
