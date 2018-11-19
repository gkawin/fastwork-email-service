import React from 'react'
import PropTypes from 'prop-types'
import { submitCampaign } from '../../services'

export default class FormContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = { input: {} }

  onChangeInput = (name, value) => {
    this.setState({ input: { [name]: value } })
  }

  onSubmitForm = async (e) => {
    e.preventDefault()
    console.log(await submitCampaign(JSON.stringify(this.state.input)))
  }

  render() {
    return (this.props.children({
      onChange: this.onChangeInput,
      onSubmit: this.onSubmitForm
    }))
  }
}