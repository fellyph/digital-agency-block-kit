import InstagramEmbed from 'react-instagram-embed';
import wp from 'wp';

const { render } = wp.element;
const instafeed = document.querySelectorAll( '.wp-block-agencykit-instafeed' );

instafeed.forEach( ( feed, index ) => {
	const instagramId = `https://instagram.com/p/${ feed.dataset.user }`;
	const embedWidth = feed.dataset.width;
	render(
		<InstagramEmbed key={ index }
			url={ instagramId }
			maxWidth={ embedWidth }
			hideCaption={ false }
			containerTagName="div"
		/>,
		feed
	);
} );
