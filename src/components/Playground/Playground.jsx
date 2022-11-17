import React from 'react'
import  './Playground.scss'
function Playground() {
  return (
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
  )
}

export default Playground