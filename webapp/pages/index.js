import React from 'react'

import SendingForm from '../components/sending-form'
import SendingFormContainer from '../components/sending-form/SendingFormContainer'
import { LeftSidebar, NavItem } from '../components/nav'


export default function Index() {
	return (
		<>
			<section>
				<LeftSidebar>
					<NavItem>Campanige</NavItem>
					<NavItem>Activity</NavItem>
				</LeftSidebar>
			</section>
			<section>
				<SendingFormContainer>
					{({ onChange, onSubmit }) => (
						<SendingForm
							onChange={onChange}
							onSubmit={onSubmit}
						/>
					)}
				</SendingFormContainer>
			</section>
		</>
	)
} 