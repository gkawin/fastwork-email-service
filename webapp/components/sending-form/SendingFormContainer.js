import React from 'react'
import PropTypes from 'prop-types'
import { submitCampaign } from '../../services'

export default class SendingFormContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = { input: {} }

  onChangeInput = (name, value) => {
    this.setState({ input: { [name]: value } })
  }

  onSubmitForm = async (mailto = '') => {
    console.log(await submitCampaign(mailto))
  }

  render() {
    return (this.props.children({
      onChange: this.onChangeInput,
      onSubmit: this.onSubmitForm
    }))
  }
}