import React from 'react'
import * as R from 'ramda'

import { fetchEmailActivities } from '../../services'

export default class FetchingLogContianer extends React.PureComponent {
  state = { emailLogs: [], error: '' }

  async componentDidMount() {
    if (R.isEmpty(this.state.emailLogs)) {
      try {
        const results = await fetchEmailActivities()
        this.setState({ emailLogs: results })
      } catch (error) {
        this.setState({ error: error.message })
      }
    }
  }

  render() {
    const results = this.state.error ? [] : this.state.emailLogs
    return (
      this.props.children({ results })
    )
  }
}