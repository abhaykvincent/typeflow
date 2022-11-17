import React from 'react';
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
