
import React from 'react'
import PropTypes from 'prop-types'

import './formInput.scss'

export default class FormInput extends React.Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string
	}
	render() {
		return (
			<div className='form-input'>
				<label className='form-input__label'>{this.props.label}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					className='form-input__input'
					onChange={this.props.onChange}
					value={this.props.value}
					{...this.props}
				/>
			</div>
		)
	}
}