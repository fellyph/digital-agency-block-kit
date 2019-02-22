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
	BaseControl,
	TextControl,
	Notice,
	Spinner,
	FormFileUpload,
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
				<Spinner />

				<h5>{ __( 'File upload component' ) }</h5>
				<FormFileUpload
					accept="image/*"
					onChange={ () => { } }
				>
					{ __( 'Upload image' ) }
				</FormFileUpload>

				<h5>{ __( 'Notice component' ) }</h5>
				<Notice status="error">
					{ __( 'Something wrong happen' ) }
				</Notice>

				<Notice status="success">
					{ __( 'maybe is fine' ) }
				</Notice>

				<h5>{ __( 'Checkbox component' ) }</h5>
				<CheckboxControl
					heading={ __( 'Checkbox Component' ) }
					label={ __( 'Check it!' ) }
					checked={ checkboxControl }
					onChange={ () => { } }
				/>

				<h5>{ __( 'Color palette component' ) }</h5>
				<ColorPalette
					value={ colorPaletteControl }
					onChange={ () => { } }
				/>

				<h5>{ __( 'Radio component' ) }</h5>
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
					onChange={ () => { } }
				/>

				<h5>{ __( 'Range component' ) }</h5>
				<RangeControl
					label={ __( 'Range Component' ) }
					value={ rangeControl }
					onChange={ ( newrangeControl ) => setAttributes( { rangeControl: newrangeControl } ) }
					min={ 1 }
					max={ 10 }
				/>

				<h5>{ __( 'TextArea component' ) }</h5>
				<TextareaControl label={ __( 'Text Area Component' ) }
					help={ __( 'Text for some instruction' ) }
					value={ textareaControl }
					onChange={ ( newTextareaControl ) => setAttributes( { textareaControl: newTextareaControl } ) }
				/>

				<h5>{ __( 'Toggle component' ) }</h5>
				<ToggleControl
					label={ __( 'Toggle Component' ) }
					checked={ toggleControl }
					onChange={ ( newToggleControl ) => setAttributes( { toggleControl: newToggleControl } ) }
				/>

				<h5>{ __( 'Base Component' ) }</h5>
				<BaseControl
					id="textarea-1"
					help="Enter some text"
					label={ __( 'Base Component' ) }>

					<textarea id="textarea-1" />
				</BaseControl>

				<h5>{ __( 'Text Component' ) }</h5>
				<TextControl label={ __( 'Text Component' ) }
					help={ __( 'Text for some instruction' ) }
					value={ textareaControl }
					onChange={ ( newTextareaControl ) => setAttributes( { textareaControl: newTextareaControl } ) }
				/>
			</div>
		);
	}
}
