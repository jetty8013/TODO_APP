import './App.css';
import Nav from './component/Nav';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
