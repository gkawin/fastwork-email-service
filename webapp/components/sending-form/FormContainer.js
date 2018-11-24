import React from 'react'
import PropTypes from 'prop-types'
import { submitCampaign } from '../../services'

export default class FormContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  onSubmitForm = ({ value: mailTo }) => async (e) => {
    e.preventDefault()
    console.log(await submitCampaign(mailTo))
  }

  render() {
    return (this.props.children({
      onChange: this.onChangeInput,
      onSubmit: this.onSubmitForm
    }))
  }
}