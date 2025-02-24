import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Header />

      <section className="about">
        <h2>About Me</h2>
        <p>
          Bilingual Software Developer with a Computer Science degree,
          experienced in JavaScript, Python, and Kotlin. Strong foundation in
          web development through The Odin Project curriculum.
        </p>
      </section>

      <Projects />
      <Skills />
    </div>
  );
}

export default App;
