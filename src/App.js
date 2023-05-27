import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Updated app from Nryde</p>
        App Version {process.env.REACT_APP_VERSION}
      </header>
    </div>
  );
}

export default App;
