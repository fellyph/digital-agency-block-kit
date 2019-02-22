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
					onChange={ ( newCheckboxControl ) => setAttributes( { checkboxControl: newCheckboxControl } ) }
				/>

				<ColorPalette
					value={ colorPaletteControl }
					onChange={ ( newColorPaletteControl ) => setAttributes( { colorPaletteControl: newColorPaletteControl } ) }
				/>

				<RadioControl
					label={ __( 'Radio Component' ) }
					selected={ radioControl }
					options={ [ {
						label: 'Blanka',
						value: 'blanka',
					},
					{
						label: 'Ryu',
						value: 'ryu',
					},
					] }
					onChange={ ( newradioControl ) => setAttributes( { radioControl: newradioControl } ) }
				/>

				<RangeControl
					label={ __( 'Range Component' ) }
					value={ rangeControl }
					onChange={ ( newrangeControl ) => setAttributes( { rangeControl: newrangeControl } ) }
					min={ 1 }
					max={ 10 }
				/>

				<TextareaControl label={ __( 'Text Area Component' ) }
					help={ __( 'Text area control help text' ) }
					value={ textareaControl }
					onChange={ ( newTextareaControl ) => setAttributes( { textareaControl: newTextareaControl } ) }
				/>

				<ToggleControl
					label={ __( 'Toggle Component' ) }
					checked={ toggleControl }
					onChange={ ( newToggleControl ) => setAttributes( { toggleControl: newToggleControl } ) }
				/>
			</div>
		);
	}
}
