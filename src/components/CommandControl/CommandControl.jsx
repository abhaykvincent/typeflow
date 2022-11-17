import React from 'react'
import './CommandControl.scss'
function CommandControl() {
  return (
    <div className="command-control">
        <div className="language-settings">
            
            <label htmlFor="language">Language  </label>
            <select name="language" id="language-select">
            <option value="javascript" >JavaScript</option>
            <option value="python" disabled>Python [Private Beta]</option>
            <option value="java" disabled>Java [Private Beta]</option>
            <option value="c++ "disabled>C++ [Private Beta]</option>
            </select>

        </div>
        <div className="command-input__wrapper">
            <input type="text" className="command-input" placeholder="Enter a command" />
            <button className="command-input__button"></button>
        </div>
    </div>
  )
}

export default CommandControl