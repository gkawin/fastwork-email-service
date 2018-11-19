
import React from 'react'
import { FormContainer, FormSubmit } from '../components/sending-form'

export default function Campaign() {
	return (
		<FormContainer>
			{({ onChange, onSubmit }) => (
				<FormSubmit
					onChange={onChange}
					onSubmit={onSubmit}
				/>
			)}
		</FormContainer>
	)
} 