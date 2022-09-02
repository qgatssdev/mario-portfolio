import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Lines from './components/Lines/Lines';
import Process from './components/Process/Process';
import Skills from './components/Skills/Skills';
import ToolBox from './components/ToolBox/ToolBox';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Hero />
        <Lines />
        <About />
        <Works />
        <Process />
        <Skills />
        <ToolBox />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
