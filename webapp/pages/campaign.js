
import React from 'react'
import cx from 'classnames'
import * as R from 'ramda'

import { FormContainer } from '../components/sending-form'
import { Button, Input } from '../components/elements'

export default class Campaign extends React.PureComponent {
	state = { name: '', value: '' }

	onChangeMailInput = (e) => {
		const { value, name } = e.target
		this.setState({ name, value })
	}

	render() {
		return (
			<FormContainer>
				{({ onSubmit }) => (
					<form style={{ marginBottom: '5px' }} onSubmit={onSubmit(this.state)}>
						<Input
							type='email'
							label='E-mail Address'
							name='email'
							onChange={this.onChangeMailInput}
						/>
						<Button>Send mail</Button>
					</form>
				)}
			</FormContainer>
		)
	}
} 