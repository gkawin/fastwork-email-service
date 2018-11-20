
import React from 'react'
import cx from 'classnames'
import * as R from 'ramda'

import { FormContainer } from '../components/sending-form'
import { Button, Input } from '../components/elements'

// need test
const updateIn = (value, row) => R.map((item) => (item.id === row) ? R.assoc('to', value, item) : item)

export default class Campaign extends React.PureComponent {
	state = { mails: [{ to: '', id: 0 }], disabledButton: false }

	static MAX_ROWS = 5

	onAddMailInput = (to = '') => () => this.setState((state) => {
		const hasMaximum = state.mails.length === Campaign.MAX_ROWS
		const mails = hasMaximum ? state.mails : state.mails.concat([{ to }])
		return { mails, disabledButton: hasMaximum }
	})

	onChangeMailInput = (e) => {
		const { value, name } = e.target
		const row = name.split('-')[1]
		this.setState((state) => {
			return updateIn(value, row)(state.mails)
		})
	}

	renderButtonAddRow = () => {
		const classes = cx('campaign__button-row', {
			disabled: this.state.disabledButton
		})
		return (
			<Button
				className={classes}
				onClick={this.onAddMailInput()}
				disabled={this.state.disabledButton}
			>
				Add more
			</Button>
		)
	}

	renderInput = (item, idx) => (
		<div key={idx} style={{ marginBottom: '5px' }}>
			<Input
				type='email'
				label='E-mail Address'
				name={`email-${idx}`}
				onChange={this.onChangeMailInput}
			/>
		</div>
	)

	render() {
		console.log(this.state.mails)
		return (
			<FormContainer>
				{({ onSubmit }) => (
					<div>
						{this.renderButtonAddRow()}
						{this.state.mails.map(this.renderInput)}
						<Button onClick={onSubmit(this.state.mails)}>Send The Email</Button>
					</div>
				)}
			</FormContainer>
		)
	}
} 