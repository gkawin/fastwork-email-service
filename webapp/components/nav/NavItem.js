import './nav-item.styl'

import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default class NavItem extends React.PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string,
    label: PropTypes.string
  }
  render() {
    const content = this.props.children || this.props.label
    return (
      <Link href={this.props.to}>
        <span className='nav-item'>{content}</span>
      </Link>
    )
  }
}