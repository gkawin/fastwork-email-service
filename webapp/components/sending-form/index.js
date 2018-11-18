import React from 'react'

import Input from '../elements/Input'
import Button from '../elements/Button'

export default class SendingForm extends React.PureComponent {
  render () {
    return (
      <div className='sending-form'>
        <Input
          type='text'
          onChange={(e) => { console.log(e.target.value) }}
        />
        <Button>Send The Email</Button>
      </div>
    )
  }
}