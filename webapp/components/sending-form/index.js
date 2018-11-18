import React from 'react'
import PropTypes from 'prop-types'

import Input from '../elements/Input'
import Button from '../elements/Button'

export default class SendingForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.props.onChange(name, value)
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit()
  }

  render () {
    return (
      <form className='sending-form' onSubmit={this.onSubmit}>
        <Input
          type='email'
          onChange={this.onChange}
          name='email.input'
        />
        <Button>Send The Email</Button>
      </form>
    )
  }
}