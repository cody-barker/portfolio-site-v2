import "../Styles/App.css";
import NavBar from "./NavBar";
import Header from "./Header";
import ProjectGroup from "./ProjectGroup";
import TechGroup from "./TechGroup";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <ProjectGroup />
      <TechGroup />
    </div>
  );
}

export default App;
