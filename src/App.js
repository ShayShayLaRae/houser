import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       {routes}
      </header>
    </div>
  );
}

export default App;
