import React from 'react';
import { useGreenText } from './custom-hooks/utils';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  const [greenText, setGreenText] = useGreenText(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORLD CUP PLAYERS</h1>
        <button onClick={() => setGreenText(!greenText)}>Toggle Green Mode {greenText ? 'Off' : 'On'}</button>
        <Wrapper />
      </header>
    </div>
  );
}

export default App;
