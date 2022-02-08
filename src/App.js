import logo from './logo.svg';
import './App.css';
import Header2 from './Component/Home/Header/Header2';
import AboutMe from './Component/Home/AboutMe/AboutMe';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ContactWithME from './Component/Home/ContactWithME/ContactWithME';
import Navbar from './Component/Home/Navbar/Navbar';
import ProjectDetails from './Component/Home/ProjectDetails/ProjectDetails';
import AllProject from './Component/Home/Projects/AllProject';
import AllBlog from './Component/Home/Blog/AllBlog';
import Achivement from './Component/Home/Achivement/Achivement';
import AchivementDetails from './Component/Home/Achivement/AchivementDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Header2 />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/blog" element={<AllBlog />} />
          <Route path="/contact" element={<ContactWithME />} />
          <Route path="/projectDetails/:ID" element={<ProjectDetails />} />
          <Route path="/allProject" element={<AllProject />} />
          <Route path="/achivement" element={<Achivement />} />
          <Route path="/achivementDetails/:ID" element={<AchivementDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
