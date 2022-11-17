import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header>
        <div className="logo"></div>
      </header>

      <main>

        {/* Source Code */}
        <div className="source-code">
          <div className="source-code__header">
            <h1>Source Code</h1>
            <div className="source-code__header-options">
              <div className="option-button copy"> copy</div>
              <div className="option-button delete"> delete</div>
            </div>
          </div>
          <div className="source-code__body">

            {/* Final Code */}
            <pre>
              <code>
                {`import React from 'react';`}
              </code>
            </pre>
          </div>
        </div>

        {/* Playground */}
        <div className="playground">
          <div className="playground__header">
            <h1>Playground</h1>
          </div>
          <div className="playground__body">

            <div className="code-snippets">
              {/*  Code Snippets */}
            <pre>
              <code>
                {`import React from 'react';`}
              </code>
              <code>
                {`import logo from './logo.svg';`}
              </code>
              <code>
                {`import './App.css';`}
              </code>
              <code>
                {`function App() {`}
              </code>
              <code>
                {`  return (`}
              </code>
              
            </pre>
            </div>
          </div>
        </div>
        
      </main>

      {/* Command Control */}
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
    </div>
  );
}

export default App;
