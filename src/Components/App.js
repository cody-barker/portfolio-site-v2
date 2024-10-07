import "../Styles/App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import ProjectGroup from "./ProjectGroup";
import TechGroup from "./TechGroup";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <ProjectGroup />
      <TechGroup />
      <Footer />
    </div>
  );
}

export default App;
