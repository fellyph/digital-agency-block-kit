const player = document.getElementById( 'player' );
const canvas = document.getElementById( 'canvas' );
if ( canvas ) {
	const context = canvas.getContext( '2d' );
	const captureButton = document.getElementById( 'capture' );

	const constraints = {
		video: true,
	};

	if ( captureButton ) {
		captureButton.addEventListener( 'click', () => {
			// Draw the video frame to the canvas.
			context.drawImage( player, 0, 0, canvas.width, canvas.height );
			document.querySelectorAll( '.barcode-canvas' ).forEach( async ( img ) => {
				try {
					const barcodes = await new BarcodeDetector().detect( img );
					barcodes.forEach( ( barcode ) => {
						const div = document.createElement( 'div' );
						const box = barcode.boundingBox;
						const computedStyle = getComputedStyle( img );
						const [ top, right, bottom, left ] = [
							computedStyle.marginTop,
							computedStyle.marginRight,
							computedStyle.marginBottom,
							computedStyle.marginLeft,
						].map( ( m ) => parseInt( m, 10 ) );

						const scaleX = img.width / img.naturalWidth;
						const scaleY = img.height / img.naturalHeight;

						div.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
						div.style.position = 'absolute';
						div.style.top = `${ scaleY * box.top + top }px`;
						div.style.left = `${ scaleX * box.left - left }px`;
						div.style.width = `${ scaleX * box.width }px`;
						div.style.height = `${ scaleY * box.height }px`;
						div.style.color = 'black';
						div.style.fontSize = '14px';
						div.textContent = `${ barcode.rawValue }`;

						img.before( div );
					} );
				} catch ( e ) {
					console.log( e );
				}
			} );
			// Stop all video streams.
			player.srcObject.getVideoTracks().forEach( ( track )  => { track.stop() } );
		} );

		// Attach the video stream to the video element and autoplay.
		navigator.mediaDevices.getUserMedia( constraints )
			.then( ( stream ) => {
				player.srcObject = stream;
			} );
	}
}
