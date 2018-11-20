import React from 'react'
import PropTypes from 'prop-types'
import { submitCampaign } from '../../services'

export default class FormContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  onSubmitForm = (mails = []) => async () => {
    console.log(mails)
    console.log(await submitCampaign(JSON.stringify(this.state.input)))
  }

  render() {
    return (this.props.children({
      onChange: this.onChangeInput,
      onSubmit: this.onSubmitForm
    }))
  }
}