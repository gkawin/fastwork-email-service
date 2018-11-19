
import React from 'react'
import cx from 'classnames'

import { FormContainer } from '../components/sending-form'
import { Button, Input } from '../components/elements'


export default class Campaign extends React.PureComponent {
	state = { mails: [{ name: '' }], disabledButton: false }

	static MAX_ROWS = 5

	onAddMailInput = (name) => () => this.setState((state) => {
		const hasMaximum = state.mails.length === Campaign.MAX_ROWS
		const mails = hasMaximum ? state.mails : state.mails.concat([{ name }])
		return { mails, disabledButton: hasMaximum }
	})

	renderButtonAddRow = () => {
		const classes = cx('campaign__button-row', {
			disabled: this.state.disabledButton
		})
		return (
			<Button
				className={classes}
				onClick={this.onAddMailInput('fooo')}
				disabled={this.state.disabledButton}
			>
				Add more
			</Button>
		)
	}

	renderInput = ({ onChange }) => (item, idx) => (
		<div key={idx} style={{ marginBottom: '5px' }}>
			<Input
				type='email'
				label='E-mail Address'
				name={`email-${idx}`}
				onChange={onChange}
			/>
		</div>
	)

	render() {
		return (
			<FormContainer>
				{({ onChange, onSubmit }) => (
					<div>
						{this.renderButtonAddRow()}
						{this.state.mails.map(this.renderInput({ onChange }))}
						<Button>Send The Email</Button>
					</div>
				)}
			</FormContainer>
		)
	}
} 