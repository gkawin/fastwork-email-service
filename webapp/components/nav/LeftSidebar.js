import './left-sidebar.styl'
import React from 'react'

export default class LeftSidebar extends React.PureComponent {
  render() {
    return (
      <section className='left-sidebar'>
        {this.props.children}
      </section>
    )
  }
}