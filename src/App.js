import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projekt from './components/project/Projekt';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projekt/>
      {/* <Skills /> */}
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
