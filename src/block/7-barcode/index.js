//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'agencykit/barcode-card', {

	title: __( 'Barcode Card' ),
	icon: 'camera',
	category: 'common',
	keywords: [
		__( 'Bar code' ),
		__( 'Camera' ),
	],

	edit: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Barcode Card' ) }</h2>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Data API social Card' ) }</h2>
				<video id="player" controls autoplay></video>
				<button id="capture" className={ 'mdc-button' }>{ __( 'Capture' ) }</button>
				<canvas id="canvas" width="320" height="240" className={ 'barcode-canvas' }></canvas>
			</div>
		);
	},
} );
