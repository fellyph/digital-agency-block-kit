if ( 'share' in navigator ) {
	const shareButton = document.querySelector( '.share-button' );
	if ( shareButton ) {
		shareButton.style.display = 'inline-block';
	}
	shareButton.addEventListener( 'click', () => {
		navigator.share( {
			title: 'Blog Fellyph Cintra',
			text: 'Como compartilhar conteúdo com web share API',
			url: 'https://blog.fellyph.com.br/',
		} );
	} );
}
