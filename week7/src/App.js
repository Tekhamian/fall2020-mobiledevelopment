import React, {Component} from 'react';
import './App.css';

// Relative path of the imported components
import Title from './components/Title';
import Counter from './components/Counter';
// import Reset from './components/Reset';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            {/* Self closing tag - renders the return from components */}
            <Title />
            <Counter />
            {/* <Reset /> */}
          </div>

      </header>
    </div>
  );
}

export default App;
