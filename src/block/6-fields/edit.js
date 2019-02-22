/**
 * Internal block libraries
 */

import wp from 'wp';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { ColorPalette } = wp.editor;
const {
	CheckboxControl,
	RadioControl,
	RangeControl,
	TextControl,
	TextareaControl,
	ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {
	render() {
		const {
			attributes: {
				checkboxControl,
				colorPaletteControl,
				radioControl,
				rangeControl,
				textControl,
				textareaControl,
				toggleControl,
			},
			className,
			setAttributes,
		} = this.props;

		return (
			<div className={ className } >
				<CheckboxControl
					heading={ __( 'Checkbox Component' ) }
					label={ __( 'Check it!' ) }
					checked={ checkboxControl }
					onChange={ ( checkboxControl ) => setAttributes( { checkboxControl } ) }
				/>

				<ColorPalette
					value={ colorPaletteControl }
					onChange={ ( colorPaletteControl ) => setAttributes( { colorPaletteControl } ) }
				/>

				<RadioControl
					label={ __( 'Radio Component' ) }
					selected={ radioControl }
					options={ [ {
						label: 'Author',
						value: 'a',
					},
					{
						label: 'Editor',
						value: 'e',
					},
					] }
					onChange={ (newradioControl) => setAttributes( { newradioControl } ) }
				/>

				<RangeControl
					label={ __( 'Range Component' ) }
					value={ rangeControl }
					onChange={ ( rangeControl ) => setAttributes( { rangeControl } ) }
					min={ 1 }
					max={ 10 }
				/>

				<TextControl label={ __( 'Text Control' ) }
					help={ __( 'Text control help text' ) }
					value={ textControl }
					onChange={ ( textControl ) => setAttributes( { textControl } ) }
				/>

				<TextareaControl label={ __( 'Text Area Component' ) }
					help={ __( 'Text area control help text' ) }
					value={ textareaControl }
					onChange={ ( textareaControl ) => setAttributes( { textareaControl } ) }
				/>

				<ToggleControl
					label={ __( 'Toggle Component' ) }
					checked={ toggleControl }
					onChange={ ( toggleControl ) => setAttributes( { toggleControl } ) }
				/>
			</div>
		);
	}
}
