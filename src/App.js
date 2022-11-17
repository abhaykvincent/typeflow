import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header>
        Header
      </header>

      <main>

        {/* Source Code */}
        <div className="source-code">
        </div>
        {/* Playground */}
        <div className="playground">
        </div>
        
      </main>
      
      {/* Command Control */}
      <div className="command-control">
        <button>Button</button>
      </div>
    </div>
  );
}

export default App;
