import React from 'react';

import AppContext from './hooks/AppContext';
import ModalWrapper from './components/Modal/Wrapper';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppContext>
        <Dashboard />
        <ModalWrapper />
      </AppContext>
    </div>
  );
}

export default App;
