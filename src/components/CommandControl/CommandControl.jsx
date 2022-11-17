import React from 'react'

function CommandControl() {
  return (
    <div className="command-control">
        <div className="language-settings">
            
            <label htmlFor="language">Language : </label>
            <select name="language" id="language-select">
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            </select>

        </div>
        <div className="command-input__wrapper">
            <input type="text" className="command-input" placeholder="Enter a command" />
            <button className="command-input__button">Run</button>
        </div>
    </div>
  )
}

export default CommandControl