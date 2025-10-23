import React, { useState } from "react"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import About from "./components/About"; 
import Works from "./components/Works";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderSection = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Works': 
        return <Works />;
      case 'Home':
      default:
        // Home/Hero Section
        return (
          <section className="hero">
            <div className="text-container">
              <h3>WELCOME TO<br />MY WEBSITE</h3>
              <h1>
                <span className="creative">Alfred's</span><br />
                <span className="portfolio">PORTFOLIO</span>
              </h1>
              <p>
                A results-driven Software Developer passionate about building responsive, user-centric digital experiences that simplify real-world problems.
              </p>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="App">
      <Topbar /> 
      
      <main className="content">
        {/* I-wrap sa div na may 'key' at 'page-transition' class */}
        <div 
          key={currentPage} 
          className="page-transition"
        >
          {renderSection()}
        </div>
      </main>

      <Navbar 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;