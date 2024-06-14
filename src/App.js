import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import './index.css';



function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Skills/>
        <About/>
        <Work/>
      </header>
    </div>
  );
}

export default App;
