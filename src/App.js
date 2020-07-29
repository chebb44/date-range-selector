import React from 'react';
import './styles/App.css';
import {DateRangeSelector} from "./containers/DateRangeSelector";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="page-header h-16">
      </header>
      <div className="bg-white h-12 flex justify-end items-center pr-6">
        <DateRangeSelector/>
      </div>
    </div>
  );
}

export default App;
