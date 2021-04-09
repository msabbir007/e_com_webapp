import './App.css';
import Header from './components/Header/Header';
import Battery from './components/Battery/Battery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header> </Header>
        <Battery></Battery>

      </header>
    </div>
  );
}

export default App;
