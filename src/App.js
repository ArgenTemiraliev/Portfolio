import './App.css';
import Contact from './components/contact/Contact';
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
      <Contact/>
    </>
  );
}

export default App;
