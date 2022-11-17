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
          </div>
          <div className="source-code__body">
          </div>
        </div>

        {/* Playground */}
        <div className="playground">
          <div className="playground__header">
            <h1>Playground</h1>
          </div>
          <div className="playground__body">
          </div>
        </div>
        
      </main>

      {/* Command Control */}
      <div className="command-control">
        <div className="language-settings"></div>
        <div className="command-input__wrapper">
          <input type="text" className="command-input" placeholder="Enter a command" />
          <button className="command-input__button">Run</button>
        </div>
      </div>
    </div>
  );
}

export default App;
