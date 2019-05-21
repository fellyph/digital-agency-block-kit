//  Import CSS.
import './style.scss';

import wp from 'wp';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'agencykit/watermark-block', {
	title: __( 'Watermark block' ),
	icon: 'camera',
	category: 'common',
	keywords: [
		__( 'Watermark' ),
		__( 'Camera' ),
		__( 'Media' ),
	],

	edit: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Watermark block' ) }</h2>
			</div>
		);
	},

	save: ( { className } ) => {
		return (
			<div className={ className + ' mdc-card' }>
				<h2 className={ 'mdc-typography mdc-typography--headline6' } >{ __( 'Watermark block' ) }</h2>
				<video id="player-watermark" controls autoplay width="320" height="240"></video>
				<button id="capture-watermark" className={ 'mdc-button' }>{ __( 'Capture' ) }</button>
				<canvas id="canvas-watermark" width="320" height="240" className={ 'barcode-canvas' }></canvas>
			</div>
		);
	},
} );
