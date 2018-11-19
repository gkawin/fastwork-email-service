import './form-submit.styl'

import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from '../elements'

export default class FormSubmit extends React.PureComponent {
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

  render() {
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