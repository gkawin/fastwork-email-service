import './left-sidebar.styl'

import React from 'react'
import PropTypes from 'prop-types'

export default class LeftSidebar extends React.PureComponent {
  static propTypes = { children: PropTypes.any }
  render() {
    return (
      <section className='left-sidebar'>
        {this.props.children}
      </section>
    )
  }
}