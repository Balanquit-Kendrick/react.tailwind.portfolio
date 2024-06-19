import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import './index.css';




function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Sidebar/>
        <Navbar/>
        <Hero/>
        <Skills/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
