import React from 'react'
import ReactDOM from 'react-dom'
// import Knight from './Knight/knight'
// import Square from './Knight/square'
import Board from './Knight/board'
import './Knight/Knight.scss'

ReactDOM.render(
  // <Square black>
  //   <Knight />
  // </Square>,
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
)
