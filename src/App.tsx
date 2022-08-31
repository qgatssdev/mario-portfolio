import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Lines from './components/Lines/Lines';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <Hero />
        <Lines />
      </div>
    </div>
  );
}

export default App;
