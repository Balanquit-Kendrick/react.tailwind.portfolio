import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import './index.css';




function App() {
  const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  return (
    <div
            style={{  
                margin: "auto",
            }}
        >
            
            {isLoading ? (
                <div className="h-screen grid place-content-center"
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <HashLoader color="#34B2EA" />
                </div>
            ) : (
              <div className="App">
                <header className="App-header delay">
                  <Sidebar/>
                  <Navbar/>
                  <Hero/>
                  <About/>
                  <Work/>
                  <Skills/>
                  <Contact/>
                  <Footer/>
                </header>
              </div>
            )}
        </div>
    
  );
}

export default App;
