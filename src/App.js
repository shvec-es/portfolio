import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
// import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        {/* <Skills/> */}
        <Projects/>
      </main>
    </>
  );
}

export default App;
