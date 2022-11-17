import React from 'react'
import './SourceCode.scss'
function SourceCode() {
  return (
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
            {`import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header';
import SourceCode from './components/SourceCode/SourceCode';
import CommandControl from './components/CommandControl/CommandControl';
import Playground from './components/Playground/Playground';

function App() {
  return (
    <div className="App dark-mode">

      {/* Header */}
      <Header/>

      <main>

        {/* Source Code */}
        <SourceCode/>

        {/* Playground */}
        <Playground/>
        
      </main>

      {/* Command Control */}
      <CommandControl/>
    </div>
  );
}

export default App;
`}
            </code>
        </pre>
        </div>
    </div>
  )
}

export default SourceCode