import React from 'react';
import './styles/App.css';
import {CollapsedRangeSelector} from "./components/CollapsedRangeSelector";

function App() {
  return (
    <div className="App">
      <header className="text-red-300">
        <CollapsedRangeSelector/>
      </header>
    </div>
  );
}

export default App;
