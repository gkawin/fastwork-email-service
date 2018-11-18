
import React from 'react'

import SendingFormContainer from '../components/sending-form/SendingFormContainer'
import SendingForm from '../components/sending-form'


export default function Campaign() {
	return (
		<SendingFormContainer>
			{({ onChange, onSubmit }) => (
				<SendingForm
					onChange={onChange}
					onSubmit={onSubmit}
				/>
			)}
		</SendingFormContainer>
	)
} 