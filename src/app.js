import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Knight/board'
import './Knight/Knight.scss'

ReactDOM.render(
  <Board knightPosition={[7, 4]} />,
  document.getElementById('root')
)
