import React from 'react'
import './SimpleTerminal.css'

const SimpleTerminal = ({ children }) => (
  <div className="termWindow">
    <div className="termMenu">
      <div className="termBtn close" />
      <div className="termBtn minimize" />
      <div className="termBtn zoom" />
    </div>
    <div className="termScreen">{children}</div>
  </div>
)

export default SimpleTerminal
