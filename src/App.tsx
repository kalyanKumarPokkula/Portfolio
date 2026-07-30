import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#070b14" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        className="border-t border-slate-800/50"
        style={{ backgroundColor: "#04060d" }}
      >
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2026{" "}
            <span className="gradient-text font-semibold">
              Kalyan Kumar Pokkula
            </span>
            . All rights reserved.
          </p>
          <p className="text-slate-700 text-xs mt-2">
            Built with React &middot; TypeScript &middot; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
