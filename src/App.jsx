import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portifolio from "./components/portfolio/Portifolio";
import Projects from "./components/projects/Projects";
import './app.scss';
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <Menu /> 
      <div className="sections">
        <Intro/>
        <Portifolio/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
