import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Knight/board'
import { observe } from './Knight/game'
import './Knight/Knight.scss'

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
)
