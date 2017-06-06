import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import { moveKnight } from './game'
import { ItemTypes } from './constants'
import { DropTarget } from 'react-dnd'

const squareTarget = {
  drop (props) {
    moveKnight(props.x, props.y)
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class BoardSquare extends Component {
  render () {
    const { x, y, connectDropTarget, isOver } = this.props
    const black = (x + y) % 2 === 1

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }} />
        }
      </div>
    )
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func,
  children: PropTypes.string
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)