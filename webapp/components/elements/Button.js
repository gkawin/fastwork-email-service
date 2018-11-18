
import './button.styl'
import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
  }
  render() {
    return (
      <div className='button'>
        <button
          onClick={this.props.onClick}
          className='button__button'
          {...this.props}
        >
          {this.props.children}
        </button>
      </div>
    )
  }
}