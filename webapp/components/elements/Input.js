
import React from 'react'
import PropTypes from 'prop-types'

import './input.styl'

export default class Input extends React.PureComponent {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string
	}
	render() {
		return (
			<div className='input'>
				<label htmlFor='me' className='input__label'>{this.props.label}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					className='input__input'
					onChange={this.props.onChange}
					value={this.props.value}
					{...this.props}
				/>
			</div>
		)
	}
}