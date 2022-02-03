import logo from './logo.svg';
import './App.css';
import Header2 from './Component/Home/Header/Header2';
import AboutMe from './Component/Home/AboutMe/AboutMe';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from './Component/Home/Projects/Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header2 />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
