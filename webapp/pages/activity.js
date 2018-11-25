import './activity.styl'

import React from 'react'
import FetchingLogContianer from '../components/email-log/FetchingLogContainer'

export default class Activity extends React.PureComponent {
  renderBody = (row, idx) => {
    return (
      <tr key={`${row.email}.${idx}`}>
        <td>{row.email}</td>
        <td>{row.status}</td>
        <td>{row.create_at}</td>
        <td>{row.provider}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className='activity__table' border='1'>
        <thead>
          <tr>
            <td>email address</td>
            <td>status</td>
            <td>provider</td>
            <td>created at</td>
          </tr>
        </thead>
        <tbody>
          <FetchingLogContianer>
            {({ results }) => results.map(this.renderBody)}
          </FetchingLogContianer>
        </tbody>
      </table>
    )
  }
}