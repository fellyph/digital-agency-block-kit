import InstagramEmbed from 'react-instagram-embed';
import wp from 'wp';

const { render } = wp.element;
const instafeed = document.querySelector( '.wp-blocks-agencykit-instafeed' );

instafeed.forEach( ( feed, index ) => {
	const urlUserAccount = `https://instagr.am/${ feed.dataset.user }`;

	render(
		<InstagramEmbed key={ index }
			url={ urlUserAccount }
			maxWidth={ 320 }
			hideCaption={ false }
			containerTagName="div"
		/>
	);
} );
