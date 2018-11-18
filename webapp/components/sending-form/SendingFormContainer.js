import React from 'react'
import PropTypes from 'prop-types'

export default class SendingFormContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = { input: {} }

  onChangeInput = (name, value) => {
    this.setState({ input: { [name]: value } })
  }

  onSubmitForm = () => {
    console.log(this.state)
  }

  render () {
    return (this.props.children({
      onChange: this.onChangeInput,
      onSubmit: this.onSubmitForm
    }))
  }
}