import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Fragment } = wp.element;
const {
	TextControl,
	PanelBody,
	TextareaControl,
	PanelRow,
	Button,
	IconButton,
} = wp.components;

registerBlockType( 'agencykit/testimonials', {

	title: __( 'Testimonials' ),
	icon: 'format-quote',
	category: 'common',
	keywords: [
		__( 'Testimonials' ),
		__( 'Agencykit' ),
	],

	attributes: {
		testimonials: {
			source: 'query',
			default: [],
			query: {
				author: {
					source: 'text',
					selector: 'span.author',
				},
				message: {
					source: 'text',
					selector: 'span.message',
				},
				id: {
					source: 'text',
				},
			},
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const testimonials = attributes.testimonials;
		const testimonialsList = testimonials.map( ( testimonial, index ) => (
			<PanelBody title={ __( 'Testimonial: ' ) + ( Number( testimonial.id ) + 1 ) } key={ index }>
				<PanelRow>
					<TextControl
						value={ testimonial.author }
						label={ __( 'Add author name' ) }
						onChange={ author => {
							const newTestimonial = Object.assign( {}, testimonial, {
								author: author,
							} );
							setAttributes( {
								testimonials: [
									...testimonials.filter( item => item.id !== testimonial.id ),
									newTestimonial,
								],
							} );
						} } />
					<IconButton icon="trash" label={ __( 'Remove' ) } onClick={ () => {
						const newTestimonialsList = testimonials.filter( item => item.id !== testimonial.id );
						setAttributes( { testimonials: newTestimonialsList } );
					} } />
				</PanelRow>
				<PanelRow>
					<TextareaControl
						value={ testimonial.message }
						label={ __( 'Add your instagram user here' ) }
						onChange={ message => {
							const newTestimonial = Object.assign( {}, testimonial, {
								message: message,
							} );
							setAttributes( {
								testimonials: [
									...testimonials.filter( item => item.id !== testimonial.id ),
									newTestimonial,
								],
							} );
						} } />
				</PanelRow>
			</PanelBody>
		) );

		const addNew = () => {
			setAttributes( {
				testimonials: [
					...testimonials,
					{
						id: testimonials.length,
						author: '',
						message: '',
					},
				],
			} );
		};

		return (
			<Fragment>
				<h4 className="testimonial-author">{ __( 'Testimonial' ) }</h4>
				{ testimonialsList }
				<Button isPrimary={ true } onClick={ addNew }> { __( 'Add new testimonial' ) } </Button>
			</Fragment>
		);
	},

	save: ( { attributes, className } ) => {
		const { testimonials } = attributes;
		const testimonialsOutput = testimonials.map( ( testimonial, index ) => (
			<div className="testimonial-item" key={ index }>
				<blockquote className="quote">{ testimonial.message }</blockquote>
				<h4 className="author">{ testimonial.author }</h4>
			</div>
		) );
		return (
			<div className={ className }>
				{ testimonialsOutput }
			</div>
		);
	},
} );
