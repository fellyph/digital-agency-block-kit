const image = new Image();
image.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB8oAAADiCAIAAACpw9onAAABtWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3
d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSW1hZ2VSZWFkeSIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIvPg
ogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Pq/C6HsAAAQjaUNDUEdlbmVyaWMgUkdCIFByb2ZpbGUAADiNrVVdaBxVFD6bubMpJM5TbDSFdKg/DSUNm1Y0oba6f93dNm6WSTbaIshk9u7OmNmdcWZ2a0ufiqD4YtQXkYL/bwVFUKq22IrYl0qFGjU1CIoPLf4gFPqi6Xrm3tnMND/qg3e4d775zrnnnnvOmXsBNoGp1d0uGaDe8Bwll5IfO3RY7l6ELrgTemAAelTNtZOl0g
RgU23bhDXtxjcQ89+Xd/q21sr/sfVUqKsBxDYhfqXianXErwOIJzXb8QC6H0R+7Ihn+xg79DnoIOLnfFzj+KSPZzl+j+lMK2nEnyOWNF2tIP4a8fBshK9FMPeBtb4cbVDH0GQ/FiXHqhom7fjaBzmg0MDugAEayKAgk8J3CRkLqsiaQOF/a3Wz2fFrK/Zed27qIL6HMEbPVNSMj0cQn9LU7BTiuxFfaRkzxQDftL2UgvhegK5tzblyEvEOxPmqs7/M7XQ5ejPfwa8e06cfRbwZ8WeN2eJkMPc7zU1jbGEb4p
s6Lfi1MAggyIZXmOZzhX2OpUzydYVqhWayfrwRPz9nHVS4TeFDtzWV7dg8pqeLAX/xSfVACfEA4p+omVP4WsJftlcKfCCDDbM4wdciGeqy/TLe06fzfF1ieph4PpfMV439hUD/fd3JKwG+YpusltE3sctpKmWuL46oTjbHbYol2igH9sUWzMRUzKkFszhqmP3lSN7tSN7D2qD41dHZyea5MMdqpsVkLo4lpslnhvZqzMbVoL7Sg+9AE1kdfkVWj+il8auJXG0DO9yXa4Edi/STBNmNfQ+ZIHvJGBkHmTxEHi
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`;

const player = document.getElementById( 'player-watermark' );
const canvas = document.getElementById( 'canvas-watermark' );
const context = canvas.getContext( '2d' );
const captureButton = document.getElementById( 'capture-watermark' );

const constraints = {
	video: true,
};

if ( captureButton ) {
	captureButton.addEventListener( 'click', () => {
		// Draw the video frame to the canvas.
		context.drawImage( player, 0, 0, canvas.width, canvas.height );
		context.drawImage( image, 0, 0, canvas.width, 80 );
	} );

	// Attach the video stream to the video element and autoplay.
	navigator.mediaDevices.getUserMedia( constraints )
		.then( ( stream ) => {
			player.srcObject = stream;
		} );
}
