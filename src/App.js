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
import Blog from './Component/Home/Blog/Blog';
import ContactWithME from './Component/Home/ContactWithME/ContactWithME';
import Navbar from './Component/Home/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Header2 />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactWithME />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
