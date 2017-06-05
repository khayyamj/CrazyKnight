import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Square extends Component {
  render () {
    const { black } = this.props
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke
        }}
        className='knight-square'>
        {this.props.children}
      </div>
        )
  }
}

Square.propTypes = {
  black: PropTypes.bool,
  children: PropTypes.string
}
