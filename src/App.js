import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
