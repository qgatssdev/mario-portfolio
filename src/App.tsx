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
import MediaQuery from 'react-responsive';
import MobileFooter from './components/Footer/MobileFooter';
import MobileHeader from './components/MobileHeader/MobileHeader';
import MobileHero from './components/MobileHero/MobileHero';
import MobileLines from './components/Lines/MobileLines';

function App() {
  return (
    <div className="App">
      <header>
        <MediaQuery minWidth={577}>
          <Header />
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={576}>
          <MobileHeader />
        </MediaQuery>
      </header>
      <section>
        <MediaQuery minWidth={0} maxWidth={991}>
          <MobileHero />
        </MediaQuery>
        <MediaQuery minWidth={992}>
          x
          <Hero />
        </MediaQuery>
        <MediaQuery minWidth={992}>
          <Lines />
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={991}>
          <MobileLines />
        </MediaQuery>
        <About />
        <Works />
        <Process />
        <Skills />
        <ToolBox />
      </section>
      <footer>
        <MediaQuery minWidth={992}>
          <Footer />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <MobileFooter />
        </MediaQuery>
      </footer>
    </div>
  );
}

export default App;
